from flask import Blueprint, render_template, request
from app import db
from app.models import Task, Issue, Sprint, Project

# Create blueprint for HTMX routes
htmx_bp = Blueprint('htmx', __name__, url_prefix='/htmx')

@htmx_bp.route('/tasks/<int:task_id>/toggle', methods=['POST'])
def toggle_task(task_id):
    """
    HTMX endpoint to toggle a task's completion status
    
    Args:
        task_id: ID of the task to toggle
        
    Returns:
        Rendered HTML fragment of the updated task
    """
    # Get the task
    task = Task.query.get_or_404(task_id)
    
    # Toggle completion status
    task.completed = not task.completed
    
    # Save to database
    db.session.commit()
    
    # Return the updated task HTML fragment
    return render_template('partials/task_item.html', task=task)

@htmx_bp.route('/issues/<int:issue_id>/toggle', methods=['POST'])
def toggle_issue(issue_id):
    """
    HTMX endpoint to toggle an issue's completion status
    
    Args:
        issue_id: ID of the issue to toggle
        
    Returns:
        Rendered HTML fragment of the updated issue
    """
    # Get the issue
    issue = Issue.query.get_or_404(issue_id)
    
    # Toggle completion status
    issue.completed = not issue.completed
    
    # Save to database
    db.session.commit()
    
    # Return the updated issue HTML fragment
    return render_template('partials/issue_item.html', issue=issue)

@htmx_bp.route('/tasks/create', methods=['POST'])
def create_task():
    """
    HTMX endpoint to create a new task
    
    Returns:
        Rendered HTML fragment of the updated projects list
    """
    sprint_id = request.form.get('sprint_id')
    details = request.form.get('details')
    completed = request.form.get('completed') == 'on'
    
    if sprint_id and details:
        sprint = Sprint.query.get(sprint_id)
        if sprint:
            # Create new task
            task = Task(
                details=details,
                completed=completed,
                sprint_id=sprint_id
            )
            db.session.add(task)
            db.session.commit()
            
            # Return updated projects list
            projects = Project.query.all()
            return render_template('partials/projects_list.html', projects=projects)
    
    return '', 400  # Bad request

@htmx_bp.route('/tasks/form/<int:sprint_id>', methods=['GET'])
def get_task_form(sprint_id):
    """
    HTMX endpoint to get the task creation form
    
    Args:
        sprint_id: ID of the sprint to add the task to
        
    Returns:
        Rendered HTML fragment of the task form
    """
    sprint = Sprint.query.get_or_404(sprint_id)
    return render_template('partials/task_form.html', sprint_id=sprint_id)

@htmx_bp.route('/issues/create', methods=['POST'])
def create_issue():
    """
    HTMX endpoint to create a new issue
    
    Returns:
        Rendered HTML fragment of the updated projects list
    """
    sprint_id = request.form.get('sprint_id')
    details = request.form.get('details')
    completed = request.form.get('completed') == 'on'
    
    if sprint_id and details:
        sprint = Sprint.query.get(sprint_id)
        if sprint:
            # Create new issue
            issue = Issue(
                details=details,
                completed=completed,
                sprint_id=sprint_id
            )
            db.session.add(issue)
            db.session.commit()
            
            # Return updated projects list
            projects = Project.query.all()
            return render_template('partials/projects_list.html', projects=projects)
    
    return '', 400  # Bad request

@htmx_bp.route('/issues/form/<int:sprint_id>', methods=['GET'])
def get_issue_form(sprint_id):
    """
    HTMX endpoint to get the issue creation form
    
    Args:
        sprint_id: ID of the sprint to add the issue to
        
    Returns:
        Rendered HTML fragment of the issue form
    """
    # Check if sprint exists
    sprint = Sprint.query.get_or_404(sprint_id)
    
    # Return the issue form HTML fragment
    return render_template('partials/issue_form.html', sprint_id=sprint_id)

@htmx_bp.route('/tasks/<int:task_id>/edit', methods=['GET'])
def edit_task_form(task_id):
    """
    HTMX endpoint to get the task edit form
    
    Args:
        task_id: ID of the task to edit
        
    Returns:
        Rendered HTML fragment of the task edit form
    """
    task = Task.query.get_or_404(task_id)
    return render_template('partials/task_edit_form.html', task=task)

@htmx_bp.route('/tasks/<int:task_id>/update', methods=['PUT', 'POST'])
def update_task(task_id):
    """
    HTMX endpoint to update a task
    
    Args:
        task_id: ID of the task to update
        
    Returns:
        Rendered HTML fragment of the updated projects list
    """
    task = Task.query.get_or_404(task_id)
    
    # Update task data
    task.details = request.form.get('details', task.details)
    task.completed = request.form.get('completed') == 'on'
    
    db.session.commit()
    
    # Return updated projects list
    projects = Project.query.all()
    return render_template('partials/projects_list.html', projects=projects)

