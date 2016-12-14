var friends = ["David","foo1", "foo2"];
var foono = 5;


function toSentence(arr,delimiter) {
  if (!arr || arr.length === 0) return "Error, not array or empty array";
  lastname = arr.pop();
  return (arr.length === 0) ? 
    lastname :
    arr.join(delimiter + " ") + " and " + lastname;
}

console.log(toSentence(foono, ",") );