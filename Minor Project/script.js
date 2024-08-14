function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    
    if (taskValue) {
        const taskList = document.getElementById('taskList');
        
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = taskValue;
        li.appendChild(span);
        
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = taskValue;
        li.appendChild(editInput);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-btn';
        completeButton.onclick = function () {
            span.classList.toggle('completed');
        };
        li.appendChild(completeButton);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-btn';
        editButton.onclick = function () {
            if (editInput.style.display === 'none') {
                editInput.style.display = 'inline-block';
                editButton.textContent = 'Save';
            } else {
                span.textContent = editInput.value;
                editInput.style.display = 'none';
                editButton.textContent = 'Edit';
            }
        };
        li.appendChild(editButton);
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };
        li.appendChild(removeButton);
        
        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input
    } else {
        alert('Please enter a task.');
    }
}