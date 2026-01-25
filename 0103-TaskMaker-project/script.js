// --- STATE MANAGEMENT ---
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentColumn = 'todo'; // Tracks which column launched the modal

// --- DOM ELEMENTS ---
const columns = document.querySelectorAll('.task-list');
const modal = document.getElementById('modal');
const titleInput = document.getElementById('task-title');
const priorityInput = document.getElementById('task-priority');

// --- INITIALIZE ---
function init() {
    renderTasks();
    updateCounts();
}

// --- RENDER FUNCTION ---
function renderTasks() {
    // Clear all columns first
    columns.forEach(col => col.innerHTML = '');

    tasks.forEach(task => {
        createTaskElement(task);
    });

    setupDragAndDrop();
}

function createTaskElement(task) {
    const card = document.createElement('div');
    card.classList.add('task-card');
    card.setAttribute('draggable', 'true');
    card.setAttribute('data-id', task.id);
    
    // Tag Color Logic
    const tagClass = `tag-${task.priority}`; // tag-high, tag-medium, etc.
    
    card.innerHTML = `
        <span class="tag ${tagClass}">${task.priority}</span>
        <p>${task.title}</p>
        <i class="fas fa-trash delete-task" onclick="deleteTask(${task.id})"></i>
    `;

    // Append to correct column
    document.getElementById(`list-${task.status}`).appendChild(card);
}

// --- DRAG AND DROP LOGIC (The Core Feature) ---
function setupDragAndDrop() {
    const draggables = document.querySelectorAll('.task-card');
    const containers = document.querySelectorAll('.task-list');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
            updateTaskStatus(draggable); // Save new position
        });
    });

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault(); // Allow dropping
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggable = document.querySelector('.dragging');
            
            if (afterElement == null) {
                container.appendChild(draggable);
            } else {
                container.insertBefore(draggable, afterElement);
            }
        });
    });
}

// Helper: Determine mouse position relative to other cards
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.task-card:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// --- DATA MANAGEMENT ---
function updateTaskStatus(card) {
    const newStatus = card.parentElement.id.replace('list-', '');
    const id = parseInt(card.dataset.id);
    
    const taskIndex = tasks.findIndex(t => t.id === id);
    if(taskIndex > -1) {
        tasks[taskIndex].status = newStatus;
        saveToLocal();
        updateCounts();
    }
}

function saveTask() {
    const title = titleInput.value;
    const priority = priorityInput.value;
    
    if(!title) return;

    const newTask = {
        id: Date.now(),
        title: title,
        priority: priority,
        status: currentColumn
    };

    tasks.push(newTask);
    saveToLocal();
    renderTasks();
    closeModal();
    updateCounts();
}

function deleteTask(id) {
    if(confirm('Delete this task?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveToLocal();
        renderTasks();
        updateCounts();
    }
}

function clearBoard() {
    if(confirm('Clear all tasks?')) {
        tasks = [];
        saveToLocal();
        renderTasks();
        updateCounts();
    }
}

function updateCounts() {
    document.getElementById('count-todo').innerText = tasks.filter(t => t.status === 'todo').length;
    document.getElementById('count-progress').innerText = tasks.filter(t => t.status === 'progress').length;
    document.getElementById('count-done').innerText = tasks.filter(t => t.status === 'done').length;
}

function saveToLocal() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// --- MODAL HANDLING ---
function openModal(columnId) {
    currentColumn = columnId;
    modal.classList.add('active');
    titleInput.focus();
}

function closeModal() {
    modal.classList.remove('active');
    titleInput.value = '';
}

// Init
init();