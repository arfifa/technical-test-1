function cekString(inputString) {
  const arrayString = inputString.split("")
  const arrayWord = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
  var arrayFilter = []
  let word = ''
  let word2 = ''
  var countLoping1 = 0
  notValid = false
  arrayWord.map(w => {
    word = ''
    let countLoping = 0
    arrayString.map(s => {
      word += s
      word2 += s
      countLoping++
      const findString = arrayFilter.find(fs => fs === word)
      const findWord = arrayWord.find(aw => aw === word)
      if (word === w || findString || findWord) {
        if (!findString) {
          arrayFilter.push(word)
          word = ''
        }
      }
      if ((countLoping === arrayString.length && countLoping1 === 0) || countLoping1 === arrayWord) {
        const findWord2 = arrayWord.find(aw => aw === word2)
        if (!findWord) {
          notValid = true
          if (findWord2) {
            notValid = false
          }
        }
      }
    })
    countLoping1++
  })

  if (notValid) {
    return console.log('<no way>')
  } else {
    return arrayFilter
  }

}


console.log(cekString("programmer"))