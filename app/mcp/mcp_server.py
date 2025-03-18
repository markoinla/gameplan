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
import logging
import traceback
from datetime import datetime

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

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stderr),
        logging.FileHandler(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'mcp_server.log'))
    ]
)
logger = logging.getLogger('mcp_server')

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
        logger.warning("Received empty input line")
        return None
    try:
        return json.loads(line)
    except json.JSONDecodeError as e:
        logger.error(f"Error decoding JSON: {str(e)}")
        return None

def write_message(message):
    """Write a JSON-RPC message to stdout"""
    json_str = json.dumps(message)
    logger.debug(f"Sending response: {json_str}")
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
            logger.info(f"Successfully fetched {len(tools)} tools from the server")
        else:
            logger.error(f"Error fetching tools: Status code {response.status_code}")
            tools = []
    except requests.RequestException as e:
        logger.error(f"Error fetching tools: {str(e)}")
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
            logger.info(f"Successfully fetched {len(tools)} tools from the server")
            return {
                "jsonrpc": "2.0",
                "id": message.get("id"),
                "result": {
                    "tools": tools
                }
            }
        else:
            logger.error(f"Error fetching tools: Status code {response.status_code}")
            return {
                "jsonrpc": "2.0",
                "id": message.get("id"),
                "error": {
                    "code": -32000,
                    "message": f"Error from GamePlan MCP server: {response.status_code}"
                }
            }
    except requests.RequestException as e:
        logger.error(f"Error fetching tools: {str(e)}")
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
    request_id = message.get("id", "unknown")
    params = message.get("params", {})
    
    # Log the incoming request with a unique identifier
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    request_log_id = f"req_{timestamp}_{request_id}"
    
    logger.info(f"[{request_log_id}] Received tool call request")
    logger.debug(f"[{request_log_id}] Full message: {json.dumps(message)}")
    
    # Extract and validate tool name
    tool_name = params.get("name")
    if not tool_name:
        error_msg = "Missing tool name in request"
        logger.error(f"[{request_log_id}] {error_msg}")
        return {
            "jsonrpc": "2.0",
            "id": request_id,
            "error": {
                "code": -32602,
                "message": error_msg
            }
        }
    
    # Extract and validate tool parameters
    tool_params = params.get("arguments", {})
    if not isinstance(tool_params, dict):
        error_msg = f"Tool parameters must be an object, got {type(tool_params).__name__}"
        logger.error(f"[{request_log_id}] {error_msg}")
        return {
            "jsonrpc": "2.0",
            "id": request_id,
            "error": {
                "code": -32602,
                "message": error_msg
            }
        }
    
    base_url = get_base_url()
    logger.info(f"[{request_log_id}] Executing tool: {tool_name}")
    logger.debug(f"[{request_log_id}] Tool parameters: {json.dumps(tool_params)}")
    
    # Handle tool name prefixes (e.g., mcp0_, mcp1_, etc.)
    original_tool_name = tool_name
    if tool_name and "_" in tool_name:
        prefix, actual_name = tool_name.split("_", 1)
        logger.debug(f"[{request_log_id}] Tool name has prefix: '{prefix}', actual name: '{actual_name}'")
        
        # If the tool name has a prefix like 'mcp0_', remove it
        if prefix.startswith("mcp"):
            tool_name = actual_name
            logger.info(f"[{request_log_id}] Removed prefix from tool name: {original_tool_name} -> {tool_name}")
    
    # Convert boolean values from strings to actual booleans if needed
    # This fixes issues with completed parameter for tasks and issues
    for key, value in tool_params.items():
        if isinstance(value, str) and value.lower() in ['true', 'false']:
            original_value = tool_params[key]
            tool_params[key] = value.lower() == 'true'
            logger.debug(f"[{request_log_id}] Converted boolean parameter '{key}': '{original_value}' -> {tool_params[key]}")
    
    try:
        # Prepare the request to the internal API
        api_endpoint = urljoin(base_url, "/mcp/execute")
        request_data = {"name": tool_name, "parameters": tool_params}
        
        logger.debug(f"[{request_log_id}] Sending request to internal API: POST {api_endpoint}")
        logger.debug(f"[{request_log_id}] Request data: {json.dumps(request_data)}")
        
        # Make the request to the internal API
        response = requests.post(
            api_endpoint,
            json=request_data,
            timeout=DEFAULT_TIMEOUT
        )
        
        logger.debug(f"[{request_log_id}] Response status: {response.status_code}")
        logger.debug(f"[{request_log_id}] Response body: {response.text}")
        
        if response.status_code == 200:
            try:
                result = response.json().get("result")
                logger.info(f"[{request_log_id}] Tool executed successfully")
                
                # Format the result for the MCP client
                return {
                    "jsonrpc": "2.0",
                    "id": request_id,
                    "result": {
                        "content": [
                            {
                                "type": "text",
                                "text": json.dumps(result)
                            }
                        ]
                    }
                }
            except json.JSONDecodeError as e:
                error_msg = f"Invalid JSON response from internal API: {str(e)}"
                logger.error(f"[{request_log_id}] {error_msg}")
                logger.error(f"[{request_log_id}] Response body: {response.text}")
                return {
                    "jsonrpc": "2.0",
                    "id": request_id,
                    "error": {
                        "code": -32000,
                        "message": error_msg
                    }
                }
        else:
            # Handle HTTP error from the internal API
            error_msg = f"Error from internal API: {response.status_code}"
            try:
                error_details = response.json()
                if "error" in error_details:
                    error_msg += f" - {error_details['error']}"
            except:
                error_msg += f" - {response.text}"
            
            logger.error(f"[{request_log_id}] {error_msg}")
            return {
                "jsonrpc": "2.0",
                "id": request_id,
                "error": {
                    "code": -32000,
                    "message": error_msg
                }
            }
    except requests.RequestException as e:
        # Handle network errors
        error_msg = f"Error communicating with internal API: {str(e)}"
        logger.error(f"[{request_log_id}] {error_msg}")
        return {
            "jsonrpc": "2.0",
            "id": request_id,
            "error": {
                "code": -32000,
                "message": error_msg
            }
        }
    except Exception as e:
        # Catch-all for unexpected errors
        error_msg = f"Unexpected error processing tool call: {str(e)}"
        logger.error(f"[{request_log_id}] {error_msg}")
        logger.error(f"[{request_log_id}] Traceback: {traceback.format_exc()}")
        return {
            "jsonrpc": "2.0",
            "id": request_id,
            "error": {
                "code": -32000,
                "message": error_msg
            }
        }

def main():
    """Main function to handle MCP protocol communication"""
    # Print startup message to stderr (won't interfere with JSON-RPC)
    logger.info(f"GamePlan MCP Bridge starting, connecting to {get_base_url()}")
    
    # Find an available port
    port = find_available_port()
    logger.info(f"Starting MCP server on port {port}")
    
    while True:
        message = read_message()
        if not message:
            logger.warning("No message received or invalid JSON, exiting")
            break
        
        method = message.get("method")
        
        logger.info(f"Received method: {method}")
        
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
            logger.error(f"Unknown method: {method}")
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
