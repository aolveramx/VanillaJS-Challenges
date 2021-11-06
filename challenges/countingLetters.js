/*
Given a string, count the number of occurrences of all of its letters.
input: 'aabbcc', output: { a: 2, b: 2, c: 2 }
https://www.florin-pop.com/blog/2019/08/jcc-counting-letters/
*/

const countLetters = (word) => {

  // 1. Create object which will store the occurrences
  const count = {}

  // 2. Loop over the letters of the word
  for ( let i = 0; i < word.length; i++ ) {
    const letter = word[i];

    // 3. If the property isn't in the object, it means that the letter is a new one
    // and we'll create this property and assign it the value 1
    if ( !count[ letter ] ) {
      count[ letter ] = 1
    } else { //4. It means that the property is already there and we just increment it by 1
      count[ letter ]++
    }
    
  }

  return count
  
}

const countLetters1 = (word) => {
  const count = {}

  word.split('').forEach(letter => {
    count[ letter ] = count[ letter ] ? ++count[ letter ] : 1
  });

  return count
}

// Call Function
const output = countLetters1('Lorenzaa');
console.log(output)