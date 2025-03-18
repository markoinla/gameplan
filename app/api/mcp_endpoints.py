"""
MCP API Endpoints

This module provides API endpoints for the standalone MCP server to interact with
the GamePlan application. These endpoints implement the necessary functionality
for the MCP tools without duplicating the MCP server implementation.
"""

from flask import Blueprint, jsonify, request
from app.models.project import Project
from app.models.sprint import Sprint
from app.models.task import Task
from app.models.issue import Issue
from app import db

# Create a blueprint for MCP API endpoints
mcp_api_bp = Blueprint('mcp_api', __name__, url_prefix='/mcp')

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
                    "description": "New name for the project"
                },
                "description": {
                    "type": "string",
                    "description": "New description for the project"
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
                    "description": "Optional project ID to filter sprints"
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
                "start_date": {
                    "type": "string",
                    "description": "Start date of the sprint (YYYY-MM-DD)"
                },
                "end_date": {
                    "type": "string",
                    "description": "End date of the sprint (YYYY-MM-DD)"
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
                    "description": "New name for the sprint"
                },
                "start_date": {
                    "type": "string",
                    "description": "New start date for the sprint (YYYY-MM-DD)"
                },
                "end_date": {
                    "type": "string",
                    "description": "New end date for the sprint (YYYY-MM-DD)"
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
                    "description": "Optional sprint ID to filter tasks"
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
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint this task belongs to"
                },
                "completed": {
                    "type": "boolean",
                    "description": "Whether the task is completed"
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
                    "description": "New details for the task"
                },
                "sprint_id": {
                    "type": "integer",
                    "description": "New sprint ID for the task"
                },
                "completed": {
                    "type": "boolean",
                    "description": "New completion status for the task"
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
                    "description": "Optional sprint ID to filter issues"
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
                "sprint_id": {
                    "type": "integer",
                    "description": "ID of the sprint this issue belongs to"
                },
                "completed": {
                    "type": "boolean",
                    "description": "Whether the issue is completed"
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
                    "description": "New details for the issue"
                },
                "sprint_id": {
                    "type": "integer",
                    "description": "New sprint ID for the issue"
                },
                "completed": {
                    "type": "boolean",
                    "description": "New completion status for the issue"
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

@mcp_api_bp.route('/', methods=['GET'])
def mcp_root():
    """Root endpoint for the MCP server"""
    return jsonify({"message": "GamePlan MCP Server is running"})

@mcp_api_bp.route('/tools', methods=['GET'])
def get_tools():
    """Return the list of available tools"""
    return jsonify(TOOLS)

@mcp_api_bp.route('/execute', methods=['POST'])
def execute_tool():
    """Execute a tool based on the request"""
    data = request.get_json()
    tool_name = data.get("name")
    parameters = data.get("parameters", {}) or data.get("arguments", {})
    
    # Log the received parameters for debugging
    print(f"MCP execute tool: {tool_name} with parameters: {parameters}")
    
    # Find the tool implementation
    tool_impl = globals().get(f"tool_{tool_name}")
    if not tool_impl:
        return jsonify({"error": f"Tool '{tool_name}' not found"})
    
    # Handle parameter validation to ensure we only use parameters that match our data model
    if tool_name in ['create_task', 'update_task', 'create_issue', 'update_issue']:
        # If old parameter names are used, return an error with guidance
        if 'title' in parameters or 'description' in parameters:
            return jsonify({
                "error": f"Invalid parameters for tool '{tool_name}'. Use 'details' instead of 'title' or 'description' to match the data model."
            })
    
    # Execute the tool with the provided parameters
    try:
        # Ensure boolean parameters are properly handled
        for key, value in parameters.items():
            if isinstance(value, str) and value.lower() in ['true', 'false']:
                parameters[key] = value.lower() == 'true'
        
        result = tool_impl(**parameters)
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": str(e)})

# Tool implementations

def tool_list_projects():
    """List all projects"""
    projects = Project.query.all()
    return [project.to_dict() for project in projects]

def tool_get_project(project_id):
    """Get a project by ID"""
    project = Project.query.get(project_id)
    if not project:
        return {"error": f"Project with ID {project_id} not found"}
    return project.to_dict()

def tool_create_project(name, description=""):
    """Create a new project"""
    project = Project(name=name, description=description)
    db.session.add(project)
    db.session.commit()
    return project.to_dict()

def tool_update_project(project_id, name=None, description=None):
    """Update an existing project"""
    project = Project.query.get(project_id)
    if not project:
        return {"error": f"Project with ID {project_id} not found"}
    
    if name is not None:
        project.name = name
    if description is not None:
        project.description = description
    
    db.session.commit()
    return project.to_dict()

def tool_delete_project(project_id):
    """Delete a project by ID"""
    project = Project.query.get(project_id)
    if not project:
        return {"error": f"Project with ID {project_id} not found"}
    
    db.session.delete(project)
    db.session.commit()
    return {"success": True, "message": f"Project with ID {project_id} deleted"}

def tool_list_sprints(project_id=None):
    """List all sprints, optionally filtered by project ID"""
    if project_id:
        sprints = Sprint.query.filter_by(project_id=project_id).all()
    else:
        sprints = Sprint.query.all()
    return [sprint.to_dict() for sprint in sprints]

def tool_get_sprint(sprint_id):
    """Get a sprint by ID"""
    sprint = Sprint.query.get(sprint_id)
    if not sprint:
        return {"error": f"Sprint with ID {sprint_id} not found"}
    return sprint.to_dict()

def tool_create_sprint(name, project_id, start_date=None, end_date=None):
    """Create a new sprint"""
    sprint = Sprint(name=name, project_id=project_id, start_date=start_date, end_date=end_date)
    db.session.add(sprint)
    db.session.commit()
    return sprint.to_dict()

def tool_update_sprint(sprint_id, name=None, project_id=None, start_date=None, end_date=None):
    """Update an existing sprint"""
    sprint = Sprint.query.get(sprint_id)
    if not sprint:
        return {"error": f"Sprint with ID {sprint_id} not found"}
    
    if name is not None:
        sprint.name = name
    if project_id is not None:
        sprint.project_id = project_id
    if start_date is not None:
        sprint.start_date = start_date
    if end_date is not None:
        sprint.end_date = end_date
    
    db.session.commit()
    return sprint.to_dict()

def tool_delete_sprint(sprint_id):
    """Delete a sprint by ID"""
    sprint = Sprint.query.get(sprint_id)
    if not sprint:
        return {"error": f"Sprint with ID {sprint_id} not found"}
    
    db.session.delete(sprint)
    db.session.commit()
    return {"success": True, "message": f"Sprint with ID {sprint_id} deleted"}

def tool_list_tasks(sprint_id=None):
    """List all tasks, optionally filtered by sprint ID"""
    if sprint_id:
        tasks = Task.query.filter_by(sprint_id=sprint_id).all()
    else:
        tasks = Task.query.all()
    return [task.to_dict() for task in tasks]

def tool_get_task(task_id):
    """Get a task by ID"""
    task = Task.query.get(task_id)
    if not task:
        return {"error": f"Task with ID {task_id} not found"}
    return task.to_dict()

def tool_create_task(details, sprint_id, completed=False):
    """Create a new task"""
    task = Task(details=details, sprint_id=sprint_id, completed=completed)
    db.session.add(task)
    db.session.commit()
    return task.to_dict()

def tool_update_task(task_id, details=None, sprint_id=None, completed=None):
    """Update an existing task"""
    task = Task.query.get(task_id)
    if not task:
        return {"error": f"Task with ID {task_id} not found"}
    
    if details is not None:
        task.details = details
    if sprint_id is not None:
        task.sprint_id = sprint_id
    if completed is not None:
        task.completed = completed
    
    db.session.commit()
    return task.to_dict()

def tool_delete_task(task_id):
    """Delete a task by ID"""
    task = Task.query.get(task_id)
    if not task:
        return {"error": f"Task with ID {task_id} not found"}
    
    db.session.delete(task)
    db.session.commit()
    return {"success": True, "message": f"Task with ID {task_id} deleted"}

def tool_list_issues(sprint_id=None):
    """List all issues, optionally filtered by sprint ID"""
    if sprint_id:
        issues = Issue.query.filter_by(sprint_id=sprint_id).all()
    else:
        issues = Issue.query.all()
    return [issue.to_dict() for issue in issues]

def tool_get_issue(issue_id):
    """Get an issue by ID"""
    issue = Issue.query.get(issue_id)
    if not issue:
        return {"error": f"Issue with ID {issue_id} not found"}
    return issue.to_dict()

def tool_create_issue(details, sprint_id, completed=False):
    """Create a new issue"""
    issue = Issue(details=details, sprint_id=sprint_id, completed=completed)
    db.session.add(issue)
    db.session.commit()
    return issue.to_dict()

def tool_update_issue(issue_id, details=None, sprint_id=None, completed=None):
    """Update an existing issue"""
    issue = Issue.query.get(issue_id)
    if not issue:
        return {"error": f"Issue with ID {issue_id} not found"}
    
    if details is not None:
        issue.details = details
    if sprint_id is not None:
        issue.sprint_id = sprint_id
    if completed is not None:
        issue.completed = completed
    
    db.session.commit()
    return issue.to_dict()

def tool_delete_issue(issue_id):
    """Delete an issue by ID"""
    issue = Issue.query.get(issue_id)
    if not issue:
        return {"error": f"Issue with ID {issue_id} not found"}
    
    db.session.delete(issue)
    db.session.commit()
    return {"success": True, "message": f"Issue with ID {issue_id} deleted"}
