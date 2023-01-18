const inputEl = document.querySelector("#validation-input");
const dataNumer = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", (event) => {
  if (event.target.value.length === dataNumer) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
