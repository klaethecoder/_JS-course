const notes = [{
    title:'Note 1: I got this',
    body: 'This is a note that is for the demonstration'}, {
    title:'Note 2: Actually, IDK if I do',
    body: 'Parting is such sweet sorrow'}, {
    title: 'Note 3: What just happened?',
    body: 'Wakanda Forever'},
    {
      title: 'Nope',
      body: 'Lets get it started'}];

      const filters = {
          searchText: ''
      }

console.log('This is from an external doc.')

// let p = document.querySelector('p')
// p.remove()

let ps = document.querySelectorAll('p');
ps.forEach(function(el){
    console.log(el)
    el.remove()
});

let input = document.querySelector("#input")

// Adds an Event Listener to the input so that if a user presses enter instead of clicking the button than it will create the note. 
input.addEventListener('keypress',function(e){
    e.code == 'Enter' ? createNewNote() : e
})

function createNewNote(){
let newP = document.createElement('p')
let input = document.querySelector("#input")

newP.textContent = input.value
input.value = ""
document.querySelector("#notes").appendChild(newP)

}

let createButton = document.querySelector('#create')
let deleteButton = document.querySelector('#delete')

createButton.addEventListener('click', createNewNote)
deleteButton.addEventListener('click', function(){
    document.querySelectorAll('p').forEach(function(note){
        note.remove();
    })
})

const renderNotes = function(notes, filters){
    let filteredNotes = notes.filter(function(note){ return note.title.toLowerCase().includes(filters.searchText.toLowerCase())})
    console.log(filteredNotes)
}
renderNotes(notes,filters)

input.addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})