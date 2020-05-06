// LOOPING 

const notes = ['Note 1', 'Note 2', 'Note 3']

// Looping - forEach()

// forEach (method) - is a callback method which for every value within the array the function is carried out
// the function is never called directly instead the api call from forEach is called.

// The example below loops over the array using item and index as arguments from the callback function
// to display items within the array and their index positioning via console log

notes.forEach(function(item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes)

// Looping - for()

// for (statement)  - is a loop containing 3 expressions within the parentheses
// these expressions as used to execute code block, it gives more flexibility than
// the forEach method

// first you would need to declare a counter variable known as the initialiser 
// the counter variable is locally scoped


// then the second expression is a condition evaluating loop iteration which if true, the condition will execute the code
// however if false then the condition will stop executing code

// then third expression can either increment or decrement the counter upon the condition evaluating as true


// pseudocode: using a for loop over the notes array, the initialiser is set to 0
// the condition to be tested if the count is less than the length of the array which is 3
// then runs a true value and increments the counter by 1 until the condition gets to 3 
// which will stop execution of the code that prints each element of the array
// by accessing the element by index stored in count variable
// in the for statement the variable count becomes the new index


for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = 0; count < notes.length; count++) {
   console.log(notes[count])
}