@htmx_bp.route('/tasks/<int:task_id>/delete', methods=['DELETE', 'POST'])
def delete_task(task_id):
    """
    HTMX endpoint to delete a task
    
    Args:
        task_id: ID of the task to delete
        
    Returns:
        Rendered HTML fragment of the updated projects list
    """
    task = Task.query.get_or_404(task_id)
    
    # Delete the task
    db.session.delete(task)
    db.session.commit()
    
    # Return updated projects list
    projects = Project.query.all()
    return render_template('partials/projects_list.html', projects=projects)

# Issue HTMX Routes

@htmx_bp.route('/issues/<int:issue_id>/edit', methods=['GET'])
def edit_issue_form(issue_id):
    """
    HTMX endpoint to get the issue edit form
    
    Args:
        issue_id: ID of the issue to edit
        
    Returns:
        Rendered HTML fragment of the issue edit form
    """
    # Get the issue
    issue = Issue.query.get_or_404(issue_id)
    
    # Return the issue edit form HTML fragment
    return render_template('partials/issue_edit_form.html', issue=issue)

@htmx_bp.route('/issues/<int:issue_id>', methods=['GET'])
def get_issue(issue_id):
    """
    HTMX endpoint to get a single issue
    
    Args:
        issue_id: ID of the issue to get
        
    Returns:
        Rendered HTML fragment of the issue
    """
    # Get the issue
    issue = Issue.query.get_or_404(issue_id)
    
    # Return the issue HTML fragment
    return render_template('partials/issue_item.html', issue=issue)

@htmx_bp.route('/issues/<int:issue_id>/update', methods=['PUT', 'POST'])
def update_issue(issue_id):
    """
    HTMX endpoint to update an issue
    
    Args:
        issue_id: ID of the issue to update
        
    Returns:
        Rendered HTML fragment of the updated projects list
    """
    issue = Issue.query.get_or_404(issue_id)
    
    # Update issue data
    issue.details = request.form.get('details', issue.details)
    issue.completed = request.form.get('completed') == 'on'
    
    db.session.commit()
    
    # Return updated projects list
    projects = Project.query.all()
    return render_template('partials/projects_list.html', projects=projects)

@htmx_bp.route('/issues/<int:issue_id>/delete', methods=['DELETE', 'POST'])
def delete_issue(issue_id):
    """
    HTMX endpoint to delete an issue
    
    Args:
        issue_id: ID of the issue to delete
        
    Returns:
        Rendered HTML fragment of the updated projects list
    """
    issue = Issue.query.get_or_404(issue_id)
    
    # Delete the issue
    db.session.delete(issue)
    db.session.commit()
    
    # Return updated projects list
    projects = Project.query.all()
    return render_template('partials/projects_list.html', projects=projects)

# Sprint HTMX Routes

@htmx_bp.route('/sprints/form', methods=['GET'])
def get_sprint_form():
    """
    HTMX endpoint to get the sprint creation form
    
    Args:
        project_id: ID of the project to add the sprint to (from query string)
        
    Returns:
        Rendered HTML fragment of the sprint form
    """
    project_id = request.args.get('project_id')
    project = Project.query.get_or_404(project_id)
    
    return render_template('partials/sprint_form.html', project=project)

@htmx_bp.route('/sprints/<int:sprint_id>/edit', methods=['GET'])
def edit_sprint_form(sprint_id):
    """
    HTMX endpoint to get the sprint edit form
    
    Args:
        sprint_id: ID of the sprint to edit
        
    Returns:
        Rendered HTML fragment of the sprint edit form
    """
    sprint = Sprint.query.get_or_404(sprint_id)
    return render_template('partials/sprint_edit_form.html', sprint=sprint)

@htmx_bp.route('/sprints', methods=['POST'])
def create_sprint():
    """
    HTMX endpoint to create a new sprint
    
    Returns:
        Rendered HTML fragment of the updated projects list
    """
    project_id = request.form.get('project_id')
    name = request.form.get('name')
    status = request.form.get('status', 'Planned')
    description = request.form.get('description')
    
    if project_id and name:
        project = Project.query.get(project_id)
        if project:
            # Create new sprint
            sprint = Sprint(
                name=name,
                status=status,
                description=description,
                project_id=project_id
            )
            db.session.add(sprint)
            db.session.commit()
            
            # Return updated projects list
            projects = Project.query.all()
            return render_template('partials/projects_list.html', projects=projects)
    
    return '', 400  # Bad request

