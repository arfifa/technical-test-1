function indexArray(numberInput) {
  const number = [2, 7, 11, 15]
  const arrayOutput = []
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
      if (number[i] + number[j] === numberInput) {
        arrayOutput.push(i, j)
      }
    }
    if (arrayOutput.length === 2) {
      break;
    }
  }
  if (arrayOutput.length === 0) {
    console.log("<No Way>")
  } else {
    return arrayOutput
  }
}

console.log(indexArray(22))