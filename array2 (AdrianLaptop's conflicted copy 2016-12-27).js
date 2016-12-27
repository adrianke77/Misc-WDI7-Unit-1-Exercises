function removeArrayElement(array, number) {
  var inArray = array.slice()
  inArray.splice(array.indexOf(number), 1)
  return inArray
}

console.log(removeArrayElement([2, 5, 9, 6], 5))

function nthlargest(array, nth) {
  var sorted = array.sort(function(a, b) {
    return a - b
  })
  return sorted[sorted.length - nth]
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4))

function randomItem(array) {
  var randomSelect = Math.floor(Math.random() * array.length)
  return (array[randomSelect])
}

console.log(randomItem(['hello', 'hi', 'bye']))

function arrayRange(start, steps, step) {
  var outArray = []
  for (var i = start; i < (start + steps*step)  ; i += step) {
    outArray.push(i)
  }
  return outArray
}

console.log( arrayRange(1, 4, 1))
console.log(arrayRange(-6, 5, 2))