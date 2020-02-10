let getUser = function(){
    console.log('Welcome User')
}

let square = function (num){
    let result = num**2;
    return result;
}

let value = square(3);
let value2 = square(10);
console.log(value,value2)

//Challenge Area

let convertFtoC = function(temp){
    return (temp - 32) * 5/9;
}

let temp = convertFtoC(32);
let temp2 = convertFtoC(68);
console.log(temp, temp2)