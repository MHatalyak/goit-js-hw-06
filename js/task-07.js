const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

document.addEventListener("DOMContentLoaded", () => {
  text.style.fontSize = `${fontSize.value}px`;
});
fontSize.addEventListener("input", () => {
  text.style.fontSize = `${fontSize.value}px`;
});
