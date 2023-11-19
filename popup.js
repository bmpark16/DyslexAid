document.getElementById("defaultFont").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "defaultFont" });
  });
});

document.getElementById("changeFontArial").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Arial, sans-serif" });
  });
});

document.getElementById("changeFontCalibri").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Calibri, sans-serif" });
  });
});

document.getElementById("changeFontRoboto").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Roboto, sans-serif" });
  });
});

document.getElementById("changeFontVerdana").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Verdana, sans-serif" });
  });
});
