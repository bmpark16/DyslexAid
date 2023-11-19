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

document.getElementById("toggleSwitch").addEventListener("change", function () {
  const body = document.body;
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const isDarkMode = this.checked;

  if (isDarkMode) {
    body.style.backgroundColor = "#333";
    body.style.color = "#fff";
    title.style.color = "#fff"; // Set title font color to white in dark mode
    subtitle.style.color = "#fff"; // Set subtitle font color to white in dark mode
  } else {
    body.style.backgroundColor = "";
    body.style.color = "";
    title.style.color = "black"; // Set title font color to black in light mode
    subtitle.style.color = "black"; // Set subtitle font color to black in light mode
  }
});