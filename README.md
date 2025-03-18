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
flask init-db
```

4. Create sample data (optional):
```
flask create-sample-data
```

5. Run the application:
```
flask run
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
flask run
```

2. Configure Windsurf by copying the `mcp_config.json` file to your Windsurf configuration directory.

3. In Windsurf, select "GamePlan" as your MCP provider.

The MCP server provides tools for all CRUD operations on projects, sprints, tasks, and issues.

## Development

- Database schema changes: Use Flask-Migrate
  ```
  flask db migrate -m "Description of changes"
  flask db upgrade
  ```

- Running tests:
  ```
  python -m pytest tests/
  ```

## License

MIT