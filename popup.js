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

document.getElementById("increaseSpacing1").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "increaseSpacing", value: 1 });
  });
});

document.getElementById("increaseSpacing2").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "increaseSpacing", value: 2 });
  });
});

document.getElementById("increaseSpacing3").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "increaseSpacing", value: 3 });
  });
});

document.getElementById("increaseSpacing4").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "increaseSpacing", value: 4 });
  });
});

document.getElementById("increaseSpacing5").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "increaseSpacing", value: 5 });
  });
});

document.getElementById("toggleSwitch").addEventListener("change", function () {
  const body = document.body;
  const title = document.getElementById("title");
  const subtitle1 = document.getElementById("subtitle1");
  const subtitle2 = document.getElementById("subtitle2");
  const isDarkMode = this.checked;

  if (isDarkMode) {
    body.style.backgroundColor = "#333";
    body.style.color = "#fff";
    title.style.color = "#fff";
    subtitle1.style.color = "#fff";
    subtitle2.style.color = "#fff";
  } else {
    body.style.backgroundColor = "";
    body.style.color = "";
    title.style.color = "black";
    subtitle1.style.color = "black";
    subtitle2.style.color = "black";
  }

  // Send a message to content script indicating the mode change
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleMode", isDarkMode });
  });
});