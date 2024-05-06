//console.log('connected');

document.getElementById('deposit-input').addEventListener('input', function () {

  const depositInputElement = document.getElementById('deposit-input');
  const depositInputText = depositInputElement.value;
  const depositInputAmount = parseFloat(depositInputText);
  
  if (!isNaN(depositInputAmount) && /^[0-9]+$/.test(depositInputText) && (depositInputAmount) >= 1) {

    document.getElementById('deposit-button').removeAttribute('disabled');

    document.getElementById('deposit-button').addEventListener('click', function () {

      //Deposit total
      const depositTotal = document.getElementById('deposit-total');
      const depositTextPrevious = depositTotal.innerText;
      const depositAmountPrevious = parseFloat(depositTextPrevious);

      //Balance total
      const balanceTotalPrevious = document.getElementById('balance-total');
      const balanceTotalPreviousText = balanceTotalPrevious.innerText;
      const balanceTotalPreviousAmount = parseFloat(balanceTotalPreviousText);

      //if, else condition
      const depositAmountUptodate = depositAmountPrevious + depositInputAmount;
      depositTotal.innerText = depositAmountUptodate;

      const balanceTotalUptodate = balanceTotalPreviousAmount + depositInputAmount;
      balanceTotalPrevious.innerText = balanceTotalUptodate;

      depositInputElement.value = '';

      document.getElementById('deposit-button').setAttribute('disabled', 'disabled');
      document.getElementById('error-deposit').setAttribute('hidden', 'hidden');
      return
    })

  } else if (depositInputElement.value === " "){
    document.getElementById('deposit-button').setAttribute('disabled', 'disabled');
  return
  }
  else {
    document.getElementById('deposit-button').setAttribute('disabled', 'disabled');
    document.getElementById('error-deposit').removeAttribute('hidden');
  }
  return
})


/* document.getElementById('deposit-button').addEventListener('click', function () {
  console.log('button clicked');

  //Enter deposit amount
  const depositInputElement = document.getElementById('deposit-input');
  console.log(depositInputElement);
  const depositInputText = depositInputElement.value;
  console.log(depositInputText);
  const depositInputAmount = parseFloat(depositInputText);//if, else on this variable
  console.log(depositInputAmount);

  //Validate deposit input
  if (!isNaN(depositInputAmount) && /^[0-9]+$/.test(depositInputText) && (depositInputAmount) >= 1)){

  }

  //Deposit total
  const depositTotal = document.getElementById('deposit-total');
  console.log(depositTotal);
  const depositTextPrevious = depositTotal.innerText;
  console.log(depositTextPrevious);
  const depositAmountPrevious = parseFloat(depositTextPrevious);

  //Balance total
  const balanceTotalPrevious = document.getElementById('balance-total');
  console.log(balanceTotalPrevious);
  const balanceTotalPreviousText = balanceTotalPrevious.innerText;
  console.log(balanceTotalPreviousText);
  const balanceTotalPreviousAmount = parseFloat(balanceTotalPreviousText);
  console.log(balanceTotalPreviousAmount);

  //if, else condition
  const depositAmountUptodate = depositAmountPrevious + depositInputAmount;
  depositTotal.innerText = depositAmountUptodate;

  const balanceTotalUptodate = balanceTotalPreviousAmount + depositInputAmount;
  balanceTotalPrevious.innerText = balanceTotalUptodate;

}) */