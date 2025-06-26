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
    addButton.addEventListener('click', addTast);
    todoInput.addEventListener('keydown', function(event){
        if(event.key  == 'Enter'){
            event.preventDefault() // to evoid the page to get reload the the user touch Enter
            addTask();
        }
    });
    deleteButton.addEventListener('click', deleteAllTasks());
    displayTasks()
})

function addTasks(){
    //some logic here
    const newTask  = todoInput.value.trim(){
        if (newTask !== ""){
            todo.push{
                text: newTask, desabled: false;
            }
        }
    }

}

function displayTasks(){

}