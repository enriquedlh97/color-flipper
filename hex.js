// Colors array with the available colors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Targets button to set logic. The getElementById gets the element only by id
const btn = document.getElementById("btn");
// Target the color span which has class of color. The querySelector
// allows to select element based on CSS selector, ie id, class or any other type
const color = document.querySelector(".color");

// set up event listener for click events
btn.addEventListener("click", function () {
  // This is the logic of the callback function
  // Sets up that every click of the button changes background color
  // for the document body

  let hexColor = "#";

  // populates the hexColor variable
  for (let i = 0; i < 6; i++) {
    // Generates random number between 0 and 3 which corresponds to
    // the colors array indices.
    hexColor += hex[getRandomNumber()];
  }

  // Targets the document body and sets the background color
  document.body.style.backgroundColor = hexColor;

  // Targets the span tag which has the tag of color and changes the
  // text element being displayed to include the current background color
  color.textContent = hexColor;
});

// function to get random number beteen 0 and 3
function getRandomNumber() {
  // Genreates random number between 0 and 1 and multiplies by four
  // to lower range beteen 0 and 3
  return Math.floor(Math.random() * hex.length);
}
