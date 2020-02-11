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

let newP = document.createElement('p')
newP.textContent = "This is a new paragraph element from JS."
document.body.appendChild(newP)