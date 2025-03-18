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
    
    // Initialize keyboard shortcuts
    initializeKeyboardShortcuts();
});

/**
 * Initialize Bootstrap components like modals, tooltips, etc.
 */
function initializeBootstrapComponents() {
    // Initialize all tooltips with custom configuration to prevent multiple tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            trigger: 'hover',  // Only trigger on hover, not on focus
            container: 'body', // Append tooltips to body to manage z-index better
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>', // Remove arrow
            animation: false,  // Disable animation for cleaner appearance
            delay: { show: 50, hide: 0 } // Quick show, immediate hide
        });
    });

    // Ensure only one tooltip is shown at a time
    document.addEventListener('mouseover', function(e) {
        if (!e.target.hasAttribute('data-bs-toggle') && !e.target.closest('[data-bs-toggle="tooltip"]')) {
            // Hide all tooltips when mouse is not over a tooltip trigger
            tooltipTriggerList.forEach(function(tooltipTriggerEl) {
                const tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
                if (tooltip) {
                    tooltip.hide();
                }
            });
        }
    });

    // Do not initialize modals here - we'll handle them individually when needed
}

/**
 * Dynamic Content Update Functions
 * These functions allow updating specific parts of the page without a full reload
 */

/**
 * Show a temporary notification message to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of message (success, error, info)
 */
function showNotification(message, type = 'success') {
    // Create notification element if it doesn't exist
    let notificationContainer = document.getElementById('notificationContainer');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notificationContainer';
        notificationContainer.style.position = 'fixed';
        notificationContainer.style.top = '20px';
        notificationContainer.style.right = '20px';
        notificationContainer.style.zIndex = '9999';
        document.body.appendChild(notificationContainer);
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show`;
    notification.role = 'alert';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 150);
    }, 5000);
}

/**
 * Update the projects container with fresh data
 * @returns {Promise} - Promise that resolves when the update is complete
 */
function updateProjectsContainer() {
    return fetch('/api/projects')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                // We need to request the full HTML from the server
                // as it contains Alpine.js templates that are difficult to replicate client-side
                return fetch('/?partial=projects')
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('projectsContainer').innerHTML = html;
                        // Reinitialize tooltips for new content
                        initializeBootstrapComponents();
                    });
            }
        })
        .catch(error => {
            console.error('Error updating projects:', error);
            showNotification('Error updating projects. Please refresh the page.', 'error');
        });
}

/**
 * Update a specific sprint container with fresh data
 * @param {string} sprintId - The ID of the sprint to update
 * @returns {Promise} - Promise that resolves when the update is complete
 */
function updateSprintContainer(sprintId) {
    return fetch(`/api/sprints/${sprintId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch sprint');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                // Request the partial HTML for this sprint
                return fetch(`/?partial=sprint&sprint_id=${sprintId}`)
                    .then(response => response.text())
                    .then(html => {
                        const sprintCard = document.querySelector(`.sprint-card[data-sprint-id="${sprintId}"]`);
                        if (sprintCard) {
                            // Replace the sprint card with new content
                            sprintCard.outerHTML = html;
                            // Reinitialize tooltips for new content
                            initializeBootstrapComponents();
                        }
                    });
            }
        })
        .catch(error => {
            console.error(`Error updating sprint ${sprintId}:`, error);
            showNotification('Error updating sprint. Please refresh the page.', 'error');
        });
}

/**
 * Update all sprints for a specific project
 * @param {string} projectId - The ID of the project
 * @returns {Promise} - Promise that resolves when the update is complete
 */
