chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'changeFontSize') {
      changeFontSize(request.value);
    }
  });
  
  function changeFontSize(fontSize) {
    // Select specific elements using querySelectorAll
    var elementsToChange = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a');
  
    // Loop through each selected element and change the font size
    for (var i = 0; i < elementsToChange.length; i++) {
      elementsToChange[i].style.fontSize = fontSize;
    }
  }
