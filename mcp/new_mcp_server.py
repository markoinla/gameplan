#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Standalone MCP server for GamePlan that's compatible with Windsurf
This script provides a Model Context Protocol (MCP) server that connects
to the GamePlan Flask application, allowing AI assistants to interact with
the application through tools.

It implements the JSON-RPC based MCP protocol required by Windsurf.
"""
import asyncio
import json
import sys
import os
import socket
import requests
from urllib.parse import urljoin
from http.server import BaseHTTPRequestHandler, HTTPServer

# Default base URL for the GamePlan API
DEFAULT_BASE_URL = "http://127.0.0.1:5001"
# Default timeout for HTTP requests (in seconds)
DEFAULT_TIMEOUT = 10

def find_available_port():
    """Find an available port on the system"""
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(('localhost', 0))
    port = sock.getsockname()[1]
    sock.close()
    return port

def get_base_url():
    """Get the base URL for the GamePlan API, either from environment or default"""
    return os.environ.get("GAMEPLAN_BASE_URL", DEFAULT_BASE_URL)

def fetch_tools():
    """Fetch the available tools from the GamePlan API"""
    base_url = get_base_url()
    try:
        response = requests.get(urljoin(base_url, "/mcp/tools"), timeout=DEFAULT_TIMEOUT)
        if response.status_code == 200:
            return response.json()
        print(f"Error fetching tools: Status code {response.status_code}", file=sys.stderr)
    except requests.RequestException as e:
        print(f"Error fetching tools: {str(e)}", file=sys.stderr)
    return []

def execute_tool(name, parameters):
    """Execute a tool on the GamePlan API"""
    base_url = get_base_url()
    try:
        response = requests.post(
            urljoin(base_url, "/mcp/execute"),
            json={"name": name, "parameters": parameters},
            timeout=DEFAULT_TIMEOUT
        )
        if response.status_code == 200:
            return response.json().get("result")
        print(f"Error executing tool: Status code {response.status_code}", file=sys.stderr)
    except requests.RequestException as e:
        print(f"Error executing tool: {str(e)}", file=sys.stderr)
    return {"error": f"Failed to execute tool {name}"}

class MCPRequestHandler(BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

    def do_GET(self):
        self._set_response()
        if self.path == '/mcp':
            self.wfile.write(json.dumps({'message': 'GamePlan MCP Server is running'}).encode('utf-8'))
        elif self.path == '/mcp/tools':
            tools = fetch_tools()
            self.wfile.write(json.dumps(tools).encode('utf-8'))
        else:
            self.wfile.write(json.dumps({'error': 'Not Found'}).encode('utf-8'))

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        message = json.loads(post_data.decode('utf-8'))

        self._set_response()
        if self.path == '/mcp/execute':
            tool_name = message.get("name")
            tool_params = message.get("parameters", {})
            result = execute_tool(tool_name, tool_params)
            self.wfile.write(json.dumps({"result": result}).encode('utf-8'))
        else:
            self.wfile.write(json.dumps({'error': 'Not Found'}).encode('utf-8'))

def read_message():
    """Read a JSON-RPC message from stdin"""
    line = sys.stdin.readline()
    if not line:
        return None
    try:
        return json.loads(line)
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {str(e)}", file=sys.stderr)
        return None

def write_message(message):
    """Write a JSON-RPC message to stdout"""
    json_str = json.dumps(message)
    sys.stdout.write(json_str + "\n")
    sys.stdout.flush()

def handle_initialize(message):
    """Handle initialize request"""
    capabilities = {
        "tools": {
            "supported": True
        }
    }
    
    # Get the tools from the MCP server
    tools = fetch_tools()
    print(f"Successfully fetched {len(tools)} tools from the server", file=sys.stderr)
    
    return {
        "jsonrpc": "2.0",
        "id": message.get("id"),
        "result": {
            "name": "gameplan-mcp",
            "version": "1.0.0",
            "capabilities": capabilities,
            "tools": tools
        }
    }

def handle_tools_list(message):
    """Handle tools/list request"""
    tools = fetch_tools()
    print(f"Successfully fetched {len(tools)} tools from the server", file=sys.stderr)
    
    return {
        "jsonrpc": "2.0",
        "id": message.get("id"),
        "result": {
            "tools": tools
        }
    }

def handle_tools_call(message):
    """Handle tools/call request"""
    params = message.get("params", {})
    tool_name = params.get("name")
    tool_params = params.get("arguments", {})
    
    print(f"Executing tool: {tool_name} with params: {tool_params}", file=sys.stderr)
    
    result = execute_tool(tool_name, tool_params)
    
    return {
        "jsonrpc": "2.0",
        "id": message.get("id"),
        "result": {
            "content": [
                {
                    "type": "text",
                    "text": json.dumps(result)
                }
            ]
        }
    }

def run_http_server(port=None):
    """Run an HTTP server for the MCP API"""
    if port is None:
        port = int(os.environ.get("PORT", 5050))
    
    server_address = ('', port)
    httpd = HTTPServer(server_address, MCPRequestHandler)
    print(f'Starting MCP HTTP server on port {port}', file=sys.stderr)
    httpd.serve_forever()

def main():
    """Main function to handle MCP protocol communication via stdin/stdout"""
    # Print startup message to stderr (won't interfere with JSON-RPC)
    print(f"GamePlan MCP Bridge starting, connecting to {get_base_url()}", file=sys.stderr)
    
    # Run HTTP server in a separate thread for diagnostic purposes
    import threading
    http_port = find_available_port()
    threading.Thread(target=run_http_server, args=(http_port,), daemon=True).start()
    print(f"HTTP diagnostics available at http://localhost:{http_port}/mcp", file=sys.stderr)
    
    while True:
        message = read_message()
        if not message:
            print("No message received or invalid JSON, exiting", file=sys.stderr)
            break
        
        method = message.get("method")
        
        print(f"Received method: {method}", file=sys.stderr)
        
        if method == "initialize":
            response = handle_initialize(message)
            write_message(response)
        elif method == "tools/list":
            response = handle_tools_list(message)
            write_message(response)
        elif method == "tools/call":
            response = handle_tools_call(message)
            write_message(response)
        elif method == "shutdown":
            write_message({
                "jsonrpc": "2.0",
                "id": message.get("id"),
                "result": None
            })
            break
        else:
            print(f"Unknown method: {method}", file=sys.stderr)
            write_message({
                "jsonrpc": "2.0",
                "id": message.get("id"),
                "error": {
                    "code": -32601,
                    "message": f"Method not found: {method}"
                }
            })

if __name__ == "__main__":
    main()