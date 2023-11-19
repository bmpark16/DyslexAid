document.addEventListener('DOMContentLoaded', function () {
  var fontSelector = document.getElementById('fontSelector');

  fontSelector.addEventListener('change', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var selectedFont = fontSelector.value;
      console.log('Selected Font:', selectedFont); // Check in the console
      chrome.tabs.sendMessage(tabs[0].id, { action: 'changeFont', font: selectedFont });
    });
  });

  // Set the default font to "sans" on extension popup open
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'changeFont', font: fontSelector.value });
  });
});
