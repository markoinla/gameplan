"""
MCP (Model Context Protocol) server implementation.

This module implements the Model Context Protocol server for the GamePlan application,
allowing AI assistants to interact with the application programmatically.
"""
import json
from typing import Dict, List, Optional, Any, Union
from fastapi import FastAPI, Request, Response
from pydantic import BaseModel, Field

# Import models and database
from app import db
from app.models import Project, Sprint, Task, Issue

# Create FastAPI app for MCP server
mcp_app = FastAPI(title="GamePlan MCP Server", 
                 description="Model Context Protocol server for GamePlan application")

# Define MCP tool schemas
class ProjectCreate(BaseModel):
    """Schema for creating a new project"""
    name: str = Field(..., description="Name of the project")
    description: Optional[str] = Field(None, description="Description of the project")
    requirements: Optional[str] = Field(None, description="Requirements for the project")

class ProjectUpdate(BaseModel):
    """Schema for updating an existing project"""
    name: Optional[str] = Field(None, description="Name of the project")
    description: Optional[str] = Field(None, description="Description of the project")
    requirements: Optional[str] = Field(None, description="Requirements for the project")

class SprintCreate(BaseModel):
    """Schema for creating a new sprint"""
    name: str = Field(..., description="Name of the sprint")
    description: Optional[str] = Field(None, description="Description of the sprint")
    status: Optional[str] = Field("Planned", description="Status of the sprint (Planned, Active, Completed)")
    project_id: int = Field(..., description="ID of the project this sprint belongs to")

class SprintUpdate(BaseModel):
    """Schema for updating an existing sprint"""
    name: Optional[str] = Field(None, description="Name of the sprint")
    description: Optional[str] = Field(None, description="Description of the sprint")
    status: Optional[str] = Field(None, description="Status of the sprint (Planned, Active, Completed)")
    project_id: Optional[int] = Field(None, description="ID of the project this sprint belongs to")

class TaskCreate(BaseModel):
    """Schema for creating a new task"""
    details: str = Field(..., description="Details of the task")
    completed: Optional[bool] = Field(False, description="Whether the task is completed")
    sprint_id: int = Field(..., description="ID of the sprint this task belongs to")

class TaskUpdate(BaseModel):
    """Schema for updating an existing task"""
    details: Optional[str] = Field(None, description="Details of the task")
    completed: Optional[bool] = Field(None, description="Whether the task is completed")
    sprint_id: Optional[int] = Field(None, description="ID of the sprint this task belongs to")

class IssueCreate(BaseModel):
    """Schema for creating a new issue"""
    details: str = Field(..., description="Details of the issue")
    completed: Optional[bool] = Field(False, description="Whether the issue is completed")
    sprint_id: int = Field(..., description="ID of the sprint this issue belongs to")

class IssueUpdate(BaseModel):
    """Schema for updating an existing issue"""
    details: Optional[str] = Field(None, description="Details of the issue")
    completed: Optional[bool] = Field(None, description="Whether the issue is completed")
    sprint_id: Optional[int] = Field(None, description="ID of the sprint this issue belongs to")

