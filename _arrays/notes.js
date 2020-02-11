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

console.log(notes)
console.log(notes.length)
// notes.map(note => console.log(note))

const index = notes.findIndex(function(note, index){
    console.log(note)
    return note.title === 'Note 2'
})

console.log(index)


// const findNotes = function(notes, noteTitle){
//   const index = notes.findIndex(function(note,index){
//   return note.title.toLowerCase() === noteTitle.toLowerCase() 
//   });
const findNote = function(notes, noteTitle){
  const note = notes.find(function(note,index){
     return note.title.toLowerCase() === noteTitle.toLowerCase() 
  });
  console.log(notes[index])
  return notes[index]
}

// console.log(findNotes(notes,'note 3'))
// console.log(findNotes(notes,'NOte 1'))
// console.log(findNotes(notes,'NotE 2'))

let filtered = notes.filter((note, index)=> note.title.includes('Note '));

console.log(filtered)

const findNotes = (notes,query) => {
  return notes.filter((note,index) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch
  })
}

console.log(findNotes(notes,'Note 3'))

function sortNotes(arr){
    arr.sort((a,b)=> {
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else{
            return 0
        }

    })
}

sortNotes(notes)
console.log(notes)