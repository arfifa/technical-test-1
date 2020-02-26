const arrayHasil = []
function kaprekarsConstant(inputNumber) {
  let arrayNumber = Array.from(String(inputNumber), Number)
  let arraySort = arrayNumber.sort()
  let value1 = arraySort.join('')
  let arrayReverse = arraySort.reverse()
  let value2 = arrayReverse.join('')
  let hasil = value2 - value1;
  if (hasil != 6174) {
    arrayHasil.push(hasil)
    kaprekarsConstant(hasil)
  }
  console.log(hasil)
  return (arrayHasil.length + 1)
}

console.log(kaprekarsConstant(3124))
