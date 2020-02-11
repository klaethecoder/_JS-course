const notes = [{
    title:'Note 1',
    body: 'This is a note that is for the demonstration'}, {
    title:'Note 2',
    body: 'Parting is such sweet sorrow'}, {
    title: 'Note 3',
    body: 'Wakanda Forever'},
    {
      title: 'Nope',
      body: 'Lets get it started'}];

console.log('This is from an external doc.')

// let p = document.querySelector('p')
// p.remove()

let ps = document.querySelectorAll('p');
ps.forEach(function(el){
    console.log(el)
    el.remove()
});

let input = document.querySelector("#input")
input.addEventListener('press')

function createNewNote(){
let newP = document.createElement('p')
let input = document.querySelector("#input")

newP.textContent = input.value
input.value = ""
document.body.appendChild(newP)

}

let createButton = document.querySelector('#create')

createButton.addEventListener('click', createNewNote)