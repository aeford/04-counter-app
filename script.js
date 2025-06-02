// Use let because the count will change
let count = 0;

// Use const because these elements do not change
const countDisplay = document.getElementById("count"); // const: we don't reassign countDisplay
const increaseBtn = document.getElementById("increase"); // const: we don't reassign increaseBtn
const decreaseBtn = document.getElementById("decrease"); // const: we don't reassign decreaseBtn
const resetBtn = document.getElementById("reset"); // const: we don't reassign resetBtn

increaseBtn.addEventListener("click", function() {
  count = count + 1; // Increase the count by 1
  countDisplay.textContent = count; // Update the display
});

decreaseBtn.addEventListener("click", function() {
  count = count - 1; // Decrease the count by 1
  countDisplay.textContent = count; // Update the display
});

resetBtn.addEventListener("click", function() {
  count = 0; // Set the count to zero
  countDisplay.textContent = count; // Update the display
});
