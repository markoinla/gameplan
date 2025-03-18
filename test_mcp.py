#!/usr/bin/env python3
"""
Test script for the GamePlan MCP server
This script simulates the JSON-RPC requests that Windsurf would send to the MCP server
"""
import json
import os
import sys
import subprocess
import time
from threading import Thread

# JSON-RPC messages to test different methods
INITIALIZE_MSG = {
    "jsonrpc": "2.0", 
    "id": 1, 
    "method": "initialize"
}

TOOLS_LIST_MSG = {
    "jsonrpc": "2.0", 
    "id": 2, 
    "method": "tools/list"
}

SHUTDOWN_MSG = {
    "jsonrpc": "2.0", 
    "id": 99, 
    "method": "shutdown"
}

def send_message_to_process(process, message):
    """Send a JSON-RPC message to the process stdin"""
    msg_str = json.dumps(message)
    process.stdin.write(msg_str + '\n')
    process.stdin.flush()
    print(f"-> Sent: {msg_str}")

def read_message_from_process(process):
    """Read a JSON-RPC message from the process stdout"""
    line = process.stdout.readline().strip()
    if not line:
        return None
    print(f"<- Received: {line}")
    try:
        return json.loads(line)
    except json.JSONDecodeError:
        print(f"Error: Failed to parse response as JSON: {line}")
        return None

def reader_thread(process):
    """Thread to read stderr from the process"""
    while True:
        line = process.stderr.readline()
        if not line:
            break
        print(f"stderr: {line.strip()}")

def main():
    """Test the MCP server by sending JSON-RPC messages"""
    # Find the path to the MCP server script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    mcp_script = os.path.join(script_dir, "mcp", "new_mcp_server.py")
    
    # Make sure the script exists
    if not os.path.exists(mcp_script):
        print(f"Error: MCP server script not found at {mcp_script}")
        sys.exit(1)
    
    # Start the MCP server process
    print(f"Starting MCP server at {mcp_script}")
    env = os.environ.copy()
    env["PYTHONUNBUFFERED"] = "1"
    env["PYTHONIOENCODING"] = "utf-8"
    env["GAMEPLAN_BASE_URL"] = "http://127.0.0.1:5001"
    
    try:
        # Try python3 first, then fall back to python if that fails
        try:
            process = subprocess.Popen(
                ["python3", mcp_script],
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
                bufsize=1,  # Line buffered
                env=env
            )
        except FileNotFoundError:
            # Try with python instead
            print("python3 not found, trying python instead")
            process = subprocess.Popen(
                ["python", mcp_script],
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
                bufsize=1,  # Line buffered
                env=env
            )
    except Exception as e:
        print(f"Error starting MCP server: {e}")
        sys.exit(1)
    
    # Start a thread to read stderr
    stderr_thread = Thread(target=reader_thread, args=(process,), daemon=True)
    stderr_thread.start()
    
    # Give the process time to start up
    time.sleep(2)
    
    try:
        # Test initialize method
        print("\n--- Testing initialize method ---")
        send_message_to_process(process, INITIALIZE_MSG)
        response = read_message_from_process(process)
        if response:
            capabilities = response.get("result", {}).get("capabilities", {})
            tools = response.get("result", {}).get("tools", [])
            print(f"Capabilities: {capabilities}")
            print(f"Number of tools: {len(tools)}")
        
        # Test tools/list method
        print("\n--- Testing tools/list method ---")
        send_message_to_process(process, TOOLS_LIST_MSG)
        response = read_message_from_process(process)
        if response:
            tools = response.get("result", {}).get("tools", [])
            for tool in tools:
                print(f"Tool: {tool.get('name')} - {tool.get('description')}")
        
        # Test shutdown method
        print("\n--- Testing shutdown method ---")
        send_message_to_process(process, SHUTDOWN_MSG)
        response = read_message_from_process(process)
        if response:
            print(f"Shutdown response: {response}")
        
    except Exception as e:
        print(f"Error during testing: {e}")
    finally:
        # Make sure the process is terminated
        try:
            process.terminate()
            process.wait(timeout=2)
        except:
            process.kill()
        
        print("\nTest completed")

if __name__ == "__main__":
    main()