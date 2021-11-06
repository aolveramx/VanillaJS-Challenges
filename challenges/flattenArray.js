/*
FLATTEN ARRAY
Take an array of arrays and flatten to a single array
ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
https://youtu.be/FfchU1FS2IA
*/

function flattenArray1(arrays) {

  return arrays.reduce( ( startingPoint, eachIteration ) =>  {
    return startingPoint.concat( eachIteration )
  })

}

function flattenArray2(arrays) {

  return [].concat.apply( [], ( arrays ) ) // apply unravels one level of the array

}

function flattenArray3(arrays) {

  return [].concat( ...arrays )

}

// Call Function
const output = flattenArray3([[1, 2], [3, 4], [5, 6]]);

console.log(output);