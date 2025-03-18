/**
 * GamePlan - Main JavaScript
 * 
 * This file contains the client-side JavaScript for the GamePlan application.
 * It handles API calls, UI interactions, and dynamic content updates.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap components
    initializeBootstrapComponents();
    
    // Initialize event listeners
    initializeEventListeners();
});

/**
 * Initialize Bootstrap components like modals, tooltips, etc.
 */
function initializeBootstrapComponents() {
    // Initialize all tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

/**
 * Initialize all event listeners for the application
 */
function initializeEventListeners() {
    // Project-related event listeners
    initializeProjectEventListeners();
    
    // Sprint-related event listeners
    initializeSprintEventListeners();
    
    // Task-related event listeners
    initializeTaskEventListeners();
    
    // Issue-related event listeners
    initializeIssueEventListeners();
}

/**
 * Initialize project-related event listeners
 */
function initializeProjectEventListeners() {
    // New project button click
    document.querySelectorAll('#newProjectBtn, #createProjectBtn, #createFirstProjectBtn').forEach(button => {
        button.addEventListener('click', function() {
            openProjectModal();
        });
    });
    
    // Save project button click
    document.getElementById('saveProjectBtn').addEventListener('click', function() {
        saveProject();
    });
    
    // Edit project button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.edit-project-btn')) {
            const projectId = e.target.closest('.edit-project-btn').dataset.projectId;
            editProject(projectId);
        }
    });
    
    // Delete project button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.delete-project-btn')) {
            const projectId = e.target.closest('.delete-project-btn').dataset.projectId;
            confirmDeleteProject(projectId);
        }
    });
}

/**
 * Initialize sprint-related event listeners
 */
function initializeSprintEventListeners() {
    // Add sprint button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-sprint-btn') || e.target.closest('.add-first-sprint-btn')) {
            const projectId = e.target.closest('[data-project-id]').dataset.projectId;
            openSprintModal(projectId);
        }
    });
    
    // Save sprint button click
    document.getElementById('saveSprintBtn').addEventListener('click', function() {
        saveSprint();
    });
    
    // Edit sprint button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.edit-sprint-btn')) {
            const sprintId = e.target.closest('.edit-sprint-btn').dataset.sprintId;
            editSprint(sprintId);
            e.stopPropagation(); // Prevent collapse toggle
        }
    });
    
    // Delete sprint button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.delete-sprint-btn')) {
            const sprintId = e.target.closest('.delete-sprint-btn').dataset.sprintId;
            confirmDeleteSprint(sprintId);
            e.stopPropagation(); // Prevent collapse toggle
        }
    });
    
    // Sprint header click (collapse/expand)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.sprint-header') && !e.target.closest('.edit-sprint-btn') && !e.target.closest('.delete-sprint-btn')) {
            const header = e.target.closest('.sprint-header');
            const toggleIcon = header.querySelector('.toggle-icon');
            if (header.getAttribute('aria-expanded') === 'true') {
                toggleIcon.style.transform = 'rotate(-90deg)';
            } else {
                toggleIcon.style.transform = 'rotate(0deg)';
            }
        }
    });
}

/**
 * Initialize task-related event listeners
 */
function initializeTaskEventListeners() {
    // Add task button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-task-btn')) {
            const sprintId = e.target.closest('.add-task-btn').dataset.sprintId;
            openTaskModal(sprintId);
        }
    });
    
    // Save task button click
    document.getElementById('saveTaskBtn').addEventListener('click', function() {
        saveTask();
    });
    
    // Edit task button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.edit-task-btn')) {
            const taskId = e.target.closest('.edit-task-btn').dataset.taskId;
            editTask(taskId);
        }
    });
    
    // Delete task button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.delete-task-btn')) {
            const taskId = e.target.closest('.delete-task-btn').dataset.taskId;
            confirmDeleteTask(taskId);
        }
    });
    
    // Task checkbox change
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('task-checkbox')) {
            const taskId = e.target.dataset.taskId;
            const completed = e.target.checked;
            toggleTaskCompletion(taskId, completed);
        }
    });
}

/**
 * Initialize issue-related event listeners
 */
