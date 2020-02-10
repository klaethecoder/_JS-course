const todos = [{text:"Wash the car", completed: false}, {text:'Take out the trash', completed: false}, {text:'Get Gas', completed: true}, 
{text:'Buy Groceries', completed: false}, 
{text:'Do homework', completed: false}];

console.log(`You have ${todos.length} todos`)
console.log(todos[0], todos[todos.length -2])
todos.unshift(0)

// todos.splice(1,0,'New Item')
todos.splice(2,1);
todos.push("Got'em");
todos.shift();

console.log(todos)

todos.forEach(function(item,index){
console.log(`${index+1}. ${item}.`)
});

// console.time('testing')
// for(let i=1;i<1000000; i++){
    //     console.log(`Counting... ${i}`)
    // }
    // console.timeEnd('testing')
    
    for(let i=0; i<todos.length;i++){
        console.log(`${i+1}. ${todos[i]}.`)

}

// This function allows the user to delete a specific todo. 
function deleteTodo(array, text){
    const index = array.findIndex(function(todo, index){
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    console.log(`Todo: ${todos[index].text}, has been deleted`)
    const done = array.splice(index,1);
}



deleteTodo(todos, 'Get gas')
console.log(todos)