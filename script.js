// Retrieve todo from local storage or intialize an empty array
// Json stands for JavaScript Object Notation and it's basically the way of format Js  that's easily read
// parse Converts a JavaScript Object Notation (JSON) string into an object.
let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const addButton = document.querySelector('.btn');
const deleteButton = document.getElementById('deleteButton');


// Initialize our project

document.addEventListener("DOMContentLoaded", function(){
    addButton.addEventListener('click', addTask);
    todoInput.addEventListener('keydown', function(event){
        if(event.key  == 'Enter'){
            event.preventDefault() // to evoid the page to get reload the the user touch Enter
            addTask();
        }
    });
    deleteButton.addEventListener('click', deleteAllTasks);
    displayTasks();
})

function addTask(){
    //some logic here
    const newTask  = todoInput.value.trim()
    if (newTask !== ""){
        todo.push({
            text: newTask, disabled: false, 
        });
        saveToLocalStorage();
        todoInput.value = ""; // Clear the input field after adding the task
        displayTasks();
    }

}

function deleteAllTasks(){
    
}

function displayTasks(){
    todoList.innerHTML = ""; // Clear the list before displaying tasks
    todo.forEach((item, index) => {
        const p = document.createElement('p');
        p.innerHTML = `
                        <div class="todo-container">
                            <input type="checkbox" class="todo-checkbox" id="input-${index}" ${item.disabled ? 'checked' : ''}>
                            <p id="todo-${index}" class="${item.disabled ? 'disabled' : ''}" onclick="editTask(${index})">${item.text}</p>
                        </div>
        `;
        p.querySelector(".todo-checkbox").addEventListener('change', ()=>{
            toggleTask(index);
        });
        todoList.appendChild(p);
    });
}

function saveToLocalStorage(){
    localStorage.setItem("todo", JSON.stringify(todo));
}