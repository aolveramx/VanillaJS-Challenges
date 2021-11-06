/* 
  MISSING LETTERS
  Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
  ex.
  missingLetters("abce") == "d"
  missingLetters("abcdefghjklmno") == "i"
  missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
  https://youtu.be/tcoiPHktCwQ
*/

function missingLetters(str) {

  let compare = str.charCodeAt(0)
  let missing

  str
    .split('')
    .map( (character, index) => {
      if ( str.charCodeAt(index) == compare ) {
        ++compare
      } else {
        missing = String.fromCharCode( compare )
      }
    })

  return missing
  
}


// Call Function
const output = missingLetters("abce");

console.log(output);