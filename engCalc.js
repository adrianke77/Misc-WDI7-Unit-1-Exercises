const WordNumRelations = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
  "ten": 10,
  "eleven": 11,
  "twelve": 12,
  "thirteen": 13,
  "fourteen": 14,
  "fifteen": 15,
  "sixteen": 16,
  "seventeen": 17,
  "eighteen": 18,
  "nineteen": 19,
  "twenty": 20,
  "plus": "+",
  "minus": "-",
  "times": "*",
  "dividedby": "/"
}

function cl(thing) {
  console.log(thing)
}



function engCalc(string) {

  var inputArr = string.toLowerCase().split(" ")
  var convertedArr = []
  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === "divided" && inputArr[i + 1] === "by") {
      inputArr[i] = "dividedby"
      inputArr.splice[i + 1]
    } //combines instances of "divided by" into "dividedby"
    for (key in WordNumRelations) {
      if (key === inputArr[i]) {
        convertedArr.push(WordNumRelations[key])
        break
      }
    }
  }
  var startLength = convertedArr.length
  for (var i = 0; i < startLength; i++) {
    // does multiply and divide operations first
    if (convertedArr[i] === "*") {
      subTotal = convertedArr[i - 1] * convertedArr[i + 1]
      convertedArr.splice(i - 1, 3)
      convertedArr.splice(i - 1, 0, subTotal)
    }
  }
  for (var i = 0; i < startLength; i++)
    if (convertedArr[i] === "/") {
      subTotal = convertedArr[i - 1] / convertedArr[i + 1]
      convertedArr.splice(i - 1, 3)
      convertedArr.splice(i - 1, 0, subTotal)
    }

  for (var i = 0; i < startLength; i++) {
    if (convertedArr[i] === "-") {
      subTotal = convertedArr[i - 1] - convertedArr[i + 1]
      convertedArr.splice(i - 1, 3)
      convertedArr.splice(i - 1, 0, subTotal)
    }
  }
  for (var i = 0; i < startLength; i++) {
    if (convertedArr[i] === "+") {
      subTotal = convertedArr[i - 1] + convertedArr[i + 1]
      convertedArr.splice(i - 1, 3)
      convertedArr.splice(i - 1, 0, subTotal)
    }
  }
  return convertedArr[0]
}

testString = "Two plus eight times nineteen minus twelve plus ten divided by twenty"
cl(engCalc(testString))