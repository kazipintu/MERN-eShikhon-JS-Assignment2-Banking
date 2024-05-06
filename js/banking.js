//console.log('connected');

document.getElementById('deposit-button').addEventListener('click', function () {

  //Deposit input
  const depositInputElement = document.getElementById('deposit-input');
  const depositInputText = depositInputElement.value;
  const depositInputAmount = parseFloat(depositInputText);

  //Deposit total
  const depositTotal = document.getElementById('deposit-total');
  const depositTextPrevious = depositTotal.innerText;
  const depositAmountPrevious = parseFloat(depositTextPrevious);

  //Balance total
  const balanceTotalPrevious = document.getElementById('balance-total');
  const balanceTotalPreviousText = balanceTotalPrevious.innerText;
  const balanceTotalPreviousAmount = parseFloat(balanceTotalPreviousText);

  if (!isNaN(depositInputAmount) && /^[0-9]+$/.test(depositInputText) && (depositInputAmount) >= 1) {

    //Updating deposit-total
    const depositAmountUptodate = depositAmountPrevious + depositInputAmount;
    depositTotal.innerText = depositAmountUptodate;

    //Updating balance-total
    const balanceTotalUptodate = balanceTotalPreviousAmount + depositInputAmount;
    balanceTotalPrevious.innerText = balanceTotalUptodate;

    depositInputElement.value = '';

    document.getElementById('error-deposit').setAttribute('hidden', 'hidden');

  } else {
    document.getElementById('error-deposit').removeAttribute('hidden');
  }

})


document.getElementById('withdraw-button').addEventListener('click', function () {

  //Withdraw input
  const withdrawInputElement = document.getElementById('withdraw-input');
  const withdrawInputText = withdrawInputElement.value;
  const withdrawInputAmount = parseFloat(withdrawInputText);

  //Withdraw total
  const withdrawTotal = document.getElementById('withdraw-total');
  const withdrawTextPrevious = withdrawTotal.innerText;
  const withdrawAmountPrevious = parseFloat(withdrawTextPrevious);

  //Balance total
  const balanceTotalPrevious = document.getElementById('balance-total');
  const balanceTotalPreviousText = balanceTotalPrevious.innerText;
  const balanceTotalPreviousAmount = parseFloat(balanceTotalPreviousText);


  if (!isNaN(withdrawInputAmount) && /^[0-9]+$/.test(withdrawInputText) && (withdrawInputAmount) >= 1 && (withdrawInputAmount <= parseFloat(balanceTotalPreviousAmount))) {

    //Updating withdraw-total
    const withdrawAmountUptodate = withdrawAmountPrevious + withdrawInputAmount;
    withdrawTotal.innerText = withdrawAmountUptodate;

    //Updating balance-total
    const newBalanceTotalUptodate = balanceTotalPreviousAmount - withdrawInputAmount;
    balanceTotalPrevious.innerText = newBalanceTotalUptodate

    withdrawInputElement.value = '';

    document.getElementById('error-withdraw').setAttribute('hidden', 'hidden');

  } else {
    document.getElementById('error-withdraw').removeAttribute('hidden');
  }

})


