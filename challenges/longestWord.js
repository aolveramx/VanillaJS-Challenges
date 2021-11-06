/*
LONGEST WORD
Return the longest word of a string
ex. longestWord('Hi there, my name is Brad') === 'there,'
https://youtu.be/FfchU1FS2IA
*/

// SOLUTION 1 - Return a single longest word
function longestWord1(str) {

  // strips out any punctuation
  const wordArray = str.toLowerCase().match(/[a-z0-9]+/g)

  // sort by length
  const sorted = wordArray.sort( (lengthBefore, currentIteration) => currentIteration.length - lengthBefore.length )

  return sorted[0]
  
}

// SOLUTION 2 - Return an array and include multiple words if they have the same length
function longestWord2(str) {

  const wordArray = str.toLowerCase().match(/[a-z0-9]+/g)

  const sorted = wordArray.sort( (lengthBefore, currentIteration) => currentIteration.length - lengthBefore.length )
  
  // if multiple words, put into array
  const longestWordArray = sorted.filter( word =>  word.length === sorted[0].length )

  return longestWordArray

}

// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
function longestWord3(str) {

  const wordArray = str.toLowerCase().match(/[a-z0-9]+/g)

  const sorted = wordArray.sort( (lengthBefore, currentIteration) => currentIteration.length - lengthBefore.length )

  const longestWordArray = sorted.filter( word =>  word.length === sorted[0].length )

  // check if more than one array value
  if ( longestWordArray.length === 1 ) {
    return longestWordArray[0] // word
  } else {
    return longestWordArray // string
  }
}


// Call Function
const output = longestWord3('Hello there, my name is Ari');

console.log(output);