#!/bin/bash
# Script to run the MCP server with proper environment setup

# Directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Ensure we have requests installed
echo "Installing required dependencies..."
"$SCRIPT_DIR/install_dependencies.py" || {
    echo "Failed to install dependencies. Attempting to continue anyway."
}

# Set required environment variables
export PYTHONUNBUFFERED=1
export PYTHONIOENCODING=utf-8
export GAMEPLAN_BASE_URL=http://127.0.0.1:5001

# Run the MCP server
echo "Starting MCP server..."
python3 "$SCRIPT_DIR/mcp/new_mcp_server.py"