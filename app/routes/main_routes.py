from flask import Blueprint, render_template
from app.models import Project

# Create blueprint for main routes
main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    """
    Main route that renders the index page showing all projects
    
    This loads all projects and passes them to the index template.
    The index page serves as the entry point to the application.
    """
    # Query all projects
    projects = Project.query.order_by(Project.created_at.desc()).all()
    
    # Render index template with projects
    return render_template('index.html', projects=projects)
