// ARRAYS 
// array values can be any data types
// there are a number of methods we can perform or mutate values in programming

// Filter (method) - filters through an existing array then returns a new array with elements

// filter EXAMPLE 1

// pseudocode: using the filter method as a callback function passing in note and index as
// arguments


const filteredNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('office')
    const isBodyMatch = note.body.toLowerCase().includes('office')
    return isTitleMatch || isBodyMatch

})

console.log(filteredNotes)