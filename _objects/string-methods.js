let name = '  Ryan Richard  '

// console.log(name.length >8)

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.trim())

// Challenge Area

function isValidPassword(password){
   return password.length >8 && !password.includes('password')
}

console.log(isValidPassword('password123'), isValidPassword('Idahomie123'))