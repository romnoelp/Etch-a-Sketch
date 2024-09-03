const gridContainer = document.querySelector(".grid-container");
let gridCount = 32;

// Rendering the grid container
const gridRenderer = (newGridCount) => {
  for (let index = 1; index <= newGridCount; index++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    gridContainer.appendChild(div);
  }
};

gridRenderer(gridCount);

// Logic for changing the number of grids
const changeValueButton = document.querySelector(".header .change-grid");

changeValueButton.addEventListener("click", () => {
  newGridCount = prompt("Give me the new value for the grid");
  if (newGridCount <= 64) {
    gridRenderer(newGridCount);
  } else {
    alert("I'm sorry, can't put more than 64 grids inside the grid.");
    gridRenderer(gridCount);
  }
});
