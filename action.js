let total = 0;
let selectedItems=[];
let totaldiv = document.getElementById("total");
let box1 = document.querySelectorAll(".boxes1 .box");
let box2 = document.querySelectorAll(".boxes2 .box");
let box3 = document.querySelectorAll(".boxes3 .box");
box1.forEach(item => item.addEventListener("click", ()=> {
  box1.forEach(item => item.classList.remove("selected")),
  item.className = "box selected",
  selectedItems = [...document.querySelectorAll(".selected")].map(item => parseInt(item.innerHTML)),
  total = selectedItems.reduce((acc,curr) => acc + curr),
  totaldiv.innerHTML = total
}))
box2.forEach(item => item.addEventListener("click", ()=> {
  box2.forEach(item => item.classList.remove("selected")),
  item.className = "box selected",
  selectedItems = [...document.querySelectorAll(".selected")].map(item => parseInt(item.innerHTML)),
  total = selectedItems.reduce((acc,curr) => acc + curr),
   console.log(selectedItems);
  totaldiv.innerHTML = total
}))
box3.forEach(item => item.addEventListener("click", ()=> {
  box3.forEach(item => item.classList.remove("selected")),
  item.className = "box selected",
  selectedItems = [...document.querySelectorAll(".selected")].map(item => parseInt(item.innerHTML))
  console.log(selectedItems)
  total = selectedItems.reduce((acc,curr) => acc + curr)
  totaldiv.innerHTML = total
}))
