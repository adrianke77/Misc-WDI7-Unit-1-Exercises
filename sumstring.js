numString = "1235234-124112416484"
numArray = numString.split("")

for (i = 0; i < numArray.length; i++) {
  if (numArray[i] === "-") {
    var negNumArr = numArray.splice(i, 2)
    var negNum = negNumArr.join("")
    numArray.splice(i, 0, (negNum))
    console.log(numArray)
  }
}

console.log(numArray.reduce(function(a, b) {
  return Number(a) + Number(b)
}))