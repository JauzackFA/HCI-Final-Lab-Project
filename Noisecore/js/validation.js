document.getElementById("membershipForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const terms = document.getElementById("terms").checked;

  if (name.trim() === "") {
    alert("Name cannot be empty");
    return;
  }
  if (email.trim() === "") {
    alert("Email cannot be empty");
    return;
  }
  if (!terms) {
    alert("You must agree to the terms and conditions");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }

  alert("Membership successfully created!");
});
