from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

# Initialize SQLAlchemy extension
db = SQLAlchemy()
# Initialize Migrate extension for handling database migrations
migrate = Migrate()

def create_app(config_class=Config):
    """
    Application factory function that creates and configures the Flask app
    
    Args:
        config_class: Configuration class to use (default: Config)
        
    Returns:
        The configured Flask application
    """
    # Create Flask app
    app = Flask(__name__)
    # Load configuration from Config class
    app.config.from_object(config_class)
    
    # Initialize extensions with the app
    db.init_app(app)
    migrate.init_app(app, db)
    
    # Register blueprints
    from app.routes.project_routes import project_bp
    from app.routes.sprint_routes import sprint_bp
    from app.routes.task_routes import task_bp
    from app.routes.issue_routes import issue_bp
    from app.routes.main_routes import main_bp
    
    app.register_blueprint(project_bp)
    app.register_blueprint(sprint_bp)
    app.register_blueprint(task_bp)
    app.register_blueprint(issue_bp)
    app.register_blueprint(main_bp)
    
    # Initialize MCP server
    from app.mcp import setup_mcp_server
    app = setup_mcp_server(app)
    
    return app

# Import models to ensure they are registered with SQLAlchemy
from app.models import project, sprint, task, issue
