document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-task';
        removeButton.addEventListener('click', removeTask);

        taskItem.appendChild(removeButton);
        taskItem.addEventListener('click', toggleComplete);

        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    function removeTask(event) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }

    function toggleComplete(event) {
        if (event.target.tagName !== 'BUTTON') {
            event.target.classList.toggle('completed');
        }
    }
});
