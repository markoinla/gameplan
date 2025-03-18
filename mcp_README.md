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
      "command": "/path/to/gameplan/run_mcp.sh",
      "args": [],
      "env": {
        "PYTHONUNBUFFERED": "1",
        "PYTHONIOENCODING": "utf-8",
        "GAMEPLAN_BASE_URL": "http://127.0.0.1:5001"
      },
      "windowsCommand": "${workspaceRoot}\\run_mcp.bat",
      "windowsArgs": []
    }
  }
}
```

Replace `/path/to/gameplan/run_mcp.sh` with the absolute path to your `run_mcp.sh` script.

## MCP Tools Usage Guide

The GamePlan MCP server provides several tools for managing projects, sprints, tasks, and issues. Below is a guide on how to use these tools correctly.

### Important Notes for All Tools

1. **Boolean Parameters**: When setting boolean parameters like `completed`, ensure they are passed as actual boolean values (`true` or `false`), not as strings (`"true"` or `"false"`).

2. **ID Parameters**: All update and delete operations require an `id` parameter to identify the resource to modify.

3. **Required Parameters**: Always include all required parameters as specified in the tool definition.

### Project Management Tools

- `list_projects`: List all projects
- `get_project`: Get details of a specific project by ID
- `create_project`: Create a new project
- `update_project`: Update an existing project
- `delete_project`: Delete a project by ID

### Sprint Management Tools

- `list_sprints`: List all sprints, optionally filtered by project ID
- `get_sprint`: Get details of a specific sprint by ID
- `create_sprint`: Create a new sprint
- `update_sprint`: Update an existing sprint
- `delete_sprint`: Delete a sprint by ID

### Task Management Tools

- `list_tasks`: List all tasks, optionally filtered by sprint ID
- `get_task`: Get details of a specific task by ID
- `create_task`: Create a new task
- `update_task`: Update an existing task
- `delete_task`: Delete a task by ID

### Issue Management Tools

- `list_issues`: List all issues, optionally filtered by sprint ID
- `get_issue`: Get details of a specific issue by ID
- `create_issue`: Create a new issue
- `update_issue`: Update an existing issue
- `delete_issue`: Delete an issue by ID

## Examples

### Updating a Task

To update a task, use the `update_task` tool with the following parameters:

```json
{
  "id": 37,
  "completed": true,
  "details": "Task description",
  "sprint_id": 2
}
```

**Important**: The `completed` parameter must be a boolean value (`true` or `false`), not a string.

If you're using curl directly to test the API:

```bash
curl -X PUT http://127.0.0.1:5000/api/tasks/37 -H "Content-Type: application/json" -d '{"completed": true, "details": "Task description", "sprint_id": 2}'
```

### Updating an Issue

To update an issue, use the `update_issue` tool with the following parameters:

```json
{
  "id": 10,
  "completed": true,
  "details": "Issue description",
  "sprint_id": 2
}
```

**Important**: The `completed` parameter must be a boolean value (`true` or `false`), not a string.

If you're using curl directly to test the API:

```bash
curl -X PUT http://127.0.0.1:5000/api/issues/10 -H "Content-Type: application/json" -d '{"completed": true, "details": "Issue description", "sprint_id": 2}'
```

## Troubleshooting

### Common Issues

1. **Boolean Parameter Errors**: If you're having trouble updating the `completed` status of tasks or issues, make sure you're passing a boolean value (`true` or `false`), not a string (`"true"` or `"false"`).

2. **Missing Required Parameters**: When updating tasks or issues, make sure to include the `sprint_id` parameter, as it's required by the API.

3. **Parameter Name Mismatch**: Make sure you're using `id` (not `task_id` or `issue_id`) when updating tasks or issues.

### Direct API Access

If the MCP tools aren't working correctly, you can always use direct API calls as shown in the examples above.

## Further Help

If you encounter any issues with the MCP server or tools, please check the server logs for error messages and ensure that both the GamePlan application and the MCP server are running correctly.
