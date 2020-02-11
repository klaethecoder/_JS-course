const account = {
    name: 'Ryan Richard',
    expenses:[],
    income: [],
    addExpense: function(des, amount){
        this.expenses.push({des, amount})
    },
    getAccountSummary: function(){
        let e = 0;
        let p = 0;
        this.expenses.forEach(function(exp){
            e += exp.amount
        })
        this.income.forEach(function(pay){
            p += pay.amount
        })
        return `${this.name} has a balance of $${p-e}. $${p} in Income and $${e} in expenses.`
    },
    addIncome: function(des, amount){
        this.income.push({des,amount})
    }
}

// Expense -> Description, amount
// addExpense -> Description, amount
// getAccountSummary - total all expenses ( Name has $1250 in expenses)
// add Income array to account
// addIncome Method -> description, amount
// Tweak getAccountSUmmary

// Name has a balance of $10. $amount in income and $expenses in expenses. 

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addExpense('Burger', 5)
account.addExpense('Traeger Grill', 800)
account.addIncome('Job', 1988)
console.log(account.getAccountSummary())

const expDes = []
account.expenses.forEach(function(expense){
    expDes.push(expense.des)
})
console.log(account.expenses.map(e=> e.des))

console.log(`He spent it on: ${expDes.join(', ')}.`)