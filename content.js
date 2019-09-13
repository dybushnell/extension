var elements = document.getElementsByTagName("span");
var elements2 = document.getElementsByTagName("a");
var elements3 = document.getElementsByTagName("p");

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text.replace(
        /(\d+)/gi,
        `${Math.floor(Math.random() * 10)}`
      );

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}

for (var i = 0; i < elements2.length; i++) {
  var element = elements2[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text.replace(
        /(\d+)/gi,
        `${Math.floor(Math.random() * 10)}`
      );

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}

for (var i = 0; i < elements3.length; i++) {
  var element = elements3[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text.replace(
        /(\d+)/gi,
        `${Math.floor(Math.random() * 10)}`
      );

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
