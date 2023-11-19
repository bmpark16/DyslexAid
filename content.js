chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'changeFont') {
    console.log('Changing Font to:', request.font); // Debugging: log the font change

    if (request.font === 'Default') {
      // Remove any custom font and revert to the original font
      document.body.style.fontFamily = '';
    } else {
      // Change the font family for other fonts
      document.body.style.fontFamily = request.font;
    }
  }
});

// Apply the default font when the page loads
document.body.style.fontFamily = '';
