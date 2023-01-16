const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {};
  for (let index = 0; index < event.target.elements.length; index++) {
    const elem = event.target.elements[index];
    if (elem.nodeName === "INPUT") {
      if (!elem.value) {
        alert(`Запонить поле :"${elem.name}" `);
        return;
      }
      userData[elem.name] = elem.value;
    }
  }
  formEl.reset();
  
  console.log(userData);
  return userData;
});


