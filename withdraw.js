/*
1. add event with the withdraw button
2. get the withdraw amount form th withdraw inpu field 
2.5 also make sure 
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2:
    const widthrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = widthrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
    console.log(newWithdrawAmount);

    // step-7:
    widthrawField.value =''

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }

    // stpe-3:
    const withdrawTotalElement = document.getElementById('widtraw-total');
    const previousWidrawtotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWidrawtotalString);
    

    // step-5
    const balanceTotalElement = document. getElementById('balanc-total')
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

     

    if (newWithdrawAmount > previousBlanceTotal){
        alert('Baap er bank e eto taka nai')
        return;
    }

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    
    // step-6
    const newBalanceTotal = previousBlanceTotal - newWithdrawAmount
    balanceTotalElement.innerText = newBalanceTotal;

   
})