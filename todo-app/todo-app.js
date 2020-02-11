const todos = [{text:"Wash the car", completed: true}, {text:'Take out the trash', completed: false}, {text:'Get Gas', completed: true}, 
{text:'Buy Groceries', completed: false}, 
{text:'Do homework', completed: true}];

// let ps = document.querySelectorAll('p')
// ps.forEach(function(el){
//     el.textContent.includes('the') ? el.remove() : el
// });

// You have x todos left
// add a p for each todo that needs to be done.

// Creates an Element that allows the user to choose what element they want to create as the argument.
function createEl(el){
    let p = document.createElement(el)
    return p
}

// Allows uer to add todos to the screen that haven't yet been completed. 
function addTodo(arr){
    let filtered = arr.filter(todo => todo.completed === false)
    filtered.forEach(function(todo){
        let p = createEl('p');
        p.textContent = todo.text
        document.body.appendChild(p)
        console.log('An element was successfully created and appended')
    })
}

// Puts the todos on the screen that haven't been created yet.
addTodo(todos)