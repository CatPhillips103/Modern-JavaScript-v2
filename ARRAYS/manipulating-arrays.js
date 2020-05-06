// MANIPULATING ARRAYS

const notes = ['Note 1', 'Note 2', 'Note 3']

// push (method) - adds a value to the end of the array

// pop (method) - removes last value of the array

// shift (method) - removes first value of the array

// unshift (method) - adds a value to the beginning of the array

// splice (method) - removes and/or replace values from an array by using a starting position then removing the number
// of items after alternatively in replacing you can use bracket index notation to reassign a value

notes.push('my new note')

notes.pop()

notes.shift()

notes.unshift('my first note')

notes.splice(1, 1, 'this is the new second item')

notes[2] = 'This is now the new note 3'