function updateProjectSprints(projectId) {
    return fetch(`/api/projects/${projectId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch project');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                // Request the partial HTML for this project's sprints
                return fetch(`/?partial=project_sprints&project_id=${projectId}`)
                    .then(response => response.text())
                    .then(html => {
                        const sprintsContainer = document.querySelector(`.project-card[data-project-id="${projectId}"] .sprints-container`);
                        if (sprintsContainer) {
                            // Replace the sprints container with new content
                            sprintsContainer.innerHTML = html;
                            // Reinitialize tooltips for new content
                            initializeBootstrapComponents();
                        }
                    });
            }
        })
        .catch(error => {
            console.error(`Error updating project ${projectId} sprints:`, error);
            showNotification('Error updating sprints. Please refresh the page.', 'error');
        });
}

/**
 * Update tasks and issues for a specific sprint
 * @param {string} sprintId - The ID of the sprint
 * @returns {Promise} - Promise that resolves when the update is complete
 */
function updateSprintTasksAndIssues(sprintId) {
    // Fetch tasks
    const tasksPromise = fetch(`/api/tasks?sprint_id=${sprintId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch tasks');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                // Request the partial HTML for this sprint's tasks
                return fetch(`/?partial=sprint_tasks&sprint_id=${sprintId}`)
                    .then(response => response.text())
                    .then(html => {
                        const tasksContainer = document.querySelector(`.sprint-card[data-sprint-id="${sprintId}"] .tasks-container`);
                        if (tasksContainer) {
                            // Replace the tasks container with new content
                            tasksContainer.innerHTML = html;
                        }
                    });
            }
        })
        .catch(error => {
            console.error(`Error updating sprint ${sprintId} tasks:`, error);
            showNotification('Error updating tasks. Please refresh the page.', 'error');
        });
    
    // Fetch issues
    const issuesPromise = fetch(`/api/issues?sprint_id=${sprintId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch issues');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                // Request the partial HTML for this sprint's issues
                return fetch(`/?partial=sprint_issues&sprint_id=${sprintId}`)
                    .then(response => response.text())
                    .then(html => {
                        const issuesContainer = document.querySelector(`.sprint-card[data-sprint-id="${sprintId}"] .issues-container`);
                        if (issuesContainer) {
                            // Replace the issues container with new content
                            issuesContainer.innerHTML = html;
                        }
                    });
            }
        })
        .catch(error => {
            console.error(`Error updating sprint ${sprintId} issues:`, error);
            showNotification('Error updating issues. Please refresh the page.', 'error');
        });
    
    // Wait for both updates to complete
    return Promise.all([tasksPromise, issuesPromise])
        .then(() => {
            // Reinitialize tooltips for new content
            initializeBootstrapComponents();
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
    document.querySelectorAll('.add-sprint-btn, .add-first-sprint-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            const projectId = this.dataset.projectId;
            openSprintModal(projectId);
        });
    });
    
    // Save sprint button click
    document.getElementById('saveSprintBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        saveSprint();
    });
    
    // Edit sprint button click
    document.querySelectorAll('.edit-sprint-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            const sprintId = this.dataset.sprintId;
            editSprint(sprintId);
        });
    });
    
    // Delete sprint button click
    document.querySelectorAll('.delete-sprint-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            const sprintId = this.dataset.sprintId;
            confirmDeleteSprint(sprintId);
        });
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
    
    // Edit task button click - Using event delegation for dynamically added elements
    document.addEventListener('click', function(e) {
        if (e.target.closest('.edit-task-btn')) {
            e.stopPropagation();
            e.preventDefault();
            const taskId = e.target.closest('.edit-task-btn').dataset.taskId;
            editTask(taskId);
        }
    });
    
    // Delete task button click - Using event delegation for dynamically added elements
    document.addEventListener('click', function(e) {
        if (e.target.closest('.delete-task-btn')) {
            e.stopPropagation();
            e.preventDefault();
            const taskId = e.target.closest('.delete-task-btn').dataset.taskId;
            confirmDeleteTask(taskId);
        }
    });
    
    // Task checkbox change - Using event delegation for dynamically added elements
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('task-check')) {
            const taskId = e.target.dataset.taskId;
            toggleTaskCompletion(e, taskId);
        }
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
    document.getElementById('saveIssueBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        saveIssue();
    });
    
    // Edit issue button click - Using event delegation for dynamically added elements
    document.addEventListener('click', function(e) {
        if (e.target.closest('.edit-issue-btn')) {
            e.stopPropagation();
            e.preventDefault();
            const issueId = e.target.closest('.edit-issue-btn').dataset.issueId;
            editIssue(issueId);
        }
    });
    
    // Delete issue button click - Using event delegation for dynamically added elements
    document.addEventListener('click', function(e) {
        if (e.target.closest('.delete-issue-btn')) {
            e.stopPropagation();
            e.preventDefault();
            const issueId = e.target.closest('.delete-issue-btn').dataset.issueId;
            confirmDeleteIssue(issueId);
        }
    });
    
    // Issue checkbox change - Using event delegation for dynamically added elements
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('issue-check')) {
            const issueId = e.target.dataset.issueId;
            toggleIssueCompletion(e, issueId);
        }
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
            }
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
        
        // Update the projects container instead of reloading the page
        updateProjectsContainer().then(() => {
            showNotification('Project saved successfully!');
        });
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
        
        // Update the projects container instead of reloading the page
        updateProjectsContainer().then(() => {
            showNotification('Project deleted successfully!');
        });
    })
    .catch(error => {
        console.error('Error deleting project:', error);
        alert('Error deleting project. Please try again.');
    });
}

// ===== SPRINT FUNCTIONS =====

/**
 * Open the sprint modal for creating a new sprint or editing an existing one
 * @param {string} projectId - The ID of the project to add the sprint to
 * @param {string} sprintId - Optional, the ID of the sprint to edit
 */
function openSprintModal(projectId, sprintId = null) {
    // Clear form
    document.getElementById('sprintForm').reset();
    
    // Set project ID
    document.getElementById('sprintProjectId').value = projectId;
    
    // Set modal title and sprint ID
    const modalTitle = document.getElementById('sprintModalLabel');
    if (sprintId) {
        document.getElementById('sprintId').value = sprintId;
        modalTitle.textContent = 'Edit Sprint';
        
        // Fetch sprint data from MCP
        fetch('/mcp/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'get_sprint',
                parameters: { sprint_id: parseInt(sprintId) }
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Populate form fields with sprint data
            document.getElementById('sprintName').value = data.result.name;
            document.getElementById('sprintDescription').value = data.result.description;
            document.getElementById('sprintStatus').value = data.result.status;
            document.getElementById('sprintProjectId').value = data.result.project_id;
        })
        .catch(error => {
            console.error('Error fetching sprint:', error);
            alert('Error fetching sprint. Please try again.');
        });
    } else {
        document.getElementById('sprintId').value = '';
        modalTitle.textContent = 'Create Sprint';
    }
    
    // Show modal using getOrCreateInstance
    const sprintModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('sprintModal'));
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
    
    // Send request through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: sprintId ? 'update_sprint' : 'create_sprint',
            parameters: sprintId ? { ...sprintData, sprint_id: parseInt(sprintId), project_id: parseInt(projectId) } : sprintData
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close modal using getOrCreateInstance
        const sprintModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('sprintModal'));
        sprintModal.hide();
        
        // Update the project's sprints instead of reloading the page
        updateProjectSprints(sprintData.project_id).then(() => {
            showNotification('Sprint saved successfully!');
        });
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
    // Fetch sprint data through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'get_sprint',
            parameters: { sprint_id: parseInt(sprintId) }
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.result) {
            const sprint = data.result;
            
            // Fill form with sprint data
            document.getElementById('sprintId').value = sprint.id;
            document.getElementById('sprintProjectId').value = sprint.project_id;
            document.getElementById('sprintName').value = sprint.name;
            document.getElementById('sprintDescription').value = sprint.description || '';
            document.getElementById('sprintStatus').value = sprint.status;
            
            // Open modal with edit title
            openSprintModal(sprint.project_id, sprint.id);
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
    
    // Show confirmation modal using getOrCreateInstance
    const confirmationModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

/**
 * Delete a sprint
 * @param {string} sprintId - The ID of the sprint to delete
 */
function deleteSprint(sprintId) {
    // Send delete request through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'delete_sprint',
            parameters: { sprint_id: parseInt(sprintId) }
        })
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
        
        // Update the projects container instead of reloading the page
        updateProjectsContainer().then(() => {
            showNotification('Sprint deleted successfully!');
        });
    })
    .catch(error => {
        console.error('Error deleting sprint:', error);
        alert('Error deleting sprint. Please try again.');
    });
}

// ===== TASK FUNCTIONS =====

/**
 * Open the task modal for creating a new task or editing an existing one
 * @param {string} sprintId - The ID of the sprint to add the task to
 * @param {string} taskId - Optional, the ID of the task to edit
 */
function openTaskModal(sprintId, taskId = null) {
    // Clear form
    document.getElementById('taskForm').reset();
    
    // Set sprint ID
    document.getElementById('taskSprintId').value = sprintId;
    
    // Set modal title and task ID
    const modalTitle = document.getElementById('taskModalLabel');
    if (taskId) {
        document.getElementById('taskId').value = taskId;
        modalTitle.textContent = 'Edit Task';
    } else {
        document.getElementById('taskId').value = '';
        modalTitle.textContent = 'Create Task';
    }
    
    // Show modal using getOrCreateInstance
    const taskModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('taskModal'));
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
    
    // Send request through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: taskId ? 'update_task' : 'create_task',
            parameters: taskId ? { ...taskData, id: parseInt(taskId) } : taskData
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close modal using getOrCreateInstance
        const taskModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('taskModal'));
        taskModal.hide();
        
        // Update the sprint's tasks and issues instead of reloading the page
        updateSprintTasksAndIssues(taskData.sprint_id).then(() => {
            showNotification('Task saved successfully!');
        });
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
    // Fetch task data through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'get_task',
            parameters: { task_id: parseInt(taskId) }
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.result) {
            const task = data.result;
            
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
    // Send delete request through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'delete_task',
            parameters: { task_id: parseInt(taskId) }
        })
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
        
        // Get the sprint ID from the task before it's deleted
        const sprintId = document.querySelector(`.task-item[data-task-id="${taskId}"]`).closest('.sprint-card').dataset.sprintId;
        
        // Update the sprint's tasks and issues instead of reloading the page
        updateSprintTasksAndIssues(sprintId).then(() => {
            showNotification('Task deleted successfully!');
        });
    })
    .catch(error => {
        console.error('Error deleting task:', error);
        alert('Error deleting task. Please try again.');
    });
}

/**
 * Toggle task completion status
 * @param {Event} event - The click event
 * @param {string} taskId - The ID of the task
 */
function toggleTaskCompletion(event, taskId) {
    // Get the checkbox element
    const checkbox = event.target;
    
    // Get the current completion status
    const completed = checkbox.checked;
    
    // Get the task details
    const taskItem = checkbox.closest('.task-item');
    const details = taskItem.querySelector('.form-check-label').textContent.trim();
    const sprintId = taskItem.closest('.sprint-card').dataset.sprintId;
    
    console.log('Updating task:', {
        id: parseInt(taskId),
        details: details,
        completed: completed,
        sprint_id: parseInt(sprintId)
    });
    
    // Update the task through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'update_task',
            parameters: {
                id: parseInt(taskId),
                details: details,
                completed: completed,
                sprint_id: parseInt(sprintId)
            }
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Task update response:', data);
        
        // Refresh the page to show updated state
        window.location.reload();
    })
    .catch(error => {
        console.error('Error updating task:', error);
        showNotification('Error updating task. Please try again.', 'error');
        
        // Revert the checkbox state
        checkbox.checked = !completed;
    });
}

// ===== ISSUE FUNCTIONS =====

/**
 * Open the issue modal for creating a new issue or editing an existing one
 * @param {string} sprintId - The ID of the sprint to add the issue to
 * @param {string} issueId - Optional, the ID of the issue to edit
 */
function openIssueModal(sprintId, issueId = null) {
    // Clear form
    document.getElementById('issueForm').reset();
    
    // Set sprint ID
    document.getElementById('issueSprintId').value = sprintId;
    
    // Set modal title and issue ID
    const modalTitle = document.getElementById('issueModalLabel');
    if (issueId) {
        document.getElementById('issueId').value = issueId;
        modalTitle.textContent = 'Edit Issue';
    } else {
        document.getElementById('issueId').value = '';
        modalTitle.textContent = 'Create Issue';
    }
    
    // Show modal using getOrCreateInstance
    const issueModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('issueModal'));
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
    
    // Send request through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: issueId ? 'update_issue' : 'create_issue',
            parameters: issueId ? { ...issueData, id: parseInt(issueId) } : issueData
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Close modal using getOrCreateInstance
        const issueModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('issueModal'));
        issueModal.hide();
        
        // Update the sprint's tasks and issues instead of reloading the page
        updateSprintTasksAndIssues(issueData.sprint_id).then(() => {
            showNotification('Issue saved successfully!');
        });
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
    // Fetch issue data through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'get_issue',
            parameters: { issue_id: parseInt(issueId) }
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.result) {
            const issue = data.result;
            
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
    // Send delete request through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'delete_issue',
            parameters: { issue_id: parseInt(issueId) }
        })
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
        
        // Get the sprint ID from the issue before it's deleted
        const sprintId = document.querySelector(`.issue-item[data-issue-id="${issueId}"]`).closest('.sprint-card').dataset.sprintId;
        
        // Update the sprint's tasks and issues instead of reloading the page
        updateSprintTasksAndIssues(sprintId).then(() => {
            showNotification('Issue deleted successfully!');
        });
    })
    .catch(error => {
        console.error('Error deleting issue:', error);
        alert('Error deleting issue. Please try again.');
    });
}

/**
 * Toggle issue completion status
 * @param {Event} event - The click event
 * @param {string} issueId - The ID of the issue
 */
function toggleIssueCompletion(event, issueId) {
    // Get the checkbox element
    const checkbox = event.target;
    
    // Get the current completion status
    const completed = checkbox.checked;
    
    // Get the issue details
    const issueItem = checkbox.closest('.issue-item');
    const details = issueItem.querySelector('.form-check-label').textContent.trim();
    const sprintId = issueItem.closest('.sprint-card').dataset.sprintId;
    
    console.log('Updating issue:', {
        id: parseInt(issueId),
        details: details,
        completed: completed,
        sprint_id: parseInt(sprintId)
    });
    
    // Update the issue through MCP
    fetch('/mcp/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'update_issue',
            parameters: {
                id: parseInt(issueId),
                details: details,
                completed: completed,
                sprint_id: parseInt(sprintId)
            }
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Issue update response:', data);
        
        // Refresh the page to show updated state
        window.location.reload();
    })
    .catch(error => {
        console.error('Error updating issue:', error);
        showNotification('Error updating issue. Please try again.', 'error');
        
        // Revert the checkbox state
        checkbox.checked = !completed;
    });
}
