/*
REVERSE AN INTEGER
Return an integer in reverse
ex. reverseInt(521) === 125
https://youtu.be/M2bJBuaOeOQ
*/

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('')
  return parseInt(revString) * Math.sign(int) // for negative values
}

// Call Function
const output = reverseInt(-521);

console.log(output);