document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.todo-input');
    const addButton = document.querySelector('.add-btn');
    const todoList = document.querySelector('.todo-list');

    addButton.addEventListener('click', () => {
        if (input.value.trim() === '') return;

        const li = document.createElement('li');
        li.textContent = input.value.trim();

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        input.value = '';
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});