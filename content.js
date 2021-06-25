// The delay in seconds
const DELAY = 5;

/**
 * The main function to run in the extension
 */
function main() {
  // Target and get all the endscreen items
  let allEndscreenItems = document.querySelectorAll('.ytp-ce-element');

  // Hide them all
  allEndscreenItems.forEach((item) => (item.style.display = 'none'));
}

// Running it on interval for video changes
setInterval(function () {
  main();
}, 1000 * DELAY);
