let num = 32.941

console.log(num.toFixed(2))

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.floor(Math.random()*10))

let min = 10;
let max = 20;

let randnum = Math.floor(Math.random() * (max - min +1)) +min

console.log(randnum)


// Challenge Area

function guesser(num){
    let rand = Math.floor(Math.random() * 5)
    return num == rand
}

let arr = [];
for(let i =0; i<2000; i++){
    let rand = Math.ceil(Math.random() * 5)
    arr.push(rand)
}


// Checking my work to make sure that 5 is coming up. 
console.log(arr.includes(5))
console.log(arr.filter(num => num === 5))
console.log(new Set(arr))

// console.log(guesser(5))