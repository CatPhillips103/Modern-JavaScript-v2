// ARRAYS 
// array values can be any data types
// there are a number of methods we can perform or mutate values in programming

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


// Filter (method) - filters through an existing array then returns a new array with elements

// filter EXAMPLE 1

// pseudocode: using the filter method as a callback function passing in note and index as arguments
// 2 variables created to access both title and body object properties along with their values 
// to test the boolean condition whether the array includes said string value (case insensitive)
// if one of the variables returns true then the note will log. 
// In this example, the function returns both: [
//   { title: 'My next trip', body: 'I would like to go to Califonia' },
//   { title: 'Office modification', body: 'Get a new seat' }
// ]


const filteredNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('ne')
    const isBodyMatch = note.body.toLowerCase().includes('ne')
    return isTitleMatch || isBodyMatch

})

console.log(filteredNotes)