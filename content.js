chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "defaultFont") {
    document.body.style.fontFamily = "";
  } else if (request.action === "changeFont") {
    document.body.style.fontFamily = request.font;
  }
});
