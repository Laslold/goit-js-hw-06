const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const items =ingredients.map((el) => {
  const newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = el;
  return newElement;
  
});

list.append(...items);