@htmx_bp.route('/sprints/<int:sprint_id>', methods=['GET', 'PUT', 'POST'])
def update_sprint(sprint_id):
    """
    HTMX endpoint to update or get a sprint
    
    Args:
        sprint_id: ID of the sprint to update/get
        
    Returns:
        Rendered HTML fragment of the sprint or updated projects list
    """
    sprint = Sprint.query.get_or_404(sprint_id)
    
    if request.method == 'GET':
        return render_template('partials/sprint.html', sprint=sprint)
    
    # Update sprint data
    sprint.name = request.form.get('name', sprint.name)
    sprint.status = request.form.get('status', sprint.status)
    sprint.description = request.form.get('description', sprint.description)
    
    db.session.commit()
    
    # Return updated projects list
    projects = Project.query.all()
    return render_template('partials/projects_list.html', projects=projects)

@htmx_bp.route('/sprints/<int:sprint_id>/delete', methods=['DELETE', 'POST'])
def delete_sprint(sprint_id):
    """
    HTMX endpoint to delete a sprint
    
    Args:
        sprint_id: ID of the sprint to delete
        
    Returns:
        Rendered HTML fragment of the updated projects list
    """
    sprint = Sprint.query.get_or_404(sprint_id)
    project_id = sprint.project_id
    
    # Delete all tasks and issues associated with this sprint
    Task.query.filter_by(sprint_id=sprint_id).delete()
    Issue.query.filter_by(sprint_id=sprint_id).delete()
    
    # Delete the sprint
    db.session.delete(sprint)
    db.session.commit()
    
    # Return updated projects list
    projects = Project.query.all()
    return render_template('partials/projects_list.html', projects=projects)

# Project HTMX Routes

@htmx_bp.route('/projects/form', methods=['GET'])
def get_project_form():
    """
    HTMX endpoint to get the project creation form
    
    Returns:
        Rendered HTML fragment of the project form in the dedicated container
    """
    return render_template('partials/project_form_container.html')

@htmx_bp.route('/projects/<int:project_id>/edit', methods=['GET'])
def edit_project_form(project_id):
    """
    HTMX endpoint to get the project edit form
    
    Args:
        project_id: ID of the project to edit
        
    Returns:
        Rendered HTML fragment of the project edit form
    """
    project = Project.query.get_or_404(project_id)
    return render_template('partials/project_edit_form_container.html', project=project)

@htmx_bp.route('/projects', methods=['POST'])
def create_project():
    """
    HTMX endpoint to create a new project
    
    Returns:
        Redirect to the index page with the new project
    """
    name = request.form.get('name')
    description = request.form.get('description', '')
    requirements = request.form.get('requirements', '')
    implementation_details = request.form.get('implementation_details', '')
    
    if name:
        # Create new project
        project = Project(
            name=name,
            description=description,
            requirements=requirements,
            implementation_details=implementation_details
        )
        db.session.add(project)
        db.session.commit()
        
        # Return all projects
        projects = Project.query.all()
        return render_template('partials/projects_list.html', projects=projects)
    
    return '', 400  # Bad request

@htmx_bp.route('/projects/<int:project_id>', methods=['PUT', 'POST'])
def update_project(project_id):
    """
    HTMX endpoint to update a project
    
    Args:
        project_id: ID of the project to update
        
    Returns:
        Redirect to the index page with the updated project
    """
    project = Project.query.get_or_404(project_id)
    
    # Update project data
    project.name = request.form.get('name', project.name)
    project.description = request.form.get('description', project.description)
    project.requirements = request.form.get('requirements', project.requirements)
    project.implementation_details = request.form.get('implementation_details', project.implementation_details)
    
    db.session.commit()
    
    # Return all projects
    projects = Project.query.all()
    return render_template('partials/projects_list.html', projects=projects)

@htmx_bp.route('/projects/<int:project_id>/delete', methods=['DELETE', 'POST'])
def delete_project(project_id):
    """
    HTMX endpoint to delete a project
    
    Args:
        project_id: ID of the project to delete
        
    Returns:
        Redirect to the index page without the deleted project
    """
    project = Project.query.get_or_404(project_id)
    
    # Delete all sprints, tasks, and issues in the project
    for sprint in Sprint.query.filter_by(project_id=project_id).all():
        Task.query.filter_by(sprint_id=sprint.id).delete()
        Issue.query.filter_by(sprint_id=sprint.id).delete()
        db.session.delete(sprint)
    
    # Delete the project
    db.session.delete(project)
    db.session.commit()
    
    # Return all projects
    projects = Project.query.all()
    return render_template('partials/projects_list.html', projects=projects)
