/* 
  SEEK & DESTROY
  Remove from the array whatever is in the following arguments. Return the leftover values in an array
  ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
  https://youtu.be/tcoiPHktCwQ
*/

function seekAndDestroy(array) {

  const args = Array.from(arguments)

  function filterArray(array) {
    // return true if NOT in array
    return args.indexOf(array) === -1
  }

  return array.filter( filterArray )

}

function seekAndDestroy2(array, ...rest) {

  return array.filter( value => !rest.includes( value ) )

}


// Call Function
const output = seekAndDestroy2([2, 3, 4, 6, 6, 'hello'], 2, 6);

console.log(output);