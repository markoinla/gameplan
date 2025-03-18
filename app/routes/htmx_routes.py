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
        Rendered HTML fragment of the updated task list
    """
    # Get form data
    details = request.form.get('details')
    sprint_id = request.form.get('sprint_id')
    completed = True if request.form.get('completed') else False
    
    # Validate data
    if not details or not sprint_id:
        return "Task details and sprint ID are required", 400
    
    # Create new task
    task = Task(
        details=details,
        completed=completed,
        sprint_id=int(sprint_id)
    )
    
    # Save to database
    db.session.add(task)
    db.session.commit()
    
    # Get the sprint to render all tasks
    sprint = Sprint.query.get_or_404(int(sprint_id))
    
    # Return the updated task list HTML fragment
    return render_template('partials/task_list.html', sprint=sprint)

@htmx_bp.route('/tasks/form/<int:sprint_id>', methods=['GET'])
def get_task_form(sprint_id):
    """
    HTMX endpoint to get the task creation form
    
    Args:
        sprint_id: ID of the sprint to add the task to
        
    Returns:
        Rendered HTML fragment of the task form
    """
    # Check if sprint exists
    sprint = Sprint.query.get_or_404(sprint_id)
    
    # Return the task form HTML fragment
    return render_template('partials/task_form.html', sprint_id=sprint_id)

@htmx_bp.route('/issues/create', methods=['POST'])
def create_issue():
    """
    HTMX endpoint to create a new issue
    
    Returns:
        Rendered HTML fragment of the updated issue list
    """
    # Get form data
    details = request.form.get('details')
    sprint_id = request.form.get('sprint_id')
    completed = True if request.form.get('completed') else False
    
    # Validate data
    if not details or not sprint_id:
        return "Issue details and sprint ID are required", 400
    
    # Create new issue
    issue = Issue(
        details=details,
        completed=completed,
        sprint_id=int(sprint_id)
    )
    
    # Save to database
    db.session.add(issue)
    db.session.commit()
    
    # Get the sprint to render all issues
    sprint = Sprint.query.get_or_404(int(sprint_id))
    
    # Return the updated issue list HTML fragment
    return render_template('partials/issue_list.html', sprint=sprint)

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
    # Get the task
    task = Task.query.get_or_404(task_id)
    
    # Return the task edit form HTML fragment
    return render_template('partials/task_edit_form.html', task=task)

@htmx_bp.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    """
    HTMX endpoint to get a single task
    
    Args:
        task_id: ID of the task to get
        
    Returns:
        Rendered HTML fragment of the task
    """
    # Get the task
    task = Task.query.get_or_404(task_id)
    
    # Return the task HTML fragment
    return render_template('partials/task_item.html', task=task)

@htmx_bp.route('/tasks/<int:task_id>/update', methods=['POST'])
def update_task(task_id):
    """
    HTMX endpoint to update a task
    
    Args:
        task_id: ID of the task to update
        
    Returns:
        Rendered HTML fragment of the updated task
    """
    # Get the task
    task = Task.query.get_or_404(task_id)
    
    # Get form data
    details = request.form.get('details')
    completed = True if request.form.get('completed') else False
    
    # Update task details
    task.details = details
    task.completed = completed
    
    # Save to database
    db.session.commit()
    
    # Log the update for debugging
    print(f"Task #{task_id} updated: details='{details}', completed={completed}")
    
    # Return the updated task HTML fragment
    return render_template('partials/task_item.html', task=task)

@htmx_bp.route('/tasks/<int:task_id>/delete', methods=['POST'])
def delete_task(task_id):
    """
    HTMX endpoint to delete a task
    
    Args:
        task_id: ID of the task to delete
        
    Returns:
        Empty string (task is removed from the DOM)
    """
    try:
        # Get the task
        task = Task.query.get_or_404(task_id)
        
        # Delete the task
        db.session.delete(task)
        db.session.commit()
        
        # Return empty string (task will be removed from DOM)
        return ""
    except Exception as e:
        # Log the error
        print(f"Error deleting task: {e}")
        return f"Error deleting task: {str(e)}", 500

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

@htmx_bp.route('/issues/<int:issue_id>/update', methods=['POST'])
def update_issue(issue_id):
    """
    HTMX endpoint to update an issue
    
    Args:
        issue_id: ID of the issue to update
        
    Returns:
        Rendered HTML fragment of the updated issue
    """
    # Get the issue
    issue = Issue.query.get_or_404(issue_id)
    
    # Get form data
    details = request.form.get('details')
    completed = True if request.form.get('completed') else False
    
    # Update issue details
    issue.details = details
    issue.completed = completed
    
    # Save to database
    db.session.commit()
    
    # Log the update for debugging
    print(f"Issue #{issue_id} updated: details='{details}', completed={completed}")
    
    # Return the updated issue HTML fragment
    return render_template('partials/issue_item.html', issue=issue)

@htmx_bp.route('/issues/<int:issue_id>/delete', methods=['POST'])
def delete_issue(issue_id):
    """
    HTMX endpoint to delete an issue
    
    Args:
        issue_id: ID of the issue to delete
        
    Returns:
        Empty string (issue is removed from the DOM)
    """
    # Get the issue
    issue = Issue.query.get_or_404(issue_id)
    
    # Delete from database
    db.session.delete(issue)
    db.session.commit()
    
    # Return empty string (issue will be removed from DOM)
    return ""
