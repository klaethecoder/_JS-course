console.log('This is from an external doc.')

// let p = document.querySelector('p')
// p.remove()

let ps = document.querySelectorAll('p');
ps.forEach(function(el){
    console.log(el)
    el.remove()
});