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
    // Gets a filtered list of todos from the array
    let filtered = arr.filter(todo => todo.completed === false)


    // Creates a new element and appends it before all the hard coded todos on the page
    let h4 = createEl('h4')
    h4.textContent = `You have ${filtered.length} todos left`
    document.body.querySelector('h1').append(h4)

    // Takes filtered list and creates elements and appends them to the page after hard coded todos
    filtered.forEach(function(todo){
        let p = createEl('p');
        p.textContent = todo.text
        document.body.appendChild(p)

        // Logs a message letting the dev know that it was successfully created and appended
        console.log('An element was successfully created and appended')
    })
    function enter(){
        let data = input.value
        let p = createEl('p');
        p.textContent = data
        document.body.appendChild(p)
        input.value = ""
    }

    let button = document.querySelector("#add")
    let input = document.querySelector("#text")
    button.addEventListener('click', enter)
    input.addEventListener("keypress",function(e){
        console.log(e.keyCode)
        e.keyCode == 13 ? enter() : e
    })
}

// Puts the todos on the screen that haven't been created yet.
addTodo(todos)