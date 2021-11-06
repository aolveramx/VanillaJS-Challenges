/* 
  ADD ALL NUMBERS
  Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
  ex. addAll(2,5,6,7) === 20
  https://youtu.be/tcoiPHktCwQ
*/

// Solution - ES5 arguments & foor loop
function addAll() {

  var args = Array.prototype.slice.call( arguments )
  var total = 0

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total

}

// Solution - ES6 ...rest & forEach
function addAll2(...numbers) { // it's not necesaty to call it rest

  let total = 0

  numbers.forEach( number => total += number )

  return total

}

// Solution - ES6 ...rest & reduce
function addAll3(...numbers) { // it's not necesaty to call it rest

  return numbers.reduce( ( accumulator, currentValue ) => accumulator + currentValue )

}


// Call Function
const output = addAll3(2,5,6,7);

console.log(output);