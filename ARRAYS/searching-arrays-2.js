// SEARCHING ARRAYS Part 2

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Califonia'
}, {
    title: 'Habits to work on',
    body: 'Exercise'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// findIndex (method) returns index of first element in array when a test condition via a function
// is satsified true or not false

// pseudocode (EXAMPLE 1): using the findIndex to execute a callback function where we search for a match within 
// the notes array of objects. 
// the argument (item) is used with dot notation to access object property value to compare using the 
// triple equals operator to search for a match and return its index which in this example is 3

// pseudocode (EXAMPLE 2): in this example rather than search for a match and returning its index position
// we've used a function with two arguments (notes - the array) and noteTitle which will pass a string
// we want to query using the comparision operator within findIndex method which returns a boolean value.
// If true, then object within the array will return however if false, returns undefined
// we added toLowerCase string method for case insensitivity


// find (method) returns the value of the array NOT the index of element searched if the condition is true
 
// findIndex EXAMPLE 1

// const index = notes.findIndex(function (item, index) {
//   return item.body === 'Get a new seat'
// })

// console.log(index)

// findIndex EXAMPLE 2

// const findNote = function (notes, noteTitle) {
//    const index = notes.findIndex(function (note, index) {
//       return note.title.toLowerCase() === noteTitle.toLowerCase()
//    })
//    return notes[index]
// }

// find EXAMPLE 1

// const findNote = function (notes, noteTitle) {
//    return notes.find(function (note, index) {
//       return note.title.toLowerCase() === noteTitle.toLowerCase()
//    })
// }

// const note = findNote(notes, 'Office modification')
// console.log(note)