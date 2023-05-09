const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener("input", (event) => {
  outputValue.textContent = event.target.value || "Anonymous";
});