function initializeIssueEventListeners() {
    // Add issue button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-issue-btn')) {
            const sprintId = e.target.closest('.add-issue-btn').dataset.sprintId;
            openIssueModal(sprintId);
        }
    });
    
    // Save issue button click
    document.getElementById('saveIssueBtn').addEventListener('click', function() {
        saveIssue();
    });
    
    // Edit issue button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.edit-issue-btn')) {
            const issueId = e.target.closest('.edit-issue-btn').dataset.issueId;
            editIssue(issueId);
        }
    });
    
    // Delete issue button click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.delete-issue-btn')) {
            const issueId = e.target.closest('.delete-issue-btn').dataset.issueId;
            confirmDeleteIssue(issueId);
        }
    });
    
    // Issue checkbox change
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('issue-checkbox')) {
            const issueId = e.target.dataset.issueId;
            const completed = e.target.checked;
            toggleIssueCompletion(issueId, completed);
        }
    });
}

// ===== PROJECT FUNCTIONS =====

/**
 * Open the project modal for creating a new project
 */
function openProjectModal(projectId = null) {
    // Clear form
    document.getElementById('projectForm').reset();
    document.getElementById('projectId').value = '';
    
    // Set modal title
    const modalTitle = document.getElementById('projectModalLabel');
    modalTitle.textContent = 'Create Project';
    
    // Show modal
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    projectModal.show();
}

/**
 * Save a project (create new or update existing)
 */
function saveProject() {
    // Get form values
    const projectId = document.getElementById('projectId').value;
    const name = document.getElementById('projectName').value;
    const description = document.getElementById('projectDescription').value;
    const requirements = document.getElementById('projectRequirements').value;
    
    // Validate form
    if (!name) {
        alert('Project name is required');
        return;
    }
    
    // Prepare project data
    const projectData = {
        name: name,
        description: description,
        requirements: requirements
    };
    
    // Determine if creating or updating
    const isUpdate = projectId !== '';
    const url = isUpdate ? `/api/projects/${projectId}` : '/api/projects';
    const method = isUpdate ? 'PUT' : 'POST';
    
    // Send API request
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close modal
        const projectModal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
        projectModal.hide();
        
        // Refresh page to show changes
        window.location.reload();
    })
    .catch(error => {
        console.error('Error saving project:', error);
        alert('Error saving project. Please try again.');
    });
}

/**
 * Edit an existing project
 * @param {string} projectId - The ID of the project to edit
 */
function editProject(projectId) {
    // Fetch project data
    fetch(`/api/projects/${projectId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'success') {
            const project = data.data;
            
            // Fill form with project data
            document.getElementById('projectId').value = project.id;
            document.getElementById('projectName').value = project.name;
            document.getElementById('projectDescription').value = project.description || '';
            document.getElementById('projectRequirements').value = project.requirements || '';
            
            // Set modal title
            document.getElementById('projectModalLabel').textContent = 'Edit Project';
            
            // Show modal
            const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
            projectModal.show();
        }
    })
    .catch(error => {
        console.error('Error fetching project:', error);
        alert('Error fetching project data. Please try again.');
    });
}

/**
 * Confirm deletion of a project
 * @param {string} projectId - The ID of the project to delete
 */
function confirmDeleteProject(projectId) {
    // Set confirmation message
    document.getElementById('confirmationMessage').textContent = 'Are you sure you want to delete this project? This will also delete all associated sprints, tasks, and issues.';
    
    // Set up confirmation button
    const confirmBtn = document.getElementById('confirmActionBtn');
    confirmBtn.textContent = 'Delete Project';
    confirmBtn.onclick = function() {
        deleteProject(projectId);
    };
    
    // Show confirmation modal
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

/**
 * Delete a project
 * @param {string} projectId - The ID of the project to delete
 */
function deleteProject(projectId) {
    // Send delete request
    fetch(`/api/projects/${projectId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close confirmation modal
        const confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
        confirmationModal.hide();
        
        // Refresh page to show changes
        window.location.reload();
    })
    .catch(error => {
        console.error('Error deleting project:', error);
        alert('Error deleting project. Please try again.');
    });
}

// ===== SPRINT FUNCTIONS =====

/**
 * Open the sprint modal for creating a new sprint
 * @param {string} projectId - The ID of the project to add the sprint to
 */
