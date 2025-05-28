// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const messageDisplay = document.getElementById("formMessage");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    messageDisplay.textContent = "Please fill in all fields.";
    messageDisplay.style.color = "red";
  } else if (!emailRegex.test(email)) {
    messageDisplay.textContent = "Invalid email format.";
    messageDisplay.style.color = "red";
  } else {
    messageDisplay.textContent = "Message sent successfully!";
    messageDisplay.style.color = "limegreen";
    this.reset();
  }
});

// To-Do List logic
function addTask() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();
  const list = document.getElementById("todoList");

  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  list.appendChild(li);

  input.value = "";
}
