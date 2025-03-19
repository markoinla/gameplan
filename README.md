# GamePlan

A Flask-based project management application specially designed for AI coding projects, with full Model Context Protocol (MCP) support for integration with AI assistants like Windsurf.

## Features

- Create and manage projects with requirements
- Organize work into sprints
- Track tasks and issues
- RESTful API for all operations
- MCP server for AI assistant integration
- Responsive single-page UI

## Setup

1. Create and activate a virtual environment:
```
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```
pip install -r requirements.txt
```

3. Initialize the database:
```
python init_db.py
```

4. Run the application:
```
python app.py
```

The application will be available at http://127.0.0.1:5001 by default.

## API Documentation

The application provides a RESTful API for all CRUD operations:

- Projects: `/api/projects`
- Sprints: `/api/sprints`
- Tasks: `/api/tasks`
- Issues: `/api/issues`

Each endpoint supports:
- GET (list all or get by ID)
- POST (create)
- PUT (update)
- DELETE (delete)

## MCP Integration

GamePlan includes MCP (Model Context Protocol) support for integration with AI assistants like Windsurf. This allows AI assistants to interact with the application programmatically.

### Setting Up MCP with Windsurf

1. Start the GamePlan application:
```
python app.py
```

2. Configure Windsurf by copying the `mcp_config.json` file to your Windsurf configuration directory.

3. In Windsurf, select "GamePlan" as your MCP provider.

### Using GamePlan with MCP Tools

When using GamePlan with MCP tools in AI assistants like Windsurf, you need to be aware of the following:

#### Tool Prefixes

All GamePlan MCP tools use the `mcp0_` prefix. For example:
- `mcp0_list_projects` - Lists all projects
- `mcp0_create_project` - Creates a new project
- `mcp0_get_sprint` - Gets details of a specific sprint

#### Available MCP Tools

Here are the main MCP tools available for GamePlan:

**Project Management:**
- `mcp0_list_projects` - List all projects
- `mcp0_create_project` - Create a new project
- `mcp0_get_project` - Get details of a specific project by ID

**Sprint Management:**
- `mcp0_list_sprints` - List all sprints (optionally filtered by project ID)
- `mcp0_create_sprint` - Create a new sprint
- `mcp0_get_sprint` - Get details of a specific sprint by ID

**Task Management:**
- `mcp0_list_tasks` - List all tasks (optionally filtered by sprint ID)
- `mcp0_create_task` - Create a new task
- `mcp0_get_task` - Get details of a specific task by ID
- `mcp0_update_task` - Update an existing task (including completion status)

**Issue Management:**
- `mcp0_list_issues` - List all issues (optionally filtered by sprint ID)
- `mcp0_create_issue` - Create a new issue
- `mcp0_get_issue` - Get details of a specific issue by ID
- `mcp0_update_issue` - Update an existing issue (including completion status)

#### Example MCP Tool Usage

To create a new project:
```
mcp0_create_project(name="My New Project", description="This is a description of my project")
```

To list all sprints for a specific project:
```
mcp0_list_sprints(project_id=1)
```

To mark a task as completed:
```
mcp0_update_task(task_id=5, completed=True)
```

### Using curl as an Alternative

If MCP tools are unavailable or not working, you can use curl commands to interact with the GamePlan API directly:

#### List all projects
```bash
curl -X GET http://127.0.0.1:5001/api/projects
```

#### Create a new project
```bash
curl -X POST http://127.0.0.1:5001/api/projects \
  -H "Content-Type: application/json" \
  -d '{"name": "New Project", "description": "Project description"}'
```

#### Get a specific project
```bash
curl -X GET http://127.0.0.1:5001/api/projects/1
```

#### Update a project
```bash
curl -X PUT http://127.0.0.1:5001/api/projects/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Project", "description": "Updated description"}'
```

#### Create a new sprint
```bash
curl -X POST http://127.0.0.1:5001/api/sprints \
  -H "Content-Type: application/json" \
  -d '{"name": "Sprint 1", "description": "First sprint", "project_id": 1, "status": "Planned"}'
```

#### Create a new task
```bash
curl -X POST http://127.0.0.1:5001/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"details": "Task details", "completed": false, "sprint_id": 1}'
```

#### Update a task (mark as completed)
```bash
curl -X PUT http://127.0.0.1:5001/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

## Keyboard Shortcuts

GamePlan supports the following keyboard shortcuts:

- **Ctrl+Enter** or **Command+Enter** (Mac): Submit forms (projects, sprints, tasks, issues)

## Development

- Running tests:
  ```
  python -m pytest tests/
  ```

- Debugging:
  ```
  # Set Flask to debug mode
  export FLASK_DEBUG=1  # On Windows: set FLASK_DEBUG=1
  python app.py
  ```

## License

MIT