function openSprintModal(projectId, sprintId = null) {
    // Clear form
    document.getElementById('sprintForm').reset();
    document.getElementById('sprintId').value = '';
    document.getElementById('sprintProjectId').value = projectId;
    
    // Set modal title
    const modalTitle = document.getElementById('sprintModalLabel');
    modalTitle.textContent = 'Create Sprint';
    
    // Show modal
    const sprintModal = new bootstrap.Modal(document.getElementById('sprintModal'));
    sprintModal.show();
}

/**
 * Save a sprint (create new or update existing)
 */
function saveSprint() {
    // Get form values
    const sprintId = document.getElementById('sprintId').value;
    const projectId = document.getElementById('sprintProjectId').value;
    const name = document.getElementById('sprintName').value;
    const description = document.getElementById('sprintDescription').value;
    const status = document.getElementById('sprintStatus').value;
    
    // Validate form
    if (!name) {
        alert('Sprint name is required');
        return;
    }
    
    // Prepare sprint data
    const sprintData = {
        name: name,
        description: description,
        status: status,
        project_id: parseInt(projectId)
    };
    
    // Determine if creating or updating
    const isUpdate = sprintId !== '';
    const url = isUpdate ? `/api/sprints/${sprintId}` : '/api/sprints';
    const method = isUpdate ? 'PUT' : 'POST';
    
    // Send API request
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sprintData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close modal
        const sprintModal = bootstrap.Modal.getInstance(document.getElementById('sprintModal'));
        sprintModal.hide();
        
        // Refresh page to show changes
        window.location.reload();
    })
    .catch(error => {
        console.error('Error saving sprint:', error);
        alert('Error saving sprint. Please try again.');
    });
}

/**
 * Edit an existing sprint
 * @param {string} sprintId - The ID of the sprint to edit
 */
function editSprint(sprintId) {
    // Fetch sprint data
    fetch(`/api/sprints/${sprintId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'success') {
            const sprint = data.data;
            
            // Fill form with sprint data
            document.getElementById('sprintId').value = sprint.id;
            document.getElementById('sprintProjectId').value = sprint.project_id;
            document.getElementById('sprintName').value = sprint.name;
            document.getElementById('sprintDescription').value = sprint.description || '';
            document.getElementById('sprintStatus').value = sprint.status;
            
            // Set modal title
            document.getElementById('sprintModalLabel').textContent = 'Edit Sprint';
            
            // Show modal
            const sprintModal = new bootstrap.Modal(document.getElementById('sprintModal'));
            sprintModal.show();
        }
    })
    .catch(error => {
        console.error('Error fetching sprint:', error);
        alert('Error fetching sprint data. Please try again.');
    });
}

/**
 * Confirm deletion of a sprint
 * @param {string} sprintId - The ID of the sprint to delete
 */
function confirmDeleteSprint(sprintId) {
    // Set confirmation message
    document.getElementById('confirmationMessage').textContent = 'Are you sure you want to delete this sprint? This will also delete all associated tasks and issues.';
    
    // Set up confirmation button
    const confirmBtn = document.getElementById('confirmActionBtn');
    confirmBtn.textContent = 'Delete Sprint';
    confirmBtn.onclick = function() {
        deleteSprint(sprintId);
    };
    
    // Show confirmation modal
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

/**
 * Delete a sprint
 * @param {string} sprintId - The ID of the sprint to delete
 */
function deleteSprint(sprintId) {
    // Send delete request
    fetch(`/api/sprints/${sprintId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close confirmation modal
        const confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
        confirmationModal.hide();
        
        // Refresh page to show changes
        window.location.reload();
    })
    .catch(error => {
        console.error('Error deleting sprint:', error);
        alert('Error deleting sprint. Please try again.');
    });
}

// ===== TASK FUNCTIONS =====

/**
 * Open the task modal for creating a new task
 * @param {string} sprintId - The ID of the sprint to add the task to
 */
function openTaskModal(sprintId, taskId = null) {
    // Clear form
    document.getElementById('taskForm').reset();
    document.getElementById('taskId').value = '';
    document.getElementById('taskSprintId').value = sprintId;
    
    // Set modal title
    const modalTitle = document.getElementById('taskModalLabel');
    modalTitle.textContent = 'Create Task';
    
    // Show modal
    const taskModal = new bootstrap.Modal(document.getElementById('taskModal'));
    taskModal.show();
}

