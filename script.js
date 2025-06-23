function submitLogin() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Store the username in localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(username);
  localStorage.setItem("users", JSON.stringify(users));

  // Redirect to records page
  window.location.href = "records.html";
}

function displayUserRecords() {
  const list = document.getElementById("recordList");
  const users = JSON.parse(localStorage.getItem("users")) || [];

  list.innerHTML = "";
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${user}`;
    list.appendChild(li);
  });
}
