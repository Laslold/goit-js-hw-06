const mainUl = document.querySelector('#categories')
console.log('Number of categories:', mainUl.children.length)
const item =mainUl.querySelectorAll(".item")
item.forEach(el=>{
    console.log('Category:', el.querySelector('h2').textContent);
    console.log('Elements:',el.querySelector('ul').children.length);
})
