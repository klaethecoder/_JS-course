// Variable shadowing and scope

let name = 'Ryan'
if(true){
    let name = 'Fred'
    if(true){
        let name = 'Mike'
        console.log(name)
    }
    console.log(name)
}

if(true){
let name = 'Tom'
console.log(name)
}

console.log(name)
