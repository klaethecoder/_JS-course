// challenege Area

function tempConvert(temp){
let kelvin = (temp + 459.67)*5/9;
let celcius = (temp - 32) * 5/9;
return obj = {kelvin, celcius, farenheit: temp}
}

console.log(tempConvert(74));