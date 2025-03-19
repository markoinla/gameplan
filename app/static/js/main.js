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
 * Format a date string as a relative time (e.g., "2 days ago")
 * @param {string} dateString - The date string to format
 * @returns {string} - The formatted relative time
 */
function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) {
        return 'just now';
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
        return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
    }
    
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
    }
    
    const diffInYears = Math.floor(diffInMonths / 12);
    return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
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
    
    // Initialize keyboard shortcuts for forms
    initializeFormKeyboardShortcuts();
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
    
    // Note: Task checkbox change event listener has been removed
    // Task completion toggling is now handled by HTMX in the task_item.html partial
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
    
    // Note: Issue checkbox change event listener has been removed
    // Issue completion toggling is now handled by HTMX in the issue_item.html partial
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

/**
 * Initialize keyboard shortcuts for form submissions
 * Allows users to submit forms using Ctrl+Enter or Command+Enter
 */
function initializeFormKeyboardShortcuts() {
    // List of forms and their corresponding save functions
    const formMappings = [
        { formId: 'projectForm', saveFunction: saveProject },
        { formId: 'sprintForm', saveFunction: saveSprint },
        { formId: 'taskForm', saveFunction: saveTask },
        { formId: 'issueForm', saveFunction: saveIssue }
    ];
    
    // Add keyboard event listeners to each form
    formMappings.forEach(mapping => {
        const form = document.getElementById(mapping.formId);
        if (form) {
            form.addEventListener('keydown', function(event) {
                // Check if Ctrl+Enter or Command+Enter was pressed
                if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                    event.preventDefault(); // Prevent default form submission
                    mapping.saveFunction(); // Call the corresponding save function
                    
                    // Show a subtle notification to inform the user
                    showNotification('Form submitted with keyboard shortcut', 'info');
                }
            });
        }
    });
}

// Initialize when the document is ready
$(document).ready(function() {
    // Initialize tooltips
    initTooltips();
    
    // Initialize Alpine.js components - commented out as function is not defined
    // initAlpine();
    
    // Initialize event listeners
    initEventListeners();
    
    // Initialize MCP
    initMCP();
});

/**
 * Initialize Bootstrap popovers
 */
function initPopovers() {
    // Enable popovers everywhere
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    [...popoverTriggerList].forEach(popoverTriggerEl => {
        const popover = new bootstrap.Popover(popoverTriggerEl, {
            trigger: 'focus',
            html: true,
            content: function() {
                const taskId = $(this).data('task-id');
                return `
                    <p>Are you sure you want to delete this task?</p>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-sm btn-secondary me-2" onclick="$('[data-bs-toggle=popover]').popover('hide')">Cancel</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteTask(${taskId}); $('[data-bs-toggle=popover]').popover('hide')">Delete</button>
                    </div>
                `;
            }
        });
    });
}

/**
 * Initialize tooltips
 */
function initTooltips() {
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
    
    // Add keyboard shortcut hint to modal footer
    addKeyboardShortcutHint('projectModal');
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
    
    // Add keyboard shortcut hint to modal footer
    addKeyboardShortcutHint('sprintModal');
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
 * Initialize task-related functionality
 */
function initTaskFunctions() {
    // This function is intentionally left empty
    // Task editing and deletion is now handled by HTMX
}

/**
 * Initialize popovers for task deletion confirmation
 */
function initDeleteTaskPopovers() {
    // This function is intentionally left empty
    // Task deletion confirmation is now handled by HTMX
}

/**
 * Close the task form and clear the container
 * @param {string} sprintId - The ID of the sprint
 */
function closeTaskForm(sprintId) {
    // Clear the task form container
    const taskFormContainer = document.getElementById(`task-form-container-${sprintId}`);
    if (taskFormContainer) {
        taskFormContainer.innerHTML = '';
    }
}

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
    
    // Add keyboard shortcut hint to modal footer
    addKeyboardShortcutHint('taskModal');
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
 * Delete a task via AJAX
 * @param {string} taskId - The ID of the task to delete
 */
function deleteTask(taskId) {
    $.ajax({
        url: `/htmx/tasks/${taskId}/delete`,
        type: 'POST',
        success: function() {
            // Remove the task from the DOM
            $(`#task-${taskId}`).fadeOut('fast', function() {
                $(this).remove();
            });
        },
        error: function(xhr) {
            console.error('Error deleting task:', xhr.responseText);
            alert('Error deleting task. Please try again.');
        }
    });
}

/**
 * Toggle task completion status
 * @param {Event} event - The click event
 * @param {string} taskId - The ID of the task
 * 
 * Note: This function has been replaced by HTMX functionality.
 * Task completion is now handled by the /htmx/toggle-task/{task_id} endpoint
 * which updates the task status and returns the updated HTML fragment.
 */
// Function toggleTaskCompletion has been removed as it's now handled by HTMX

/**
 * Toggle issue completion status
 * @param {Event} event - The click event
 * @param {string} issueId - The ID of the issue
 * 
 * Note: This function has been replaced by HTMX functionality.
 * Issue completion is now handled by the /htmx/toggle-issue/{issue_id} endpoint
 * which updates the issue status and returns the updated HTML fragment.
 */
// Function toggleIssueCompletion has been removed as it's now handled by HTMX

// ===== ISSUE FUNCTIONS =====

/**
 * Close the issue form and clear the container
 * @param {string} sprintId - The ID of the sprint
 */
function closeIssueForm(sprintId) {
    // Clear the issue form container
    const issueFormContainer = document.getElementById(`issue-form-container-${sprintId}`);
    if (issueFormContainer) {
        issueFormContainer.innerHTML = '';
    }
}

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
    
    // Add keyboard shortcut hint to modal footer
    addKeyboardShortcutHint('issueModal');
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
 * Add keyboard shortcut hint to modal footer
 * @param {string} modalId - The ID of the modal to add the hint to
 */
function addKeyboardShortcutHint(modalId) {
    const modalFooter = document.querySelector(`#${modalId} .modal-footer`);
    if (modalFooter && !modalFooter.querySelector('.keyboard-shortcut-hint')) {
        const hint = document.createElement('small');
        hint.className = 'text-muted ms-2 keyboard-shortcut-hint';
        hint.innerHTML = '<i class="fas fa-keyboard me-1"></i>Tip: Use Ctrl+Enter to submit';
        
        // Insert hint before the first button in the footer
        const firstButton = modalFooter.querySelector('button');
        if (firstButton) {
            modalFooter.insertBefore(hint, firstButton);
        } else {
            modalFooter.appendChild(hint);
        }
    }
}
