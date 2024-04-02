const taskList = document.getElementById('taskList');
const taskTitleInput = document.getElementById('taskTitle');
const taskDetailsInput = document.getElementById('taskDetails');
const addTaskButton = document.getElementById('addTask');

let tasks = [];

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskTitle = taskTitleInput.value;
    const taskDetails = taskDetailsInput.value;

    if (taskTitle) {
        const newTask = { 
            id: Date.now(),
            title: taskTitle,
            details: taskDetails,
            isEditing: false
        };
        tasks.push(newTask);
        renderTasks();
        saveTasks();

        taskTitleInput.value = ''; 
        taskDetailsInput.value = ''; 
    }
}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.dataset.id = task.id;

        listItem.innerHTML = `
            <h3>${task.title}</h3>
            ${task.details ? `<p>${task.details}</p>` : ''}
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            <div class="edit-form">
                <input type="text" class="edit-title" value="${task.title}">
                <textarea class="edit-details">${task.details}</textarea>
                <button class="save-btn">Save</button>
            </div>
        `;
        taskList.appendChild(listItem);
    });
}
