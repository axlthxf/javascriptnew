// name
// accno
// ifsc
// branch
// balance
// transaction history
const Bank =
{
    name: "",
    Age: 0,
    Accno: "",
    branch: "",
    balance: 0,
    transactionhistory: [],
    username:null,
    password:null,
}

const getItem = localStorage.getItem("bankdetails")
if(getItem!=null)
{
    document.getElementById("User_btn").classList.add("hidden")
}

// localStorage.setItem('bankdetails', JSON.stringify(Bank));
// const getItem = localStorage.getItem("bankdetails")
// const objGet = JSON.parse(getItem)

// console.log(objGet)



function Deposit() {
    var amount = prompt("Enter the amount you want to insert:")
    amount = Number(amount)
    Bank[0].balance = Bank[0].balance + amount
    const transaction = {
        date: new Date(),
        amount: amount,
        type: "deposited",

    }

    Bank[0].transactionhistory.push(transaction)

    console.log("deposited:", amount);
    console.log("Balance:", Bank[0].balance);
    console.log(transaction);
    localStorage.setItem('bankdetails', JSON.stringify(Bank));

}

function Withdraw() {
    var cash = prompt("Enter the amount you want to withdraw:")
    cash = Number(cash)
    if (cash > Bank[0].balance) {
        return alert("not enough balance")
    }
    console.log("amount withdrawn");
    Bank[0].balance = Bank[0].balance - cash
    const transaction = {
        date: new Date(),
        amount: cash,
        type: "withdrawal",
    }
    Bank[0].transactionhistory.push(transaction)

    console.log("withdrawn:", cash);
    console.log("Balance:", Bank[0].balance);
    console.log(transaction);
    localStorage.setItem('bankdetails', JSON.stringify(Bank));


}
function Balance() {
    console.log("Balance:", Bank[0].balance);

}
function Details() {
    console.log(Bank);

}
function createUser() {
    var username = prompt("Enter the username:")
    Bank.username=username
    var password = prompt("Enter passsword:")
    Bank.password=password
    var name = prompt("Enter name:")
    Bank.name=name
    var Accno = prompt("Enter accountno:")
    Bank.Accno=Accno
    var IFSC = prompt("Enter IFSC code:")
    Bank.IFSC=IFSC
    var Age = prompt("Enter the age:")
    Bank.Age=Age
    var branch = prompt("Enter the branch:")
    Bank.branch=branch
    localStorage.setItem("bankdetails",JSON.stringify(Bank))
    document.getElementById("User_btn").classList.add("hidden")
    document.getElementById("User_btn").style.color="white"
   


}