# MCP Tool Definitions
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
                    "description": "New name of the project"
                },
                "description": {
                    "type": "string",
                    "description": "New description of the project"
                },
                "requirements": {
                    "type": "string",
                    "description": "New requirements for the project"
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
                    "description": "Optional project ID to filter sprints by"
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
                    "description": "Status of the sprint (Planned, Active, Completed)",
                    "enum": ["Planned", "Active", "Completed"]
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
                    "description": "New name of the sprint"
                },
                "description": {
                    "type": "string",
                    "description": "New description of the sprint"
                },
                "status": {
                    "type": "string",
                    "description": "New status of the sprint",
                    "enum": ["Planned", "Active", "Completed"]
                },
                "project_id": {
                    "type": "integer",
                    "description": "New project ID for the sprint"
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
                    "description": "Optional sprint ID to filter tasks by"
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
                    "description": "New details of the task"
                },
                "completed": {
                    "type": "boolean",
                    "description": "New completion status of the task (must be a boolean value, not a string)"
                },
                "sprint_id": {
                    "type": "integer",
                    "description": "New sprint ID for the task"
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
                    "description": "Optional sprint ID to filter issues by"
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
                    "description": "New details of the issue"
                },
                "completed": {
                    "type": "boolean",
                    "description": "New completion status of the issue (must be a boolean value, not a string)"
                },
                "sprint_id": {
                    "type": "integer",
                    "description": "New sprint ID for the issue"
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

# MCP routes
@mcp_app.get("/")
async def root():
    """Root endpoint for the MCP server"""
    return {"message": "GamePlan MCP Server is running"}

@mcp_app.get("/mcp/tools")
async def get_tools():
    """Return the list of available tools"""
    return TOOLS

@mcp_app.post("/mcp/execute")
async def execute_tool(request: Request):
    """Execute a tool based on the request"""
    from flask import request
    data = request.get_json()
    tool_name = data.get("name")
    parameters = data.get("parameters", {}) or data.get("arguments", {})
    
    # Log the received parameters for debugging
    print(f"MCP execute tool: {tool_name} with parameters: {parameters}", file=sys.stderr)
    
    # Find the tool implementation
    tool_impl = globals().get(f"tool_{tool_name}")
    if not tool_impl:
        return {"error": f"Tool '{tool_name}' not found"}
    
    # Execute the tool with the provided parameters
    try:
        # Ensure boolean parameters are properly handled
        for key, value in parameters.items():
            if isinstance(value, str) and value.lower() in ['true', 'false']:
                parameters[key] = value.lower() == 'true'
        
        result = tool_impl(**parameters)
        return {"result": result}
    except Exception as e:
        print(f"Error executing tool {tool_name}: {str(e)}", file=sys.stderr)
        return {"error": str(e)}

# Tool implementations
def tool_list_projects():
    """List all projects"""
    projects = Project.query.all()
    return [project.to_dict() for project in projects]

def tool_get_project(project_id: int):
    """Get a project by ID"""
    project = Project.query.get(project_id)
    if not project:
        raise ValueError(f"Project with ID {project_id} not found")
    return project.to_dict()

def tool_create_project(name: str, description: str = None, requirements: str = None):
    """Create a new project"""
    project = Project(name=name, description=description, requirements=requirements)
    db.session.add(project)
    db.session.commit()
    return project.to_dict()

def tool_update_project(project_id: int, name: str = None, description: str = None, requirements: str = None):
    """Update an existing project"""
    project = Project.query.get(project_id)
    if not project:
        raise ValueError(f"Project with ID {project_id} not found")
    
    if name is not None:
        project.name = name
    if description is not None:
        project.description = description
    if requirements is not None:
        project.requirements = requirements
    
    db.session.commit()
    return project.to_dict()

def tool_delete_project(project_id: int):
    """Delete a project by ID"""
    project = Project.query.get(project_id)
    if not project:
        raise ValueError(f"Project with ID {project_id} not found")
    
    db.session.delete(project)
    db.session.commit()
    return {"message": f"Project with ID {project_id} deleted successfully"}

def tool_list_sprints(project_id: int = None):
    """List all sprints, optionally filtered by project ID"""
    if project_id:
        sprints = Sprint.query.filter_by(project_id=project_id).all()
    else:
        sprints = Sprint.query.all()
    return [sprint.to_dict() for sprint in sprints]

def tool_get_sprint(sprint_id: int):
    """Get a sprint by ID"""
    sprint = Sprint.query.get(sprint_id)
    if not sprint:
        raise ValueError(f"Sprint with ID {sprint_id} not found")
    return sprint.to_dict()

def tool_create_sprint(name: str, project_id: int, description: str = None, status: str = "Planned"):
    """Create a new sprint"""
    # Verify project exists
    project = Project.query.get(project_id)
    if not project:
        raise ValueError(f"Project with ID {project_id} not found")
    
    sprint = Sprint(name=name, description=description, status=status, project_id=project_id)
    db.session.add(sprint)
    db.session.commit()
    return sprint.to_dict()

def tool_update_sprint(sprint_id: int, name: str = None, description: str = None, 
                      status: str = None, project_id: int = None):
    """Update an existing sprint"""
    sprint = Sprint.query.get(sprint_id)
    if not sprint:
        raise ValueError(f"Sprint with ID {sprint_id} not found")
    
    if name is not None:
        sprint.name = name
    if description is not None:
        sprint.description = description
    if status is not None:
        sprint.status = status
    if project_id is not None:
        # Verify project exists
        project = Project.query.get(project_id)
        if not project:
            raise ValueError(f"Project with ID {project_id} not found")
        sprint.project_id = project_id
    
    db.session.commit()
    return sprint.to_dict()

def tool_delete_sprint(sprint_id: int):
    """Delete a sprint by ID"""
    sprint = Sprint.query.get(sprint_id)
    if not sprint:
        raise ValueError(f"Sprint with ID {sprint_id} not found")
    
    db.session.delete(sprint)
    db.session.commit()
    return {"message": f"Sprint with ID {sprint_id} deleted successfully"}

def tool_list_tasks(sprint_id: int = None):
    """List all tasks, optionally filtered by sprint ID"""
    if sprint_id:
        tasks = Task.query.filter_by(sprint_id=sprint_id).all()
    else:
        tasks = Task.query.all()
    return [task.to_dict() for task in tasks]

def tool_get_task(task_id: int):
    """Get a task by ID"""
    task = Task.query.get(task_id)
    if not task:
        raise ValueError(f"Task with ID {task_id} not found")
    return task.to_dict()

def tool_create_task(details: str, sprint_id: int, completed: bool = False):
    """Create a new task"""
    # Verify sprint exists
    sprint = Sprint.query.get(sprint_id)
    if not sprint:
        raise ValueError(f"Sprint with ID {sprint_id} not found")
    
    task = Task(details=details, completed=completed, sprint_id=sprint_id)
    db.session.add(task)
    db.session.commit()
    return task.to_dict()

def tool_update_task(task_id: int, details: str = None, completed: bool = None, sprint_id: int = None):
    """Update an existing task"""
    task = Task.query.get(task_id)
    if not task:
        raise ValueError(f"Task with ID {task_id} not found")
    
    if details is not None:
        task.details = details
    if completed is not None:
        task.completed = completed
    if sprint_id is not None:
        # Verify sprint exists
        sprint = Sprint.query.get(sprint_id)
        if not sprint:
            raise ValueError(f"Sprint with ID {sprint_id} not found")
        task.sprint_id = sprint_id
    
    db.session.commit()
    return task.to_dict()

def tool_delete_task(task_id: int):
    """Delete a task by ID"""
    task = Task.query.get(task_id)
    if not task:
        raise ValueError(f"Task with ID {task_id} not found")
    
    db.session.delete(task)
    db.session.commit()
    return {"message": f"Task with ID {task_id} deleted successfully"}

def tool_list_issues(sprint_id: int = None):
    """List all issues, optionally filtered by sprint ID"""
    if sprint_id:
        issues = Issue.query.filter_by(sprint_id=sprint_id).all()
    else:
        issues = Issue.query.all()
    return [issue.to_dict() for issue in issues]

def tool_get_issue(issue_id: int):
    """Get an issue by ID"""
    issue = Issue.query.get(issue_id)
    if not issue:
        raise ValueError(f"Issue with ID {issue_id} not found")
    return issue.to_dict()

def tool_create_issue(details: str, sprint_id: int, completed: bool = False):
    """Create a new issue"""
    # Verify sprint exists
    sprint = Sprint.query.get(sprint_id)
    if not sprint:
        raise ValueError(f"Sprint with ID {sprint_id} not found")
    
    issue = Issue(details=details, completed=completed, sprint_id=sprint_id)
    db.session.add(issue)
    db.session.commit()
    return issue.to_dict()

def tool_update_issue(issue_id: int, details: str = None, completed: bool = None, sprint_id: int = None):
    """Update an existing issue"""
    issue = Issue.query.get(issue_id)
    if not issue:
        raise ValueError(f"Issue with ID {issue_id} not found")
    
    if details is not None:
        issue.details = details
    if completed is not None:
        issue.completed = completed
    if sprint_id is not None:
        # Verify sprint exists
        sprint = Sprint.query.get(sprint_id)
        if not sprint:
            raise ValueError(f"Sprint with ID {sprint_id} not found")
        issue.sprint_id = sprint_id
    
    db.session.commit()
    return issue.to_dict()

def tool_delete_issue(issue_id: int):
    """Delete an issue by ID"""
    issue = Issue.query.get(issue_id)
    if not issue:
        raise ValueError(f"Issue with ID {issue_id} not found")
    
    db.session.delete(issue)
    db.session.commit()
    return {"message": f"Issue with ID {issue_id} deleted successfully"}

def setup_mcp_server(app):
    """
    Set up the MCP server with the Flask application
    
    Args:
        app: Flask application instance
    """
    import sys
    print("Setting up MCP server routes", file=sys.stderr)
    from flask_cors import CORS
    CORS(app, resources={r"/mcp/*": {"origins": "*"}})
    
    # Instead of using WSGIMiddleware, we'll use Flask's route registration
    # to add MCP endpoints directly to the Flask app
    
    # Register MCP routes with Flask app
    @app.route('/mcp')
    def mcp_root():
        """Root endpoint for the MCP server"""
        return {"message": "GamePlan MCP Server is running"}
    
    @app.route('/mcp/tools', methods=['GET'])
    def mcp_get_tools():
        """Return the list of available tools"""
        return TOOLS
    
    @app.route('/mcp/execute', methods=['POST'])
    def mcp_execute_tool():
        """Execute a tool based on the request"""
        from flask import request
        data = request.get_json()
        tool_name = data.get("name")
        parameters = data.get("parameters", {}) or data.get("arguments", {})
        
        # Log the received parameters for debugging
        print(f"MCP execute tool: {tool_name} with parameters: {parameters}", file=sys.stderr)
        
        # Find the tool implementation
        tool_impl = globals().get(f"tool_{tool_name}")
        if not tool_impl:
            return {"error": f"Tool '{tool_name}' not found"}
        
        # Execute the tool with the provided parameters
        try:
            # Ensure boolean parameters are properly handled
            for key, value in parameters.items():
                if isinstance(value, str) and value.lower() in ['true', 'false']:
                    parameters[key] = value.lower() == 'true'
            
            result = tool_impl(**parameters)
            return {"result": result}
        except Exception as e:
            print(f"Error executing tool {tool_name}: {str(e)}", file=sys.stderr)
            return {"error": str(e)}
    
    return app

def handle_tools_call(message):
    print("handle_tools_call was called", file=sys.stderr)
    """Handle tools/call request"""
    # Support both forms: parameters sent in 'params' with 'arguments' or as 'parameters' directly
    params = message.get("params") or message
    tool_name = params.get("name")
    tool_params = params.get("arguments") or params.get("parameters", {})

    print(f"Executing tool: {tool_name} with params: {tool_params}", file=sys.stderr)

    base_url = get_base_url()

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
