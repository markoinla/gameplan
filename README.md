# BTG

A Flask-based project management application specially designed for AI coding projects, with full Model Context Protocol (MCP) support for integration with AI assistants like Windsurf.

## Features

- Create and manage projects with requirements and implementation details
- Organize work into sprints with different statuses (Planned, Active, Completed)
- Track tasks and issues with completion status
- Star important tasks and issues for quick identification
- RESTful API for all operations
- MCP server for AI assistant integration
- Responsive UI with Bootstrap styling
- HTMX for dynamic content updates without page reloads
- Markdown support for rich text formatting in descriptions

## Screenshots

The BTG application features a clean, intuitive interface:

- **Project Dashboard**: View all your projects and their sprints
- **Sprint View**: Manage tasks and issues within each sprint
- **Task Management**: Create, edit, complete, and star tasks
- **Issue Tracking**: Track and resolve issues that arise during development

## Setup

1. Create and activate a virtual environment:
```python
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Initialize the database:
```python
python init_db.py
```

4. Run the application:
```python
python app.py
```

The application will be available at http://127.0.0.1:5001 by default.

## Project Structure

```
BTG/
├── app/                    # Application package
│   ├── api/                # API endpoints
│   ├── models/             # Database models
│   ├── routes/             # Route handlers
│   ├── static/             # Static files (CSS, JS)
│   ├── templates/          # Jinja2 templates
│   └── utils/              # Utility functions
├── migrations/             # Database migrations
├── tests/                  # Test suite
├── app.py                  # Application entry point
├── config.py               # Configuration settings
├── init_db.py              # Database initialization
├── mcp_server.py           # MCP server implementation
└── requirements.txt        # Project dependencies
```

## User Interface

BTG uses a combination of technologies to create a smooth user experience:

- **Bootstrap 5**: For responsive styling and components
- **HTMX**: For dynamic content updates without full page reloads
- **Font Awesome & Bootstrap Icons**: For UI elements and icons
- **Markdown**: For rich text formatting in descriptions

### Star Feature

The star feature allows you to mark tasks and issues as important:

- Click the star icon next to a task or issue number to toggle its starred status
- Starred items are visually highlighted for quick identification
- The starred status is preserved when editing tasks or issues
- You can filter and sort by starred status (coming soon)

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

### API Examples

#### List all projects
```bash
curl -X GET http://127.0.0.1:5001/mcp/execute -H "Content-Type: application/json" -d '{"name": "list_projects", "parameters": {}}' | python -m json.tool
```

#### Create a new project
```bash
curl -X POST http://127.0.0.1:5001/mcp/execute -H "Content-Type: application/json" -d '{"name": "create_project", "parameters": {"name": "New Project", "description": "Project description"}}' | python -m json.tool
```

#### Update a project
```bash
curl -X POST http://127.0.0.1:5001/mcp/execute -H "Content-Type: application/json" -d '{"name": "update_project", "parameters": {"project_id": 1, "name": "Updated Project", "description": "Updated description", "requirements": "Project requirements", "implementation_details": "Implementation details"}}' | python -m json.tool
```

#### Create a new sprint
```bash
curl -X POST http://127.0.0.1:5001/mcp/execute -H "Content-Type: application/json" -d '{"name": "create_sprint", "parameters": {"name": "Sprint 1", "description": "First sprint", "project_id": 1, "status": "Planned"}}' | python -m json.tool
```

#### Create a new task
```bash
curl -X POST http://127.0.0.1:5001/mcp/execute -H "Content-Type: application/json" -d '{"name": "create_task", "parameters": {"details": "Task details", "completed": false, "sprint_id": 1, "starred": false}}' | python -m json.tool
```

#### Update a task (mark as completed and starred)
```bash
curl -X POST http://127.0.0.1:5001/mcp/execute -H "Content-Type: application/json" -d '{"name": "update_task", "parameters": {"task_id": 1, "completed": true, "starred": true}}' | python -m json.tool
```

## MCP Integration

BTG includes MCP (Model Context Protocol) support for integration with AI assistants like Windsurf. This allows AI assistants to interact with the application programmatically.

### Setting Up MCP with Windsurf

1. Start the BTG application:
```python
python app.py
```

2. Configure Windsurf by copying the `mcp_config.json` file to your Windsurf configuration directory.

3. In Windsurf, select "BTG" as your MCP provider.

> **Note**: When using BTG with AI coding tools like Windsurf or Cursor, the tool names might be prefixed (e.g., with `mcp0_`). This is handled automatically by these tools, so you can refer to them without the prefix in your prompts.

### Available MCP Tools

Here are the main MCP tools available for BTG:

**Project Management:**
- `list_projects` - List all projects
- `create_project` - Create a new project
- `get_project` - Get details of a specific project by ID

**Sprint Management:**
- `list_sprints` - List all sprints (optionally filtered by project ID)
- `create_sprint` - Create a new sprint
- `get_sprint` - Get details of a specific sprint by ID

**Task Management:**
- `list_tasks` - List all tasks (optionally filtered by sprint ID)
- `create_task` - Create a new task
- `get_task` - Get details of a specific task by ID
- `update_task` - Update an existing task (including completion and starred status)

**Issue Management:**
- `list_issues` - List all issues (optionally filtered by sprint ID)
- `create_issue` - Create a new issue
- `get_issue` - Get details of a specific issue by ID
- `update_issue` - Update an existing issue (including completion and starred status)

## Development

### Running in Debug Mode

The application runs in debug mode by default when started with `python app.py`. This means:

- The Flask server automatically detects and applies changes to Python files, templates, and static files
- No manual server restart is required after code changes
- For CSS changes, a hard refresh in the browser (Cmd+Shift+R on Mac or Ctrl+Shift+R on Windows) might be needed

### Database Migrations

BTG uses Flask-Migrate for database schema evolution:

1. Initialize migrations (first time only):
```bash
flask db init
```

2. Create a migration after model changes:
```bash
flask db migrate -m "Description of changes"
```

3. Apply migrations:
```bash
flask db upgrade
```

### Running Tests

```bash
python -m pytest tests/
```

### Creating Sample Data

To populate the database with sample data:
```bash
flask create-sample-data
```

## User Experience Notes

- All HTMX form submissions use the `hx-preserve` attribute to maintain the user's scroll position
- The application uses standard Bootstrap classes for UI elements to ensure consistency
- Task and issue forms include a "Mark as important" checkbox to set the starred status

## License

MIT