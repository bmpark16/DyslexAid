// content.js

function changeFontFamily(font) {
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
    element.style.fontFamily = font;
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "defaultFont") {
    changeFontFamily("");
  } else if (request.action === "changeFont") {
    changeFontFamily(request.font);
  }
  else if (request.action === "increaseSpacing") {
    increaseLetterSpacing(request.value);
  }
});

function increaseLetterSpacing(value) {
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
    element.style.letterSpacing = value + "px";
  });
}