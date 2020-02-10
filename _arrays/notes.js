const notes = [{
    title:'Note 1',
    body: 'Testing 1'}, {
    title:'Note 2',
    body: 'Testing 2'}, {
    title: 'Note 3',
    body: 'Testing 3'}];

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
const findNotes = function(notes, noteTitle){
  const note = notes.find(function(note,index){
     return note.title.toLowerCase() === noteTitle.toLowerCase() 
  });
  console.log(notes[index])
  return notes[index]
}

// console.log(findNotes(notes,'note 3'))
// console.log(findNotes(notes,'NOte 1'))
// console.log(findNotes(notes,'NotE 2'))

