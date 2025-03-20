from flask import Blueprint, render_template, request
from app.models import Project, Sprint, Task, Issue

# Create blueprint for main routes
main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    """
    Main route that renders the dashboard page showing project cards
    
    This loads all projects and passes them to the dashboard template.
    The dashboard serves as the entry point to the application.
    """
    # Query all projects
    projects = Project.query.order_by(Project.created_at.desc()).all()
    
    # Render the dashboard template
    return render_template('dashboard.html', projects=projects)

@main_bp.route('/projects')
def projects():
    """
    Route that renders the projects page showing detailed project views
    
    This loads all projects and passes them to the index template.
    The projects page shows the full project details including sprints, tasks, and issues.
    
    When called with partial=True, it renders only specific parts of the page
    for AJAX updates without requiring a full page reload.
    """
    # Query all projects
    projects = Project.query.order_by(Project.created_at.desc()).all()
    
    # Check if this is a partial content request
    partial = request.args.get('partial')
    
    if partial:
        # Handle partial content requests for AJAX updates
        if partial == 'projects':
            # Return only the projects container HTML
            return render_template('partials/projects.html', projects=projects)
        
        elif partial == 'project_sprints':
            # Return sprints for a specific project
            project_id = request.args.get('project_id')
            if project_id:
                project = Project.query.get(project_id)
                if project:
                    return render_template('partials/project_sprints.html', project=project)
            return '', 404
        
        elif partial == 'sprint':
            # Return a specific sprint
            sprint_id = request.args.get('sprint_id')
            if sprint_id:
                sprint = Sprint.query.get(sprint_id)
                if sprint:
                    return render_template('partials/sprint.html', sprint=sprint)
            return '', 404
        
        elif partial == 'sprint_tasks':
            # Return tasks for a specific sprint
            sprint_id = request.args.get('sprint_id')
            if sprint_id:
                sprint = Sprint.query.get(sprint_id)
                if sprint:
                    return render_template('partials/sprint_tasks.html', sprint=sprint)
            return '', 404
        
        elif partial == 'sprint_issues':
            # Return issues for a specific sprint
            sprint_id = request.args.get('sprint_id')
            if sprint_id:
                sprint = Sprint.query.get(sprint_id)
                if sprint:
                    return render_template('partials/sprint_issues.html', sprint=sprint)
            return '', 404
    
    # Render the full index template with all projects
    return render_template('index.html', projects=projects)

@main_bp.route('/project/<int:project_id>')
def project_detail(project_id):
    """
    Route that renders a single project page
    
    This loads a specific project by ID and passes it to the project_detail template.
    If the project is not found, returns a 404 error.
    """
    # Query the project by ID
    project = Project.query.get_or_404(project_id)
    
    # Render the project detail template
    return render_template('project_detail.html', project=project)
