// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.`(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) { 
  var nodeList = []; //HTML collection, list of nodes, not an array
   //this would be an HTML collection example
  
  element = element || document.body;

  var classList = element.classList;
  if (classList && classList.contains(className)) {
    nodeList.push(element);
  }

  var children = element.childNodes;
  for (var i = 0; i < children.length; i++) {
    var childElements = getElementsByClassName(className, children[i]);
    nodeList = nodeList.concat(childElements);
  }
  return nodeList; //return an array (technically should be an array-like object)
};

//use document.body, element.childNodes, and element.classList

/* Test Cases

var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

*/