# GamePlan MCP Server Bridge

This document explains how to set up and configure the GamePlan MCP (Model Context Protocol) server bridge for use with Windsurf and other MCP clients.

## Overview

The `mcp_server.py` script serves as a bridge between Windsurf (or other MCP clients) and the GamePlan application's MCP server. It translates between the MCP protocol used by Windsurf and the HTTP API exposed by the GamePlan application.

## Prerequisites

- Python 3.x
- The `requests` library (`pip install requests`)
- A running GamePlan application server (typically at http://127.0.0.1:5001)

## How It Works

1. The script is started by Windsurf using the command-based configuration in `mcp_config.json`
2. It communicates with Windsurf using stdin/stdout following the MCP protocol
3. It forwards requests to the GamePlan application's MCP endpoints (`/mcp/tools` and `/mcp/execute`)
4. It translates responses back to the MCP protocol format for Windsurf

## Configuration

### Windsurf Configuration

To configure Windsurf to use the GamePlan MCP server, add the following to your `mcp_config.json` file:

```json
{
  "mcpServers": {
    "gameplan": {
      "command": "python3",
      "args": [
        "${workspaceRoot}/mcp_server.py"
      ],
      "env": {
        "PYTHONUNBUFFERED": "1",
        "GAMEPLAN_BASE_URL": "http://127.0.0.1:5001"
      }
    }
  }
}
```

### Configuration Options

The MCP server bridge can be configured using the following environment variables:

- `GAMEPLAN_BASE_URL`: The base URL of the GamePlan application (default: `http://127.0.0.1:5001`)
- `PYTHONUNBUFFERED`: Set to `1` to ensure Python output is not buffered (required for proper communication with Windsurf)

## Troubleshooting

### Common Issues

1. **"Failed to start command: exec: 'python': executable file not found in $PATH"**
   - Solution: Use `python3` instead of `python` in the command field, or provide the full path to the Python executable

2. **"Error fetching tools: Status code 404"**
   - Solution: Make sure the GamePlan application is running and the base URL is correct
   - Check that the `/mcp/tools` endpoint is accessible in your browser

3. **"Request failed" error in Windsurf**
   - Solution: Ensure the GamePlan application is running
   - Check the MCP server bridge script for any errors
   - Verify that the environment variables are correctly set

## Development Notes

When modifying the MCP server bridge:

1. Always ensure the correct endpoint URLs are used (`/mcp/tools` and `/mcp/execute`)
2. Handle exceptions properly to avoid crashing the bridge
3. Use the `PYTHONUNBUFFERED=1` environment variable to prevent output buffering
4. Test the bridge manually before configuring Windsurf:
   ```
   echo '{"jsonrpc": "2.0", "method": "initialize", "id": 1}' | ./mcp_server.py
   ```

## Portable Configuration

The MCP server bridge is designed to be portable across different installations:

1. It uses `#!/usr/bin/env python3` for cross-platform compatibility
2. It supports configuration via environment variables
3. It works with relative paths using the `${workspaceRoot}` variable in Windsurf configuration
