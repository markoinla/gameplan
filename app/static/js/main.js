/**
 * GamePlan - Main JavaScript
 * 
 * This file contains the client-side JavaScript for the GamePlan application.
 * It handles API calls, UI interactions, and dynamic content updates.
 */

/**
 * Update a sprint container with fresh content
 * @param {string} sprintId - The ID of the sprint to update
 * @returns {Promise} - A promise that resolves when the update is complete
 */
function updateSprintContainer(sprintId) {
    return new Promise((resolve, reject) => {
        fetch(`/api/sprints/${sprintId}/content`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                // Find the sprint container
                const sprintContainer = document.querySelector(`.sprint-card[data-sprint-id="${sprintId}"]`);
                if (sprintContainer) {
                    // Update the tasks and issues sections
                    const tasksContainer = sprintContainer.querySelector('.tasks-container');
                    const issuesContainer = sprintContainer.querySelector('.issues-container');
                    
                    if (tasksContainer) {
                        tasksContainer.innerHTML = data.data.tasksHtml || '';
                    }
                    
                    if (issuesContainer) {
                        issuesContainer.innerHTML = data.data.issuesHtml || '';
                    }
                    
                    // Initialize any new tooltips or popovers
                    initializeBootstrapComponents();
                }
                resolve();
            } else {
                reject(new Error('Failed to update sprint content'));
            }
        })
        .catch(error => {
            console.error('Error updating sprint container:', error);
            reject(error);
        });
    });
}

/**
 * Show a notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification (success, error, warning, info)
 */
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification-toast`;
    notification.innerHTML = message;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/**
 * Initialize Bootstrap components (tooltips, popovers, etc.)
 */
function initializeBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            container: 'body'
        });
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {
            container: 'body',
            html: true
        });
    });
}

// Project and Sprint Management - Removed in favor of HTMX
// The following functions were previously causing errors:
// - openProjectModal
// - openSprintModal
// - editProject
// - confirmDeleteProject
// These have been replaced with HTMX attributes in the HTML templates

/**
 * Universal utility function to close any form container
 * @param {string} containerId - The ID of the form container to close
 */
function closeFormContainer(containerId) {
    // Clear the form container
    const formContainer = document.getElementById(containerId);
    if (formContainer) {
        formContainer.innerHTML = '';
    }
}

/**
 * Close the task form for a specific sprint
 * @param {string} sprintId - The ID of the sprint
 */
function closeTaskForm(sprintId) {
    closeFormContainer(`task-form-container-${sprintId}`);
}

/**
 * Close the issue form for a specific sprint
 * @param {string} sprintId - The ID of the sprint
 */
function closeIssueForm(sprintId) {
    closeFormContainer(`issue-form-container-${sprintId}`);
}

/**
 * Close the sprint form for a specific project
 * @param {string} projectId - The ID of the project
 */
function closeSprintForm(projectId) {
    closeFormContainer(`sprint-form-container-${projectId}`);
}

/**
 * Close the project form
 */
function closeProjectForm() {
    closeFormContainer('project-form-container');
}

/**
 * Initialize task-related event listeners
 */
function initializeTaskEventListeners() {
    // Event delegation for task completion toggle
    document.addEventListener('click', function(event) {
        // Check if the click was on a task completion checkbox
        if (event.target.matches('.task-completion-checkbox')) {
            const taskId = event.target.dataset.taskId;
            const isCompleted = event.target.checked;
            
            // Update task completion status
            fetch(`/api/tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed: isCompleted
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 'success') {
                    // Update UI to reflect the new completion status
                    const taskItem = document.querySelector(`.task-item[data-task-id="${taskId}"]`);
                    if (taskItem) {
                        if (isCompleted) {
                            taskItem.classList.add('completed');
                        } else {
                            taskItem.classList.remove('completed');
                        }
                    }
                    
                    // Show notification
                    showNotification(`Task marked as ${isCompleted ? 'completed' : 'incomplete'}`);
                }
            })
            .catch(error => {
                console.error('Error updating task completion:', error);
                showNotification('Error updating task. Please try again.', 'error');
                
                // Revert checkbox state on error
                event.target.checked = !isCompleted;
            });
        }
    });
    
    // Add task button click
    document.querySelectorAll('.add-task-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            const sprintId = this.dataset.sprintId;
            openTaskModal(sprintId);
        });
    });
    
    // Save task button click
    document.getElementById('saveTaskBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        saveTask();
    });
}

/**
 * Initialize issue-related event listeners
 */
function initializeIssueEventListeners() {
    // Add issue button click
    document.querySelectorAll('.add-issue-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            const sprintId = this.dataset.sprintId;
            openIssueModal(sprintId);
        });
    });
    
    // Save issue button click
    document.getElementById('saveIssueBtn').addEventListener('click', function() {
        saveIssue();
    });
}

/**
 * Initialize keyboard shortcuts for the application
 */
function initializeKeyboardShortcuts() {
    // Add global keydown event listener for modal save shortcuts (Cmd/Ctrl + Enter)
    document.addEventListener('keydown', function(e) {
        // Check if Cmd (Mac) or Ctrl (Windows/Linux) key is pressed along with Enter
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            // Check which modal is currently active and trigger the appropriate save button
            if (document.getElementById('projectModal').classList.contains('show')) {
                // Project modal is active, trigger save project
                e.preventDefault();
                document.getElementById('saveProjectBtn').click();
            } else if (document.getElementById('sprintModal').classList.contains('show')) {
                // Sprint modal is active, trigger save sprint
                e.preventDefault();
                document.getElementById('saveSprintBtn').click();
            } else if (document.getElementById('taskModal').classList.contains('show')) {
                // Task modal is active, trigger save task
                e.preventDefault();
                document.getElementById('saveTaskBtn').click();
            } else if (document.getElementById('issueModal').classList.contains('show')) {
                // Issue modal is active, trigger save issue
                e.preventDefault();
                document.getElementById('saveIssueBtn').click();
            } else {
                // Check for HTMX task forms
                const htmxTaskForm = document.getElementById('htmx-task-form');
                if (htmxTaskForm) {
                    e.preventDefault();
                    // Submit the HTMX task form
                    htmxTaskForm.querySelector('button[type="submit"]').click();
                }
                
                // Check for HTMX issue forms
                const htmxIssueForm = document.getElementById('htmx-issue-form');
                if (htmxIssueForm) {
                    e.preventDefault();
                    // Submit the HTMX issue form
                    htmxIssueForm.querySelector('button[type="submit"]').click();
                }
            }
        }
    });
}

// Initialize everything when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap components
    initializeBootstrapComponents();
    
    // Initialize task event listeners
    initializeTaskEventListeners();
    
    // Initialize issue event listeners
    initializeIssueEventListeners();
    
    // Initialize keyboard shortcuts
    initializeKeyboardShortcuts();
});
