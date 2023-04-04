console.log("Hello from src/index.js!");

// let body = document.querySelector("body");
// body.style.backgroundColor = "#e4e4e4";

const list = document.querySelector("ul#list");
const form = document.querySelector(".form");
const input = document.querySelector(".productInput");
const button = document.getElementById("submit");
const hide = document.querySelector(".hide");

let milkTag = "<li data-peso='1 litro'>1l - Leite</li>";
list.insertAdjacentHTML('beforeend', milkTag);

form.addEventListener('submit', (event) => {
    // console.log(event);
    event.preventDefault();
    const productName = input.value;
    if (productName != "") {
        list.insertAdjacentHTML('beforeend', `<li>${productName}</li>`);
    }
    input.value = "";
})

hide.addEventListener('click', (event) => {
    event.preventDefault();
    
    list.classList.toggle("active");
    console.log(list.classList)
    
})
const items = document.querySelectorAll("ul#list > li");

items.forEach((item) => {
    console.log("Kg: " + item.dataset.peso);
    // console.dir(item)
})

document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", (event) => {
      event.currentTarget.classList.toggle("img-circle");
    });
  });
