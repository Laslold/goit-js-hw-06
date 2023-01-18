const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;
function TextContValue() {
  valueEl.textContent = counterValue;
}

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  TextContValue();
});
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  TextContValue();
});
