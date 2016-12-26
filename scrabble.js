var fs = require("fs")
var textData = fs.readFileSync("./enable1.txt", "utf-8")
dictArray = textData.split("\r\n")

const scrabbleRawScoring = {
  1: "eaiuonrtlsu",
  2: "dg",
  3: "bcmp",
  4: "fhvwy",
  5: "k",
  8: "jx",
  10: "qz"
}

var scrabbleScore = {}

function populateScrabbleScore() {
  for (score in scrabbleRawScoring) {
    for (var i = 0; i < scrabbleRawScoring[score].length; i++) {
      var keyletter = scrabbleRawScoring[score].charAt(i)
      scrabbleScore[keyletter] = score
    }
  }
}

function scrabble(inputRack, targetWord) {
  for (var i = 0; i < targetWord.length; i++) {
    letter = targetWord.charAt(i)
    if (inputRack.indexOf(letter) === -1) {
      if (inputRack.indexOf("?") === -1)
        return false
    }
    if (inputRack.indexOf(letter) === -1)
      letterIdx = inputRack.indexOf("?")
    else
      letterIdx = inputRack.indexOf(letter)
    inputRack = inputRack.slice(0, letterIdx) + inputRack.slice(letterIdx + 1, inputRack.length)
  }
  return true
}

function longestWordSearch(inputRack, dictionary) {
  longestWord = ""
  for (var i = 0; i < dictionary.length; i++) {
    if (dictionary[i].length > longestWord.length && scrabble(inputRack, dictionary[i]) === true) {
      longestWord = dictionary[i]
    }
  }
  return longestWord
}

function highestScoringWordSearch(inputRack, dictionary) {
  var bestScoringWord = ""
  var bestScore = 0
  for (var i = 0; i < dictionary.length; i++) {
    currentWordScore = getScore(dictionary[i])
    if (currentWordScore > bestScore && scrabble(inputRack, dictionary[i]) === true) {
      bestScoringWord = dictionary[i]
      bestScore = currentWordScore
    }
  }
  return bestScoringWord
}

function getScore(word) {
  totalScore = 0
  for (var i = 0; i < word.length; i++) {
    totalScore += parseInt(scrabbleScore[word.charAt(i)])
  }
  return totalScore
}

populateScrabbleScore() // makes one for one key for scoring into scrabbleScore
console.log(longestWordSearch("vaakojeaietg????????", dictArray))
console.log(highestScoringWordSearch("vaakojeaietg????????", dictArray))
console.log(getScore("dermatoglyphics"))
console.log(getScore("razzamatazzes"))