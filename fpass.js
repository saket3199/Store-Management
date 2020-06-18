function fpass(){
  const signupForm = document.querySelector('#reset-form');
  signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email1 = signupForm['reset-email'].value;
  if(email1!=""){
    auth.sendPasswordResetEmail(email1).then(function()
      { 
        window.alert("Email with Instructions have been sent to you.");
        signupForm.reset();
         document.getElementById("signup_div").style.display = "none";
    document.getElementById("call").style.display = "block";

    })
    .catch(function(error)
    {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message:" + errorMessage);
    });
  }
  else
  {
     window.alert("Enter Email first.");
  }
});
}