/*
ARRAY CHUNKING
Split an array into chunked arrays of a specific length
ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
https://youtu.be/FfchU1FS2IA
*/

function chunkArray1(array, len) {

  const chunkedArray = []
  let index = 0
  
  while ( index < array.length ) {
    chunkedArray.push( array.slice( index, index + len ) )
    index += len
  }

  return chunkedArray

}

function chunkArray2(array, len) {

  const chunkedArray = []

  array.forEach(value => {
    const lastElement = chunkedArray[ chunkedArray.length - 1 ]

    if ( !lastElement || lastElement.length === len ) {
      chunkedArray.push([ value ])
    } else {
      lastElement.push( value )
    }

  });

  return chunkedArray

}

// Call Function
const output = chunkArray2([1, 2, 3, 4, 5, 6, 7], 2);
console.log(output)