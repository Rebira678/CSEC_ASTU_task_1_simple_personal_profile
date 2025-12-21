const input = document.getElementById("todoInput");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const priority = document.getElementById("priority");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const emptyMessage = document.getElementById("emptyMessage");
const themeIcon = document.getElementById("themeIcon");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

/* Theme */
document.getElementById("manTheme").onclick = () => {
  document.body.classList.remove("girl-theme");
  themeIcon.textContent = "👨";
};

document.getElementById("girlTheme").onclick = () => {
  document.body.classList.add("girl-theme");
  themeIcon.textContent = "👩";
};

/* Enable button */
input.addEventListener("input", () => {
  addBtn.disabled = input.value.trim() === "";
});

/* Render */
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    if (todo.completed) li.classList.add("completed");
    if (todo.priority === "high") li.classList.add("high");

    li.innerHTML = `
      <strong>${todo.text}</strong>
      <p>🕒 ${todo.start} → ${todo.end}</p>
      <p>📝 Created: ${todo.created}</p>
      <button onclick="finishTodo(${index})">Finish</button>
      <button onclick="editTodo(${index})">Edit</button>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;

    todoList.appendChild(li);
  });

  totalCount.textContent = todos.length;
  completedCount.textContent = todos.filter(t => t.completed).length;
  emptyMessage.style.display = todos.length ? "none" : "block";

  localStorage.setItem("todos", JSON.stringify(todos));
}

/* Add */
addBtn.onclick = () => {
  if (!input.value || !startTime.value || !endTime.value) {
    alert("Fill all fields!");
    return;
  }

  todos.push({
    text: input.value,
    start: startTime.value,
    end: endTime.value,
    priority: priority.value,
    created: new Date().toLocaleString(),
    completed: false
  });

  input.value = "";
  startTime.value = "";
  endTime.value = "";
  addBtn.disabled = true;

  renderTodos();
};

/* Actions */
function finishTodo(i) {
  todos[i].completed = true;
  renderTodos();
}

function editTodo(i) {
  const newText = prompt("Edit todo:", todos[i].text);
  if (newText) {
    todos[i].text = newText;
    renderTodos();
  }
}

function deleteTodo(i) {
  todos.splice(i, 1);
  renderTodos();
}

renderTodos();
