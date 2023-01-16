const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  outputEl.textContent = value.length > 0 ? value : "Anonymous";
});
