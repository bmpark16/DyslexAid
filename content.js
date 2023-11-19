chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'changeFont') {
    console.log('Changing Font to:', request.font); // Check in the console
    document.body.style.fontFamily = request.font;
  }
});

// Apply the default font when the page loads
document.body.style.fontFamily = 'sans';
