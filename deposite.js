// step-1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
     //step-2: get the deposit amount from the input field
     // For input field use .value to the the value inside the input filed
     const depositField = document.getElementById('input-deponsit');
     const newDepositAmountstring = depositField.value;
     const newDepositAmount = parseFloat(newDepositAmountstring);

     // step-3: get the current deposit total 
     // for non-input (element other than input, textarea) use innerText to get the text 
     const deponsitTotalElement = document.getElementById('deposite-total');
     const priviousDepositTotalstring = deponsitTotalElement.innerText;
     const priviousDepositTotal = parseFloat(priviousDepositTotalstring);

     // step-4 add numbers to  set the total deposit
     const currentDepositTotal = priviousDepositTotal + newDepositAmount;
     // set the deposit total
     deponsitTotalElement.innerText = currentDepositTotal;

     // step-5: get ballance current total
     // const balanceTotalElement = document.getElementById('balance-total');
     // const previoiusBalanceTotalString = balanceTotalElement.innerText;
     // const previousBalanceTotal = parseFloat(previoiusBalanceTotalString)
     const balanceTotalElement = document.getElementById('balanc-total');
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const prviousBalanceTotal = parseFloat(previousBlanceTotalString);

     // step-6 calculate carent total balance
     // const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
     // //Set the balance total
     // balanceTotalTotalElement.innerText = currentBalanceTotal;
     const currentBlanceTotal = prviousBalanceTotal + newDepositAmount;
     balanceTotalElement.innerText = currentBlanceTotal;

     //step clear the deposit field

     depositField.value = '';
})