/**
 * Save a task (create new or update existing)
 */
function saveTask() {
    // Get form values
    const taskId = document.getElementById('taskId').value;
    const sprintId = document.getElementById('taskSprintId').value;
    const details = document.getElementById('taskDetails').value;
    const completed = document.getElementById('taskCompleted').checked;
    
    // Validate form
    if (!details) {
        alert('Task details are required');
        return;
    }
    
    // Prepare task data
    const taskData = {
        details: details,
        completed: completed,
        sprint_id: parseInt(sprintId)
    };
    
    // Determine if creating or updating
    const isUpdate = taskId !== '';
    const url = isUpdate ? `/api/tasks/${taskId}` : '/api/tasks';
    const method = isUpdate ? 'PUT' : 'POST';
    
    // Send API request
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close modal
        const taskModal = bootstrap.Modal.getInstance(document.getElementById('taskModal'));
        taskModal.hide();
        
        // Refresh page to show changes
        window.location.reload();
    })
    .catch(error => {
        console.error('Error saving task:', error);
        alert('Error saving task. Please try again.');
    });
}

/**
 * Edit an existing task
 * @param {string} taskId - The ID of the task to edit
 */
function editTask(taskId) {
    // Fetch task data
    fetch(`/api/tasks/${taskId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'success') {
            const task = data.data;
            
            // Fill form with task data
            document.getElementById('taskId').value = task.id;
            document.getElementById('taskSprintId').value = task.sprint_id;
            document.getElementById('taskDetails').value = task.details;
            document.getElementById('taskCompleted').checked = task.completed;
            
            // Set modal title
            document.getElementById('taskModalLabel').textContent = 'Edit Task';
            
            // Show modal
            const taskModal = new bootstrap.Modal(document.getElementById('taskModal'));
            taskModal.show();
        }
    })
    .catch(error => {
        console.error('Error fetching task:', error);
        alert('Error fetching task data. Please try again.');
    });
}

/**
 * Confirm deletion of a task
 * @param {string} taskId - The ID of the task to delete
 */
function confirmDeleteTask(taskId) {
    // Set confirmation message
    document.getElementById('confirmationMessage').textContent = 'Are you sure you want to delete this task?';
    
    // Set up confirmation button
    const confirmBtn = document.getElementById('confirmActionBtn');
    confirmBtn.textContent = 'Delete Task';
    confirmBtn.onclick = function() {
        deleteTask(taskId);
    };
    
    // Show confirmation modal
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

/**
 * Delete a task
 * @param {string} taskId - The ID of the task to delete
 */
function deleteTask(taskId) {
    // Send delete request
    fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close confirmation modal
        const confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
        confirmationModal.hide();
        
        // Refresh page to show changes
        window.location.reload();
    })
    .catch(error => {
        console.error('Error deleting task:', error);
        alert('Error deleting task. Please try again.');
    });
}

/**
 * Toggle task completion status
 * @param {string} taskId - The ID of the task
 * @param {boolean} completed - Whether the task is completed
 */
function toggleTaskCompletion(taskId, completed) {
    // Get the label element
    const checkbox = document.querySelector(`.task-checkbox[data-task-id="${taskId}"]`);
    const label = checkbox.nextElementSibling;
    
    // Update label style
    if (completed) {
        label.classList.add('text-decoration-line-through');
    } else {
        label.classList.remove('text-decoration-line-through');
    }
    
    // Send update request
    fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            completed: completed,
            details: label.textContent.trim(),
            sprint_id: parseInt(checkbox.closest('.sprint-card').dataset.sprintId)
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error updating task completion:', error);
        // Revert checkbox state on error
        checkbox.checked = !completed;
        if (!completed) {
            label.classList.add('text-decoration-line-through');
        } else {
            label.classList.remove('text-decoration-line-through');
        }
        alert('Error updating task. Please try again.');
    });
}

// ===== ISSUE FUNCTIONS =====

/**
 * Open the issue modal for creating a new issue
 * @param {string} sprintId - The ID of the sprint to add the issue to
 */
function openIssueModal(sprintId, issueId = null) {
    // Clear form
    document.getElementById('issueForm').reset();
    document.getElementById('issueId').value = '';
    document.getElementById('issueSprintId').value = sprintId;
    
    // Set modal title
    const modalTitle = document.getElementById('issueModalLabel');
    modalTitle.textContent = 'Create Issue';
    
    // Show modal
    const issueModal = new bootstrap.Modal(document.getElementById('issueModal'));
    issueModal.show();
}

/**
 * Save an issue (create new or update existing)
 */
function saveIssue() {
    // Get form values
    const issueId = document.getElementById('issueId').value;
    const sprintId = document.getElementById('issueSprintId').value;
    const details = document.getElementById('issueDetails').value;
    const completed = document.getElementById('issueCompleted').checked;
    
    // Validate form
    if (!details) {
        alert('Issue details are required');
        return;
    }
    
    // Prepare issue data
    const issueData = {
        details: details,
        completed: completed,
        sprint_id: parseInt(sprintId)
    };
    
    // Determine if creating or updating
    const isUpdate = issueId !== '';
    const url = isUpdate ? `/api/issues/${issueId}` : '/api/issues';
    const method = isUpdate ? 'PUT' : 'POST';
    
    // Send API request
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(issueData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close modal
        const issueModal = bootstrap.Modal.getInstance(document.getElementById('issueModal'));
        issueModal.hide();
        
        // Refresh page to show changes
        window.location.reload();
    })
    .catch(error => {
        console.error('Error saving issue:', error);
        alert('Error saving issue. Please try again.');
    });
}

/**
 * Edit an existing issue
 * @param {string} issueId - The ID of the issue to edit
 */
function editIssue(issueId) {
    // Fetch issue data
    fetch(`/api/issues/${issueId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'success') {
            const issue = data.data;
            
            // Fill form with issue data
            document.getElementById('issueId').value = issue.id;
            document.getElementById('issueSprintId').value = issue.sprint_id;
            document.getElementById('issueDetails').value = issue.details;
            document.getElementById('issueCompleted').checked = issue.completed;
            
            // Set modal title
            document.getElementById('issueModalLabel').textContent = 'Edit Issue';
            
            // Show modal
            const issueModal = new bootstrap.Modal(document.getElementById('issueModal'));
            issueModal.show();
        }
    })
    .catch(error => {
        console.error('Error fetching issue:', error);
        alert('Error fetching issue data. Please try again.');
    });
}

