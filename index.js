// Function to create the grid
function createGrid(size) {
  const container = document.getElementById("container");
  container.innerHTML = ""; // Clear the existing grid

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = getRandomColor();
      });
      container.appendChild(square);
    }
  }

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

// Function to get a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  const newSize = prompt("Enter the number of squares per side (1-100):");
  if (newSize !== null) {
    const size = parseInt(newSize);
    if (!isNaN(size) && size >= 1 && size <= 100) {
      createGrid(size);
    } else {
      alert("Please enter a valid number between 1 and 100.");
    }
  }
});

// Initial grid creation
createGrid(16);
