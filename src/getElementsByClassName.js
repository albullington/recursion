// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var body = document.body; //returns the body of the current document
    var classNameArray = [];

    var addToClassNameArray = function(element) {
      var classList = element.classList; //returns a live DOMTokenList (space separated token) collection of the class attributes of the element
      if (classList !== undefined && classList.contains(className) === true) {
        classNameArray.push(className);
	  }
    };

    var checkNodesWithRecursiveLoop = function(element) { //check first children, then body
      var children = element.childNodes;
      if (children === undefined) {
        getElementsByClassName()
      }

      
      //for (var i = 0; i < children.length; i++) {
        
      //}
    }

    

    //test nodes with a recursive function
    //why? is document.body a node? why doesn't this test everything?
	
	//Returns an array-like object of all child elements which have all of the given class names. 
    //need a base case, since recursion
    //then, need a way to call getElementsByClassName(className) again

	 
    //why would I need this? need to specify that I'm searching within the body

	 //returns live collection of the child nodes of given element, where first node is assigned index 0;
	//do I need to check to see if element HAS childnodes? mdn

    return classNameArray;

    //can either call getElements on an element or the body, which will search everything

};

//document.body, element.childNodes, and element.classList

/*
 $('body').addClass('targetClassName');
htmlStrings.forEach(function(htmlString) {
  var $rootElement = $(htmlString);
  $('body').append($rootElement);

  var result = getElementsByClassName('targetClassName');
  var expectedNodeList = document.getElementsByClassName('targetClassName');
  var expectedArray = Array.prototype.slice.apply(expectedNodeList);
  var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
  expect(equality).to.equal(true);

  $rootElement.remove();
});
$('body').removeClass('targetClassName');
*/