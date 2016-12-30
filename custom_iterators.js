testArr = [ 1, 2, 3, 4, 5 ];

function testCallback( element, index, array ) {
  console.log( "Element,index,array are ", element,index,array )
  return element * 2
}

function _forEach( array, callback ) {
  for ( var i = 0; i < array.length; i++ ) {
    callback( array[ i ], i, array )
  }
}

// _forEach( testArr, testCallback )

function _map( array, callback ) {
  var outArray = []
  for ( var i = 0; i < array.length; i++ ) {
    outArray.push( callback( array[ i ], i, array ) )
  }
  return outArray
}
// console.log( "_map output is:", _map( testArr, testCallback ) )

function _reduce( array, callback, initial ) {
  if ( typeof initial !== "undefined" ) {
    var accumulator = initial;
    var start = 0;
  } else {
    var accumulator = callback( array[ 0 ], 0, array );
    var start = 1;
  }
  for ( i = start; i < array.length; i++ ) {
    accumulator += callback( array[ i ], i, array );
  }

  return accumulator;
}
// console.log( _reduce( testArr, testCallback ) ) // should be (1+2+3+4+5) x 2 = 30
// console.log( _reduce( testArr, testCallback, 10 ) ) // should be (1+2+3+4+5) x 2 + 10 = 40

function _filter( array, callback ) {
  var outArray = []
  for ( var i = 0; i < array.length; i++ ) {
    if ( callback( array[ i ], i, array ) )
      outArray.push( array[ i ] )
  }
  return outArray;
}

function testFilterCallback( element, index, array ) {
  return element < 3
}

// console.log( _filter( testArr, testFilterCallback ) ) // should return [1,2] as the condition is must be <3

function _every( array, callback ) {
  for ( var i = 0; i < array.length; i++ ) {
    if (!callback(array[i],i,array)) return false
  }
  return true
}

// console.log(_every(testArr,testCallback)) // returns true as all positive numbers so all truthy

// console.log(_every(testArr,testFilterCallback)) // returns false as three out of five elements cause a return false from the callback