/*
ANAGRAM
Return true if anagram and false if not
ex. 'elbow' === 'below'
ex. 'Dormitory' === 'dirty room##'
*/

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2)
}

// helper function
function formatStr(str) {
  return str
    .replace( /[^\w]/g, '' ) // RegEx also takes care of spaces
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}


// Call Function
const output = isAnagram('elbow', 'below');

console.log(output);