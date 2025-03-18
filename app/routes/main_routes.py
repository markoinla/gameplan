from flask import Blueprint, render_template, request
from app.models import Project, Sprint, Task, Issue

# Create blueprint for main routes
main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    """
    Main route that renders the index page showing all projects
    
    This loads all projects and passes them to the index template.
    The index page serves as the entry point to the application.
    
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
                    # Use the sorted tasks method
                    tasks = sprint.get_sorted_tasks()
                    return render_template('partials/tasks.html', tasks=tasks, sprint=sprint)
            return '', 404
        
        elif partial == 'sprint_issues':
            # Return issues for a specific sprint
            sprint_id = request.args.get('sprint_id')
            if sprint_id:
                sprint = Sprint.query.get(sprint_id)
                if sprint:
                    # Use the sorted issues method
                    issues = sprint.get_sorted_issues()
                    return render_template('partials/issues.html', issues=issues, sprint=sprint)
            return '', 404
        
        # If partial parameter is invalid, return 404
        return '', 404
    
    # Render full index template with projects for normal page load
    return render_template('index.html', projects=projects)
