/*
Given an array of numbers, check if any 
of the numbers are the character codes 
for lower case vowels (a, e, i, o, u).

If they are, change the array 
value to a string of that vowel.
Return the resulting array.
*/


// Solution

function isVow(a) {
  for (let i=0, l=a.length; i<l; i++) {

  let char = String.fromCharCode(a[i])
  if ('aeiou'.indexOf(char) !== -1)
  a[i] = char;
  }
  return a;
}

// or

const isVow = a => {
  let map = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u',
  }
  return a.map( num => map[num] ? map[num] : num);
}

// or

function isVow(a){
  return a.map(i => {
  if (String.fromCharCode(i) === 'a')
  return 'a';
  else if (String.fromCharCode(i) === 'e')
  return 'e';
  else if (String.fromCharCode(i) === 'i')
  return 'i';
  else if (String.fromCharCode(i) === 'o')
  return 'o';
  else if (String.fromCharCode(i) === 'u')
  return 'u';
  else 
  return i;
  })
}