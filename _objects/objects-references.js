let myAccount = {
    name: 'Ryan Richard',
    expenses: 0,
    income: 0
}

let expenseUpdate = function(account, amount){
    account.expenses = account.expenses + amount;
    console.log(account)
}
// Using the Spread Operator creates a separate copy of an object without making a references connection that will change everything. 
let otherAccount = {...myAccount};
otherAccount.income = 1000

// 
let test = myAccount



expenseUpdate(myAccount,50000)

console.log(myAccount, otherAccount)

function addIncome(account, current){
    account.income += current;
}

function resetAccount(account){
account.income = 0;
account.expenses = 0;
}

function getAccountSummary(account){
console.log(`The account Balance for ${account.name} is $${account.income - account.expenses}. $${account.income} in income and $${account.expenses} in expenses.`);
}

addIncome(myAccount, 250000);
getAccountSummary(myAccount);
resetAccount(myAccount);

console.log(myAccount);