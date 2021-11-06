/*
CAPITALIZE LETTERS
Return a string with the first letter of every word capitalized
ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
https://youtu.be/M2bJBuaOeOQ
https://flexiple.com/javascript-capitalize-first-letter/
*/

function capitalizeLetters(str) {

  const array = str.split(' ')
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
  }

  return array.join(' ')

}

function capitalizeLetters1(str) {

  const strArray = str.toLowerCase().split(' ')
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1)
  }

  return strArray.join(' ')

}

function capitalizeLetters2(str) {

  return str
    .toLowerCase()
    .split(' ')
    .map( word => word[0].toUpperCase() + word.substr(1) )
    .join(' ')

}

function capitalizeLetters3(str) {

  return str.replace( /\b[a-z]/gi, char => char.toUpperCase() )

}

// Call Function
const output = capitalizeLetters3('i love javascript');

console.log(output);