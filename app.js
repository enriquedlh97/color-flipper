// Contains app logic

// Colors array with the available colors
const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

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

  // Generates random number between 0 and 3 which corresponds to
  // the colors array indices. Later used to select a color form the array
  const randomNumber = getRandomNumber();

  // Targets the document body and sets the background color
  // to the selected color from the colors array
  document.body.style.backgroundColor = colors[randomNumber];

  // Targets the span tag which has the tag of color and changes the
  // text element being displayed to include the current background color
  console.log(color.textContent);
  color.textContent = colors[randomNumber];
  console.log(color.textContent);
});

// function to get random number beteen 0 and 3
function getRandomNumber() {
  // Genreates random number between 0 and 1 and multiplies by four
  // to lower range beteen 0 and 3
  return Math.floor(Math.random() * colors.length);
}
