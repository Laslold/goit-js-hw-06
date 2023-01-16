const changeBtn = document.querySelector(".change-color");
const spanNumber = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeBtn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  spanNumber.textContent = color;
  document.body.style.backgroundColor = color;
});

