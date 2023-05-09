const counter = document.querySelector("#counter");
const counterOfValues = document.querySelector("#value");
let currentValue = 0;
const incrementAction = counter.querySelector('[data-action="increment"]');
const decrementAction = counter.querySelector('[data-action="decrement"]');

incrementAction.addEventListener("click", () => {
  currentValue += 1;
  counterOfValues.textContent = currentValue;
});

decrementAction.addEventListener("click", () => {
  currentValue -= 1;
  counterOfValues.textContent = currentValue;
});
