// Selecting necessary DOM elements
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Event listener for adding a task
addBtn.addEventListener("click", addTask);

// Function to add a task
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        // Create new list item
        const listItem = document.createElement("li");

        // Create span to hold the task text
        const task = document.createElement("span");
        task.innerText = taskText;

        // Create the delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-btn");
        
        // Add event listener for deleting the task
        deleteBtn.addEventListener("click", () => listItem.remove());

        // Add event listener for marking task as completed
        task.addEventListener("click", () => task.classList.toggle("completed"));

        // Append task and delete button to list item
        listItem.appendChild(task);
        listItem.appendChild(deleteBtn);

        // Append list item to the todo list
        todoList.appendChild(listItem);

        // Clear input
        todoInput.value = "";
    }
}
