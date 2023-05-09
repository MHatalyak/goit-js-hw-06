const login = document.querySelector(".login-form");

login.addEventListener("submit", checkSubmit);

function checkSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("You should fill all fields");

    return;
  }

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);
  login.reset();
}
