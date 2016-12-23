function scrabble(inputString, targetWord) {
  for (i = 0; i < targetWord.length; i++) {
    letter = targetWord.charAt(i)
    console.log(letter)
    if (inputString.indexOf(letter) === -1) {
      if (inputString.indexOf("?") === -1)
        return false
    }
    if (inputString.indexOf(letter) === -1)
      letterIdx = inputString.indexOf("?")
    else
      letterIdx = inputString.indexOf(letter)
    inputString = inputString.slice(0, letterIdx) + inputString.slice(letterIdx + 1, inputString.length)
  }
  return true
}

console.log(scrabble("qwertyuiop??", "tieopqwrrr"))

//done up to option 1