/**
 * Confirm deletion of an issue
 * @param {string} issueId - The ID of the issue to delete
 */
function confirmDeleteIssue(issueId) {
    // Set confirmation message
    document.getElementById('confirmationMessage').textContent = 'Are you sure you want to delete this issue?';
    
    // Set up confirmation button
    const confirmBtn = document.getElementById('confirmActionBtn');
    confirmBtn.textContent = 'Delete Issue';
    confirmBtn.onclick = function() {
        deleteIssue(issueId);
    };
    
    // Show confirmation modal
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

/**
 * Delete an issue
 * @param {string} issueId - The ID of the issue to delete
 */
function deleteIssue(issueId) {
    // Send delete request
    fetch(`/api/issues/${issueId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close confirmation modal
        const confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
        confirmationModal.hide();
        
        // Refresh page to show changes
        window.location.reload();
    })
    .catch(error => {
        console.error('Error deleting issue:', error);
        alert('Error deleting issue. Please try again.');
    });
}

/**
 * Toggle issue completion status
 * @param {string} issueId - The ID of the issue
 * @param {boolean} completed - Whether the issue is completed
 */
function toggleIssueCompletion(issueId, completed) {
    // Get the label element
    const checkbox = document.querySelector(`.issue-checkbox[data-issue-id="${issueId}"]`);
    const label = checkbox.nextElementSibling;
    
    // Update label style
    if (completed) {
        label.classList.add('text-decoration-line-through');
    } else {
        label.classList.remove('text-decoration-line-through');
    }
    
    // Send update request
    fetch(`/api/issues/${issueId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            completed: completed,
            details: label.textContent.trim(),
            sprint_id: parseInt(checkbox.closest('.sprint-card').dataset.sprintId)
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error updating issue completion:', error);
        // Revert checkbox state on error
        checkbox.checked = !completed;
        if (!completed) {
            label.classList.add('text-decoration-line-through');
        } else {
            label.classList.remove('text-decoration-line-through');
        }
        alert('Error updating issue. Please try again.');
    });
}
