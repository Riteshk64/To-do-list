const todoList = JSON.parse(localStorage.getItem('TODO-LIST')) || [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject,index) =>{
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div> 
        <button class="delete-button js-delete-button">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton,index) => {
        deleteButton.addEventListener('click',() => {
            todoList.splice(index,1);
            renderTodoList();
            localStorage.setItem('TODO-LIST',JSON.stringify(todoList));
        })
    })
}

document.querySelector('.js-add-button').addEventListener('click', () => addTodo());

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-todo-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
    localStorage.setItem('TODO-LIST',JSON.stringify(todoList));
}