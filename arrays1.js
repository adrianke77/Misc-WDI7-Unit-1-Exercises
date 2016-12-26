function dashEvenNumbers(numberString) {
  var output = ""
  for (var i = 0; i < numberString.length; i++) {
    if (numberString.charAt(i) % 2 === 0 && numberString.charAt(i + 1) && numberString.charAt(i + 1) % 2 === 0) {
      output += numberString.charAt(i) + "-"
    } else
      output += numberString.charAt(i)
  }
  return output
}

console.log(dashEvenNumbers("025486"))

function findMostFreq(array) {
  var charTrack = {}
  array.forEach(function(ele, idx, arr) {
    if (!charTrack[ele]) charTrack[ele] = 0
    charTrack[ele] = charTrack[ele] + 1
  })
  var mostFreqChar = ""
  var mostFreq = 0
  for (char in charTrack) {
    if (charTrack[char] > mostFreq) {
      mostFreqChar = char
      mostFreq = charTrack[char]
    }
  }
  return mostFreqChar + " (" + mostFreq + " times)"
  if (!charTrack[ele]) charTrack[ele] = 0
}

console.log(findMostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))

function removeDuplicates(array) {
  var output = array.filter(function(ele, idx, arr) {
    var prevItem = ""
    if (arr[idx - 1]) prevItem = arr[idx - 1] // if undefined make empty string
    return ele.toString().toLowerCase() !== prevItem.toString().toLowerCase()
  })
  return output
}

console.log(removeDuplicates([1, 'a', 'A', 'b', 2, 2]))

function union(array1, array2) {
  var noDupesArray2 = array2.filter(function(ele) {
    return array1.indexOf(ele) === -1
  })
  return array1.concat(noDupesArray2)
}

function merge_array(array1, array2) {
  return union(array1, array2)
}

console.log(union([1, 2, 3], [100, 2, 1, 10]))
console.log(merge_array([1, 2, 3], [2, 30, 1]))