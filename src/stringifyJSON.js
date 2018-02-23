// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  var arrayForArray = [];
  var arrayForObject = [];

  if (obj === null) {
  	return 'null';
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
  	return '' + obj;
  } else if (typeof obj === 'function' || typeof obj === 'undefined' || typeof obj === 'symbol' || typeof obj === 'null') {
  	return 'null';
  } else if (Array.isArray(obj)) {
      obj.forEach(function(value) {
        arrayForArray.push(stringifyJSON(value));
      });
      return '[' + arrayForArray.join(',') + ']';
  } else if (typeof obj === 'object') {
  	  Object.keys(obj).forEach(function(key) {
  	  if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined' || typeof obj[key] === 'symbol') {
  	    return '{}';
  	  } else {
  	    var keyString = '"' + key + '":';
  	    var objProperty = stringifyJSON(obj[key]);
  	  
  	    arrayForObject.push(keyString + objProperty);
  	  }
  	  });
  	 return '{' + arrayForObject + '}';
  	}
};


/*
Test cases checked!!

DONE JSON.stringify({});                  // '{}'
DONE JSON.stringify(true);                // 'true'
DONE JSON.stringify('foo');               // '"foo"'
DONE JSON.stringify([1, 'false', false]); // '[1,"false",false]'
DONE JSON.stringify({ x: 5 });            // '{"x":5}'
DONE JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
DONE JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }); 
// '{"x":[10,null,null,null]}' 

DONE // Non-enumerable properties:
JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) ); // '{"y":"y"}'
//

NEEDS WORK JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)) 
// '"2006-01-02T15:04:05.000Z"'

NEEDS WORK JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

DONE // Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// '{}'


*/
