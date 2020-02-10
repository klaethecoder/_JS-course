// Multiple Arguments and default arguments. 

let sumNum = function(a=0,b=0,c=0){
    return a+b+c
}

console.log(sumNum(1,9))

let scoreText = function(name = 'User',score=0){
    return `Name: ${name} - Score: ${score}`
}

scoreText('Klaethecoder',2000)

let getTip = function(total, tipPercent = .2){
    return `A ${tipPercent *100}% tip on a $${total.toFixed(2)} bill is $${(total * tipPercent).toFixed(2)}`
}

const arr = [[100,.1],[20,.2],[30,.15]]

// ES5 way to do take an multi-dimentional array and put it into a function with multiple arguments needed. 

// arr.forEach(function(elements){
// console.log(getTip(...elements))
// // console.log(elements)
// });


// ES6 way to do take an multi-dimentional array and put it into a function with multiple arguments needed. 
arr.map(el => console.log(getTip(...el)));

// console.log(getTip(100,.1),
// getTip(20,.2),
// getTip(30,.15))

