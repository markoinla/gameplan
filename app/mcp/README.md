# GamePlan MCP (Model Context Protocol) Server

This module implements the Model Context Protocol for the GamePlan application, allowing AI assistants to interact with the application programmatically.

## What is MCP?

The Model Context Protocol (MCP) is a standardized way for AI assistants to interact with applications. It allows AI models to discover and use tools provided by applications through a well-defined interface.

## Architecture Overview

The GamePlan MCP implementation consists of two main components:

1. **Integrated MCP Server** - Implemented in `app/mcp/server.py`, this component is integrated directly into the Flask application and provides the MCP endpoints.

2. **Standalone MCP Bridge** - Implemented in `app/mcp/mcp_server.py`, this component serves as a bridge between Windsurf (or other MCP clients) and the GamePlan application. It translates between the MCP protocol used by Windsurf and the HTTP API exposed by the GamePlan application.

## How It Works

1. The standalone MCP bridge (`mcp_server.py`) is started by Windsurf using the command-based configuration in `mcp_config.json`
2. It communicates with Windsurf using stdin/stdout following the MCP protocol
3. It forwards requests to the GamePlan application's MCP endpoints (`/mcp/tools` and `/mcp/execute`)
4. The integrated MCP server handles these requests and performs the requested operations
5. Results are translated back to the MCP protocol format for Windsurf

## Prerequisites

- Python 3.x
- The `requests` library (`pip install requests`)
- A running GamePlan application server (typically at http://127.0.0.1:5001)

## Windsurf Configuration

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
      }
    }
  }
}
```

Replace `/path/to/gameplan/run_mcp.sh` with the absolute path to your `run_mcp.sh` script.

## Available Tools

The MCP server provides tools for all CRUD operations on GamePlan entities:

### Projects
- `list_projects` - List all projects
- `get_project` - Get details of a specific project
- `create_project` - Create a new project
- `update_project` - Update an existing project
- `delete_project` - Delete a project

### Sprints
- `list_sprints` - List all sprints, optionally filtered by project
- `get_sprint` - Get details of a specific sprint
- `create_sprint` - Create a new sprint
- `update_sprint` - Update an existing sprint
- `delete_sprint` - Delete a sprint

### Tasks
- `list_tasks` - List all tasks, optionally filtered by sprint
- `get_task` - Get details of a specific task
- `create_task` - Create a new task
- `update_task` - Update an existing task
- `delete_task` - Delete a task

### Issues
- `list_issues` - List all issues, optionally filtered by sprint
- `get_issue` - Get details of a specific issue
- `create_issue` - Create a new issue
- `update_issue` - Update an existing issue
- `delete_issue` - Delete an issue

## Important Notes for All Tools

1. **Boolean Parameters**: When setting boolean parameters like `completed`, ensure they are passed as actual boolean values (`true` or `false`), not as strings (`"true"` or `"false"`).

2. **ID Parameters**: All update and delete operations require an `id` parameter to identify the resource to modify.

3. **Required Parameters**: Always include all required parameters as specified in the tool definition.

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

## Usage Example

Here's an example of how an AI assistant might use the MCP server to create a new project:

```json
POST /mcp/execute
{
  "name": "create_project",
  "parameters": {
    "name": "New AI Project",
    "description": "A project to explore AI capabilities",
    "requirements": "Must include machine learning components"
  }
}
```

## Troubleshooting

### Common Issues

1. **Boolean Parameter Errors**: If you're having trouble updating the `completed` status of tasks or issues, make sure you're passing a boolean value (`true` or `false`), not a string (`"true"` or `"false"`).

2. **Missing Required Parameters**: When updating tasks or issues, make sure to include the `sprint_id` parameter, as it's required by the API.

3. **Parameter Name Mismatch**: Make sure you're using `id` (not `task_id` or `issue_id`) when updating tasks or issues.

### Direct API Access

If the MCP tools aren't working correctly, you can always use direct API calls. For example:

```bash
curl -X PUT http://127.0.0.1:5000/api/tasks/37 -H "Content-Type: application/json" -d '{"completed": true, "details": "Task description", "sprint_id": 2}'
```

## Security Note

This implementation does not include authentication as it's designed to run locally. For production use, you should add appropriate authentication mechanisms.
