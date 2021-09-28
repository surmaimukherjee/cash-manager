const billAmountInput = document.querySelector("#bill-amount");
const cashReceivedInput = document.querySelector("#cash-received");
const btnNext = document.querySelector("#btn-next");
const btnCheck = document.querySelector("#btn-check");
const btnReset = document.querySelector("#btn-reset");
const errorMessage = document.querySelector("#message");
const cashForm = document.querySelector(".cash-form");
const btnAction = document.querySelector(".btn-action");
const table = document.querySelector("#output-table");
const noOfNotes = document.querySelectorAll(".no-of-notes");

let billAmount = 0;
let cashReceived = 0;

const availableNotes = [2000,500,100,20,10,5,1];

billAmountInput.addEventListener("change",()=>{
     billAmount = parseInt(billAmountInput.value);
})
cashReceivedInput.addEventListener("change",()=>{
    cashReceived = parseInt(cashReceivedInput.value);
})

btnNext.addEventListener("click",()=>{
    hideErrorMessage();
    if(billAmount > 0)
    {   
        cashForm.style.display = "block";
        btnAction.style.display = "block";
        btnNext.style.display = "none";
    }
    else{
        showErrorMessage("Bill Amount must be a positive Number");
    }
})

btnCheck.addEventListener("click",()=>{
    hideErrorMessage();
    if(cashReceived >= billAmount && billAmount > 0)
    {
        const amountToBeReturned = cashReceived - billAmount;
        calculate(amountToBeReturned);
        table.style.display = "block";
    }
    else{
        showErrorMessage("Cash Received must not be blank and needs to be more than the bill amount");
    }
})

btnReset.addEventListener("click",()=>{
    btnNext.style.display = "inline-block";
    cashForm.style.display = "none";
    btnAction.style.display = "none";
    errorMessage.style.display = "none";
    billAmountInput.value="";
    billAmount= 0;
    cashReceivedInput.value ="";
    table.style.display = "none";

})


function calculate(amountLeft)
{
    for (let i=0; i < availableNotes.length;i++)
    {
        const numberOfNotes = Math.trunc(amountLeft / availableNotes[i]);
        amountLeft %= availableNotes[i];
        
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideErrorMessage()
{
    errorMessage.style.display = "none";
}


 function showErrorMessage(message)
 {
    errorMessage.innerText = message;
    errorMessage.style.display = "block";
    table.style.display = "none";
 }