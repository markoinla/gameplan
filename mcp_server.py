#!/usr/bin/env python3
"""
Standalone MCP server for GamePlan
This script provides a command-line interface to start the GamePlan MCP server
for use with Windsurf and other MCP clients.

It's designed to be run from any location and will automatically detect the
correct URL for the GamePlan server.
"""
import sys
import json
import os
import socket
try:
    import requests
except ImportError:
    print("Error: The 'requests' package is required. Please install it using 'pip install requests'", file=sys.stderr)
    sys.exit(1)
from urllib.parse import urljoin

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

def get_base_url():
    """Get the base URL for the GamePlan API, either from environment or default"""
    return os.environ.get("GAMEPLAN_BASE_URL", DEFAULT_BASE_URL)

def handle_initialize(message):
    """Handle initialize request"""
    capabilities = {
        "tools": {
            "supported": True
        }
    }
    
    base_url = get_base_url()
    
    # Get the tools from the MCP server
    try:
        response = requests.get(urljoin(base_url, "/mcp/tools"), timeout=DEFAULT_TIMEOUT)
        if response.status_code == 200:
            tools = response.json()
            print(f"Successfully fetched {len(tools)} tools from the server", file=sys.stderr)
        else:
            print(f"Error fetching tools: Status code {response.status_code}", file=sys.stderr)
            tools = []
    except requests.RequestException as e:
        # More specific exception handling
        print(f"Error fetching tools: {str(e)}", file=sys.stderr)
        tools = []
    
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
    base_url = get_base_url()
    
    try:
        response = requests.get(urljoin(base_url, "/mcp/tools"), timeout=DEFAULT_TIMEOUT)
        if response.status_code == 200:
            tools = response.json()
            print(f"Successfully fetched {len(tools)} tools from the server", file=sys.stderr)
            return {
                "jsonrpc": "2.0",
                "id": message.get("id"),
                "result": {
                    "tools": tools
                }
            }
        else:
            print(f"Error fetching tools: Status code {response.status_code}", file=sys.stderr)
            return {
                "jsonrpc": "2.0",
                "id": message.get("id"),
                "error": {
                    "code": -32000,
                    "message": f"Error from GamePlan MCP server: {response.status_code}"
                }
            }
    except requests.RequestException as e:
        print(f"Error fetching tools: {str(e)}", file=sys.stderr)
        return {
            "jsonrpc": "2.0",
            "id": message.get("id"),
            "error": {
                "code": -32000,
                "message": f"Error communicating with GamePlan MCP server: {str(e)}"
            }
        }

def handle_tools_call(message):
    """Handle tools/call request"""
    params = message.get("params", {})
    tool_name = params.get("name")
    tool_params = params.get("arguments", {})
    base_url = get_base_url()
    
    print(f"Executing tool: {tool_name} with params: {tool_params}", file=sys.stderr)
    
    try:
        response = requests.post(
            urljoin(base_url, "/mcp/execute"),
            json={"name": tool_name, "parameters": tool_params},
            timeout=DEFAULT_TIMEOUT
        )
        
        if response.status_code == 200:
            result = response.json().get("result")
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
        else:
            print(f"Error executing tool: Status code {response.status_code}", file=sys.stderr)
            return {
                "jsonrpc": "2.0",
                "id": message.get("id"),
                "error": {
                    "code": -32000,
                    "message": f"Error from GamePlan MCP server: {response.status_code}"
                }
            }
    except requests.RequestException as e:
        print(f"Error executing tool: {str(e)}", file=sys.stderr)
        return {
            "jsonrpc": "2.0",
            "id": message.get("id"),
            "error": {
                "code": -32000,
                "message": f"Error communicating with GamePlan MCP server: {str(e)}"
            }
        }

def main():
    """Main function to handle MCP protocol communication"""
    # Print startup message to stderr (won't interfere with JSON-RPC)
    print(f"GamePlan MCP Bridge starting, connecting to {get_base_url()}", file=sys.stderr)
    
    # Find an available port
    port = find_available_port()
    print(f"Starting MCP server on port {port}", file=sys.stderr)
    
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
