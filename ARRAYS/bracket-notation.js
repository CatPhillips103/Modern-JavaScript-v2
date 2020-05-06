// Bracket notation

const notes = ['Note 1', 'Note 2', 'Note 3']

// If we want to access a specific value within the array, we use bracket notation and index positioning
// index always starts at 0 
// If there is no value present within the array then it returns a undefined value

console.log(notes[0]) // 'Note 1'
console.log(notes[3]) // undefined

// the following example starts at the end of the list to access value, keep in mind that 
// the minus number is not an index position 
console.log(notes[notes.length - 1]) // Note 3
