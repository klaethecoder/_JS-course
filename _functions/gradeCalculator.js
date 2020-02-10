// I am supposed to be making a Grade Calculator function. 

let studentScore = 10;
const totalPossibleScore = 10;

const answer = function(score, tps){
    const grade = score/tps >=.9 ? 'A' : score/tps >=.8 ? 'B' : score/tps >=.7 ? 'C' : score/tps >=.6 ? 'D':'F';
    return `You got a ${grade} (${(score/tps * tps)}%)`
}

// console.log(answer(studentScore,totalPossibleScore))

// My Challenge: Create a random generated set of 5 Students grades and one tps and then run the function for the different grades. 
const tps = 100;
const arr = [];

for(let i=0; i<5; i++){
    arr.push(Math.round(Math.random()*tps));
    
}
// console.log(arr)
arr.map(num => console.log(answer(num,tps)));