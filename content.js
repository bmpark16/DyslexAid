// content.js

// Function to change the font family of selected text elements
function changeFontFamily(font) {
  // Select specific text elements (paragraphs, headings, spans, divs with class myTextClass)
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
    // Set the font family to the specified value
    element.style.fontFamily = font;
  });
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Check the action specified in the message
  if (request.action === "defaultFont") {
    // If the action is to set the default font, call the changeFontFamily function with an empty font value
    changeFontFamily("");
  } else if (request.action === "changeFont") {
    // If the action is to change the font, call the changeFontFamily function with the specified font
    changeFontFamily(request.font);
  } else if (request.action === "increaseSpacing") {
    // If the action is to increase letter spacing, call the increaseLetterSpacing function with the specified value
    increaseLetterSpacing(request.value);
  }
});

// Function to increase letter spacing of selected text elements
function increaseLetterSpacing(value) {
  // Select specific text elements (paragraphs, headings, spans, divs with class myTextClass)
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
    // Set the letter spacing to the specified value
    element.style.letterSpacing = value + "px";
  });
}
