firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = loginForm['email_field'].value;
  const password = loginForm['password_field'].value;

  // sign up the user
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    // const modal = document.querySelector('#modal-signup');
    // M.Modal.getInstance(modal).close();
    loginForm.reset();
  }).catch(function(error){
    alert(error.message);
  });

});


                    
  // sign up the user
//   auth.createUserWithEmailAndPassword(email, password).then(cred => {
//     // close the signup modal & reset form
//     const modal = document.querySelector('#modal-signup');
//     // M.Modal.getInstance(modal).close();
//     signupForm.reset();
//   });
// });

function logout(){
  firebase.auth().signOut();
}
