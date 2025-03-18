# GamePlan Project Guidelines

## Commands
- Setup: `python -m venv venv && source venv/bin/activate && pip install -r requirements.txt`
- Run: `flask run` or `flask run --port=5001`
- Database: `flask init-db` (initialize), `flask create-sample-data` (add sample data)
- Tests: `python -m pytest tests/` (all tests), `python -m pytest tests/test_api.py::test_function_name` (single test)
- Migrations: `flask db migrate -m "message"` (create), `flask db upgrade` (apply)

## Code Style
- PEP 8 conventions: 4-space indentation, snake_case for functions/variables, CamelCase for classes
- Docstrings: Use triple quotes with Args and Returns sections
- API responses: Consistent JSON with 'status' and 'data' fields
- Models: Define relationships clearly with SQLAlchemy
- Error handling: Use try/except blocks with specific exceptions
- Imports: Group by standard lib, external packages, then local modules

## Architecture
- Flask application factory pattern with blueprints for routes
- RESTful API design with proper HTTP methods and status codes
- SQLAlchemy ORM for database interactions
- MCP server integration for AI assistant collaboration