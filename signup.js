firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    // console.log("Running");
    //  function changing() {
    // document.getElementById("login").innerHTML = 'LOGOUT';
    // console.log("Running");

    // window.open("index.html");
    // }




    // document.getElementById("user_div").style.display = "block";
    // document.getElementById("signup_div").style.display = "none";

    var user = firebase.auth().currentUser;

    // if (user != null) {

    //   var email_id = user.email;
    //   document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    // }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("signup_div").style.display = "block";

  }
});

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email1 = signupForm['signup-email'].value;
  const password1 = signupForm['signup-password'].value;
  const password2 = signupForm['confirm-password'].value;
  if (password1 != password2) {
    alert("\nPassword did not match: Please try again...")
  }
  else {
    alert("Password Match: Logging You In!")
    auth.createUserWithEmailAndPassword(email1, password1).then(cred => {
      signupForm.reset();
    }).catch(function (error) {
      alert(error.message);
    });
  }
});
function logout() {
  firebase.auth().signOut();
}
