const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInput);
function onInput(event) {
  const inputLength = Number(input.dataset.length);
  const inputText = event.target.value;

  if (inputText.length === inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
