let ps = document.querySelectorAll('p')
ps.forEach(function(el){
    el.textContent.includes('the') ? el.remove() : el
});

