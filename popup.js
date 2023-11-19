// Event listener for the "Default Font" button
document.getElementById("defaultFont").addEventListener("click", function () {
  // Query the active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Send a message to the content script with the action "defaultFont"
    chrome.tabs.sendMessage(tabs[0].id, { action: "defaultFont" });
  });
});

// Event listener for the "Change Font - Arial" button
document.getElementById("changeFontArial").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Send a message to the content script with the action "changeFont" and the font value
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Arial, sans-serif" });
  });
});

// Event listener for the "Change Font - Calibri" button
document.getElementById("changeFontCalibri").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Calibri, sans-serif" });
  });
});

// Event listener for the "Change Font - Roboto" button
document.getElementById("changeFontRoboto").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Roboto, sans-serif" });
  });
});

// Event listener for the "Change Font - Verdana" button
document.getElementById("changeFontVerdana").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Verdana, sans-serif" });
  });
});

// Event listeners for buttons that increase letter spacing (1-5x)
for (let i = 1; i <= 5; i++) {
  document.getElementById("increaseSpacing" + i).addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Send a message to the content script with the action "increaseSpacing" and the value
      chrome.tabs.sendMessage(tabs[0].id, { action: "increaseSpacing", value: i });
    });
  });
}

// Event listener for the Dark/Light mode toggle switch
document.getElementById("toggleSwitch").addEventListener("change", function () {
  const body = document.body;
  const title = document.getElementById("title");
  const subtitle1 = document.getElementById("subtitle1");
  const subtitle2 = document.getElementById("subtitle2");
  const isDarkMode = this.checked;

  // Adjust styles based on the selected mode
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

  // Send a message to the content script indicating the mode change
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleMode", isDarkMode });
  });
});
