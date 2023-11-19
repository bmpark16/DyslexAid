document.getElementById("defaultSize").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "defaultSize" });
    });
  });
  
  document.getElementById("changeFont12").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "changeFontSize", value: 16 });
    });
  });
  
  document.getElementById("changeFont14").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "changeFontSize", value: 19});
    });
  });
  
  document.getElementById("changeFont16").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "changeFontSize", value: 22 });
    });
  });
  

  