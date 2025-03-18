"""
MCP Tool Definitions

This module provides a single source of truth for MCP tool definitions used by both
the integrated MCP server and the standalone MCP server bridge.

By centralizing these definitions, we ensure consistency between the two servers
and reduce the potential for mismatches in tool names or parameters.

IMPORTANT USAGE NOTE FOR AI ASSISTANTS:
When calling these tools through Windsurf or other MCP clients, you must prefix
the tool name with "mcp0_" (or another prefix specified by the client).
For example, to call the "list_projects" tool, use "mcp0_list_projects".
The prefix is automatically assigned by the MCP client and may vary depending
on the installation.
"""

# Define the tools available to the MCP server
TOOLS = [
    {
        "name": "list_projects",
        "description": "List all projects in the GamePlan application",
        "parameters": {
            "type": "object",
            "properties": {},
            "required": []
        }
    },
    {
        "name": "get_project",
        "description": "Get details of a specific project by ID",
        "parameters": {
            "type": "object",
            "properties": {
                "project_id": {
                    "type": "integer",
                    "description": "ID of the project to retrieve"
                }
            },
            "required": ["project_id"]
        }
    },
    {
        "name": "create_project",
        "description": "Create a new project",
        "parameters": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "Name of the project"
                },
                "description": {
                    "type": "string",
                    "description": "Description of the project"
                },
                "requirements": {
                    "type": "string",
                    "description": "Requirements for the project"
                }
            },
            "required": ["name"]
        }
    },
    {
        "name": "update_project",
        "description": "Update an existing project",
        "parameters": {
            "type": "object",
            "properties": {
                "project_id": {
                    "type": "integer",
                    "description": "ID of the project to update"
                },
                "name": {
                    "type": "string",
                    "description": "Name of the project"
                },
                "description": {
                    "type": "string",
                    "description": "Description of the project"
                },
                "requirements": {
                    "type": "string",
                    "description": "Requirements for the project"
                }
            },
            "required": ["project_id"]
        }
    },
    {
        "name": "delete_project",
        "description": "Delete a project by ID",
        "parameters": {
            "type": "object",
            "properties": {
                "project_id": {
                    "type": "integer",
                    "description": "ID of the project to delete"
                }
            },
            "required": ["project_id"]
        }
    },
    {
        "name": "list_sprints",
        "description": "List all sprints, optionally filtered by project ID",
        "parameters": {
            "type": "object",
            "properties": {
                "project_id": {
                    "type": "integer",
                    "description": "ID of the project to filter sprints by"
                }
            },
            "required": []
        }
    },
    {
        "name": "get_sprint",
        "description": "Get details of a specific sprint by ID",
        "parameters": {
            "type": "object",
            "properties": {
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint to retrieve"
                }
            },
            "required": ["sprint_id"]
        }
    },
    {
        "name": "create_sprint",
        "description": "Create a new sprint",
        "parameters": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "Name of the sprint"
                },
                "description": {
                    "type": "string",
                    "description": "Description of the sprint"
                },
                "status": {
                    "type": "string",
                    "description": "Status of the sprint (Planned, Active, Completed)"
                },
                "project_id": {
                    "type": "integer",
                    "description": "ID of the project this sprint belongs to"
                }
            },
            "required": ["name", "project_id"]
        }
    },
    {
        "name": "update_sprint",
        "description": "Update an existing sprint",
        "parameters": {
            "type": "object",
            "properties": {
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint to update"
                },
                "name": {
                    "type": "string",
                    "description": "Name of the sprint"
                },
                "description": {
                    "type": "string",
                    "description": "Description of the sprint"
                },
                "status": {
                    "type": "string",
                    "description": "Status of the sprint (Planned, Active, Completed)"
                },
                "project_id": {
                    "type": "integer",
                    "description": "ID of the project this sprint belongs to"
                }
            },
            "required": ["sprint_id"]
        }
    },
    {
        "name": "delete_sprint",
        "description": "Delete a sprint by ID",
        "parameters": {
            "type": "object",
            "properties": {
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint to delete"
                }
            },
            "required": ["sprint_id"]
        }
    },
    {
        "name": "list_tasks",
        "description": "List all tasks, optionally filtered by sprint ID",
        "parameters": {
            "type": "object",
            "properties": {
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint to filter tasks by"
                }
            },
            "required": []
        }
    },
    {
        "name": "get_task",
        "description": "Get details of a specific task by ID",
        "parameters": {
            "type": "object",
            "properties": {
                "task_id": {
                    "type": "integer",
                    "description": "ID of the task to retrieve"
                }
            },
            "required": ["task_id"]
        }
    },
    {
        "name": "create_task",
        "description": "Create a new task",
        "parameters": {
            "type": "object",
            "properties": {
                "details": {
                    "type": "string",
                    "description": "Details of the task"
                },
                "completed": {
                    "type": "boolean",
                    "description": "Whether the task is completed"
                },
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint this task belongs to"
                }
            },
            "required": ["details", "sprint_id"]
        }
    },
    {
        "name": "update_task",
        "description": "Update an existing task. Note: When setting 'completed' to true or false, ensure it's passed as a boolean value (not a string). Example: use 'completed': true (not 'completed': 'true'). If using curl directly: curl -X PUT http://127.0.0.1:5000/api/tasks/{id} -H 'Content-Type: application/json' -d '{\"completed\": true, \"details\": \"Task details\", \"sprint_id\": 2}'",
        "parameters": {
            "type": "object",
            "properties": {
                "task_id": {
                    "type": "integer",
                    "description": "ID of the task to update"
                },
                "details": {
                    "type": "string",
                    "description": "Details of the task"
                },
                "completed": {
                    "type": "boolean",
                    "description": "Whether the task is completed"
                },
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint this task belongs to"
                }
            },
            "required": ["task_id"]
        }
    },
    {
        "name": "delete_task",
        "description": "Delete a task by ID",
        "parameters": {
            "type": "object",
            "properties": {
                "task_id": {
                    "type": "integer",
                    "description": "ID of the task to delete"
                }
            },
            "required": ["task_id"]
        }
    },
    {
        "name": "list_issues",
        "description": "List all issues, optionally filtered by sprint ID",
        "parameters": {
            "type": "object",
            "properties": {
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint to filter issues by"
                }
            },
            "required": []
        }
    },
    {
        "name": "get_issue",
        "description": "Get details of a specific issue by ID",
        "parameters": {
            "type": "object",
            "properties": {
                "issue_id": {
                    "type": "integer",
                    "description": "ID of the issue to retrieve"
                }
            },
            "required": ["issue_id"]
        }
    },
    {
        "name": "create_issue",
        "description": "Create a new issue",
        "parameters": {
            "type": "object",
            "properties": {
                "details": {
                    "type": "string",
                    "description": "Details of the issue"
                },
                "completed": {
                    "type": "boolean",
                    "description": "Whether the issue is completed"
                },
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint this issue belongs to"
                }
            },
            "required": ["details", "sprint_id"]
        }
    },
    {
        "name": "update_issue",
        "description": "Update an existing issue. Note: When setting 'completed' to true or false, ensure it's passed as a boolean value (not a string). Example: use 'completed': true (not 'completed': 'true'). If using curl directly: curl -X PUT http://127.0.0.1:5000/api/issues/{id} -H 'Content-Type: application/json' -d '{\"completed\": true, \"details\": \"Issue details\", \"sprint_id\": 2}'",
        "parameters": {
            "type": "object",
            "properties": {
                "issue_id": {
                    "type": "integer",
                    "description": "ID of the issue to update"
                },
                "details": {
                    "type": "string",
                    "description": "Details of the issue"
                },
                "completed": {
                    "type": "boolean",
                    "description": "Whether the issue is completed"
                },
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint this issue belongs to"
                }
            },
            "required": ["issue_id"]
        }
    },
    {
        "name": "delete_issue",
        "description": "Delete an issue by ID",
        "parameters": {
            "type": "object",
            "properties": {
                "issue_id": {
                    "type": "integer",
                    "description": "ID of the issue to delete"
                }
            },
            "required": ["issue_id"]
        }
    }
]

# Helper function to get a tool definition by name
def get_tool_definition(name):
    """
    Get a tool definition by name
    
    Args:
        name (str): Name of the tool to retrieve
        
    Returns:
        dict: Tool definition or None if not found
    """
    for tool in TOOLS:
        if tool["name"] == name:
            return tool
    return None

# Helper function to get parameter names for a tool
def get_tool_parameters(name):
    """
    Get the parameter names for a tool
    
    Args:
        name (str): Name of the tool to retrieve parameters for
        
    Returns:
        list: List of parameter names or empty list if tool not found
    """
    tool = get_tool_definition(name)
    if not tool:
        return []
    
    return list(tool["parameters"].get("properties", {}).keys())
