// CHALLENGE SIXTEEN

// Create an array with 5 todos 
// Create a message: 'You have x todos'
// Then print the first and second to last items to the terminal
// Todo: walk the dog

// const todos = ['Brush teeth', 'Wash face', 'Cream skin', 'Get dressed', 'Comb Hair']

// const message = `You have ${todos.length} todos`

// console.log(message)

// const first = `Todo: ${todos[0]}`
// const secondToLast = `Todo: ${todos[todos.length - 2]}`

// console.log(first)
// console.log(secondToLast)

// CHALLENGE SEVENTEEN

// Delete 3rd item 
// Add new item onto the end of array
// Remove first item from the list

// todos.splice(2, 1)
// todos.push('Put makeup on')
// todos.shift()
// console.log(todos)

// CHALLENGE EIGHTEEN

// Use forEach method to print the todos as a numbered list
// For example: 1. Brush Teeth

// todos.forEach(function (item, index) {
//    console.log(`${index + 1}. ${item}`)
// })

// CHALLENGE NINETEEN

// Use for statement to print the todos as per the previous challenge

// for (let i = 0; i < todos.length; i++) {
//    console.log(`${i + 1}. ${todos[i]}`)
// }

// CHALLENGE TWENTY

// convert the array to an array of objects
// it should contain the properties - text and completed
// then create a function to allow us to remove a todo by text value

// Pseudocode: we use findIndex to find the todo searched within the array
// by also making the search case sensitive. Once a match has been established then we 
// use the if statement which tests the condition that if the match is found returning the value
// 1 if true being greater than the -1 value of undefined then remove by array method splice
// starting at matched todo index and removing it by 1

const todos = [{
   text: 'Brush teeth',
   completed: true
}, {
   text: 'Wash face',
   completed: false
}, {
   text: 'Cream skin',
   completed: true
}, {
   text: 'Get dressed',
   completed: false
}, {
   text: 'Comb Hair',
   completed: false
}]

// const deleteTodo = function (todos, todoText) {
//    const index = todos.findIndex(function (todo) {
//       return todo.text.toLowerCase() === todoText.toLowerCase()
//    })
//    if (index > -1) {
//       todos.splice(index, 1)
//    }
// }

// deleteTodo(todos, 'cream skin')
// console.log(todos)


// CHALLENGE TWENTY-ONE

// using filter return the todos that are to be completed

const getThingsToDo = function (todos) {
   const toBeCompleted = todos.filter(function (stillToDo) {
      return stillToDo.completed === false
   })
   return toBeCompleted
}



console.log(getThingsToDo(todos))