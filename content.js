// Copyright 2021 Tamal A. Chowdhury

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// The delay in seconds
const DELAY = 5;

/**
 * The main function to run in the extension
 */
function main() {
  // Target and get all the endscreen items
  let allEndscreenItems = document.querySelectorAll(".ytp-ce-element");

  // Hide them all
  allEndscreenItems.forEach((item) => (item.style.display = "none"));
}

// Running it on interval for video changes
setInterval(function () {
  main();
}, 1000 * DELAY);
