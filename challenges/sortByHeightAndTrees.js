/* 
  SORT BY HEIGHT
  Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
  ex.
  Tip: -1 are the trees
  a = [-1, 150, 190, 170, -1, -1, 160, 180]
  sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
  https://youtu.be/tcoiPHktCwQ
*/

function sortByHeight(array) {

  const trees = []
  const heights = []

  array.forEach( ( value, place ) => value === -1
    ?
    trees.push( place )
    :
    heights.push( value )
  )

  const sortArray = heights.sort( ( lowest, highest ) => lowest - highest)

  trees.forEach( ( value, index ) => sortArray.splice( trees[index], 0, -1 ))

  return sortArray

}


// Call Function
const output = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

console.log(output);