let todos = [ ];

function addTodo() {
  let input = document.querySelector(".todo-input");
  if (input.value === "") return;

  todos.push(input.value);
  input.value = "";
  renderTodos();
}
function renderTodos() {
  let list = document.querySelector(".todo-list");
  let items = "";

  for (let i = 0; i < todos.length; i++) {
    items += `
      <li>
        ${todos[i]}
        <button onclick="editTodo(${i})">Edit</button>
        <button onclick="deleteTodo(${i})">Delete</button>
      </li>
    `;
  }

  list.innerHTML = items;
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function editTodo(index) {
  let newValue = prompt("Edit todo", todos[index]);
  if (newValue !== null && newValue !== "") {
    todos[index] = newValue;
    renderTodos();
  }
}