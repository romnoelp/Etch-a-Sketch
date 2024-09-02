const gridContainer = document.querySelector(".grid-container");
let newValue = 0;
let row1 = ["1", "2", "3", "4"];
let row2 = ["5", "6", "7", "8"];
let row3 = ["9", "10", "11", "12"];
let row4 = ["13", "14", "15", "16"];

row1.forEach(function (element) {
  const div = document.createElement("div");
  div.classList.add("grid");
  div.innerHTML = element;
  gridContainer.appendChild(div);
});

row2.forEach(function (element) {
  const div = document.createElement("div");
  div.classList.add("grid");
  div.innerHTML = element;
  gridContainer.appendChild(div);
});

row3.forEach(function (element) {
  const div = document.createElement("div");
  div.classList.add("grid");
  div.innerHTML = element;
  gridContainer.appendChild(div);
});

row4.forEach(function (element) {
  const div = document.createElement("div");
  div.classList.add("grid");
  div.innerHTML = element;
  gridContainer.appendChild(div);
});

const changeValueButton = document.querySelector(".header .change-grid");
console.log(changeValueButton);

changeValueButton.addEventListener("click", function (element) {
  newValue = prompt("Give me the new value for the grid");
  console.log(newValue);
});
