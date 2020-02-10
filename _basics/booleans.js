let temp = 88;

let isFreezing = temp <= 32 //? 'It is Freezing outside': 'Nah Bruh, this ain\'t that cold.'

// console.log(isFreezing)

//Challenge area

// if you are a child or a senior then you get a discount

let name = 'Ryan'
let age = 32;


// Below is the ternary oporator for getting the statments
// let isChild = age >= 7 ? `${name} is not a Chilld` : `${name} is a Chilld`;
// let isSenior = age <= 65 ? `${name} is not a Senior` : `${name} is a Senior`;

let isDiscount = age <= 7 || age >= 65 ? 'Discount will be applied' : 'No Discount for you!!!'



// console.log(isChild);
// console.log(isSenior);

console.log(isDiscount)

if(temp<32){
    console.log('It is freezing outside')
} else if(temp >=110){
    console.log('Stay inside, it is way too hot out.')
} else{
    console.log('You can go out side without fear')
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

//This is a ternary oporator that allows someone to know what kind of menu items to patrons. 
console.log(isGuestOneVegan && isGuestTwoVegan ? 'Only offer up vegan dishes' : isGuestTwoVegan || isGuestOneVegan ? 'Make sure to offer up some vegan options.' : 'Offer up anything on the menu.' )
