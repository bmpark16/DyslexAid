chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'changeFontSize') {
      changeFontSize(request.value);
    }
  });
  
  function changeFontSize(fontSize) {
    // Change the font size of the #subtitle element
    var subtitle = document.getElementById('subtitle');
    if (subtitle) {
      subtitle.style.fontSize = fontSize;
    }
  
    // Change the font size of all buttons
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.fontSize = fontSize;
    }
  }
