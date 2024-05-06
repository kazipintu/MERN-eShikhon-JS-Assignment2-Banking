console.log('connected');
document.getElementById('submit-buttton').addEventListener('click', function () {
  console.log('button clicked');
  //get email data from input field
  const emailInputElement = document.getElementById('user-email');
  console.log(emailInputElement);
  const emailInputData = emailInputElement.value;
  console.log(emailInputData);

  //get password data from input field
  const passwordInputElement = document.getElementById('user-password');
  console.log(passwordInputElement);
  const passwordInputData = passwordInputElement.value;
  console.log(passwordInputData);
  const errorLogin = document.getElementById('error-login')

  //compare both email & password with database to verify authenticity
  if (emailInputData == "admin@email.com" && passwordInputData == 'pass1234') {

    // upon fulfilling the condition, new page for banking.html will open in the same window
    window.location.href = "../banking.html";
  }
  else {
    errorLogin.removeAttribute('hidden');
  }
})