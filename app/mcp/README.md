# GamePlan MCP (Model Context Protocol) Server

This module implements the Model Context Protocol for the GamePlan application, allowing AI assistants to interact with the application programmatically.

## What is MCP?

The Model Context Protocol (MCP) is a standardized way for AI assistants to interact with applications. It allows AI models to discover and use tools provided by applications through a well-defined interface.

## How it Works

The MCP server in GamePlan is implemented using FastAPI and is integrated directly into the Flask application. It provides the following endpoints:

- `/mcp/tools` - Returns a list of available tools that AI assistants can use
- `/mcp/execute` - Executes a tool with the provided parameters

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

## Security Note

This implementation does not include authentication as it's designed to run locally. For production use, you should add appropriate authentication mechanisms.
