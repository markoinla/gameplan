# GamePlan - AI Project Management Application

GamePlan is a single-page project management application built with Python and Flask for managing AI coding projects. The application uses server-side rendering with Jinja2 templates for the user interface and exposes a RESTful API for AI agent interaction.

## Features

- **Project Management**: Create, view, update, and delete AI coding projects
- **Sprint Planning**: Organize work into sprints with different statuses (Planned, Active, Completed)
- **Task Tracking**: Add tasks to sprints and mark them as completed
- **Issue Management**: Track issues within sprints and mark them as resolved
- **RESTful API**: Full API support for programmatic access and AI agent interaction
- **Single-Page Layout**: Intuitive UI with expandable/collapsible sprints

## Technology Stack

- **Backend**: Python with Flask framework
- **Database**: SQLite with SQLAlchemy ORM
- **Frontend**: HTML, CSS, JavaScript with Bootstrap 5
- **Template Engine**: Jinja2
- **API**: RESTful architecture with JSON responses
- **Form Validation**: Server-side validation with Marshmallow

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd GAMEPLAN
```

2. **Create a virtual environment (recommended)**

```bash
python -m venv venv
```

3. **Activate the virtual environment**

On macOS/Linux:
```bash
source venv/bin/activate
```

On Windows:
```bash
venv\Scripts\activate
```

4. **Install dependencies**

```bash
pip install -r requirements.txt
```

5. **Initialize the database**

```bash
flask init-db
```

6. **Create sample data (optional)**

```bash
flask create-sample-data
```

7. **Run the application**

```bash
flask run
```

8. **Access the application**

Open your web browser and navigate to:
```
http://127.0.0.1:5000/
```

## API Endpoints

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/<project_id>` - Get a specific project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/<project_id>` - Update a project
- `DELETE /api/projects/<project_id>` - Delete a project

### Sprints

- `GET /api/sprints` - Get all sprints (optional query param: project_id)
- `GET /api/sprints/<sprint_id>` - Get a specific sprint
- `POST /api/sprints` - Create a new sprint
- `PUT /api/sprints/<sprint_id>` - Update a sprint
- `DELETE /api/sprints/<sprint_id>` - Delete a sprint

### Tasks

- `GET /api/tasks` - Get all tasks (optional query param: sprint_id)
- `GET /api/tasks/<task_id>` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/<task_id>` - Update a task
- `DELETE /api/tasks/<task_id>` - Delete a task

### Issues

- `GET /api/issues` - Get all issues (optional query param: sprint_id)
- `GET /api/issues/<issue_id>` - Get a specific issue
- `POST /api/issues` - Create a new issue
- `PUT /api/issues/<issue_id>` - Update an issue
- `DELETE /api/issues/<issue_id>` - Delete an issue

## Project Structure

```
GAMEPLAN/
├── app/                      # Application package
│   ├── __init__.py           # Application factory
│   ├── models/               # Database models
│   │   ├── __init__.py
│   │   ├── project.py
│   │   ├── sprint.py
│   │   ├── task.py
│   │   └── issue.py
│   ├── routes/               # API and view routes
│   │   ├── main_routes.py
│   │   ├── project_routes.py
│   │   ├── sprint_routes.py
│   │   ├── task_routes.py
│   │   └── issue_routes.py
│   ├── static/               # Static files
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── main.js
│   └── templates/            # Jinja2 templates
│       ├── base.html
│       └── index.html
├── migrations/               # Database migrations
├── tests/                    # Test directory
├── app.py                    # Application entry point
├── config.py                 # Configuration settings
├── requirements.txt          # Dependencies
├── gameplan.md               # Project planning document
└── README.md                 # This file
```

## Development

### Adding Database Migrations

If you make changes to the database models, create a migration:

```bash
flask db migrate -m "Description of changes"
flask db upgrade
```

### Running Tests

```bash
pytest
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
