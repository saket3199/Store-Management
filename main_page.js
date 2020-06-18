firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.


        window.open("index1.html");
        var user = firebase.auth().currentUser;

        if (user != null) {

            var email_id = user.email;


        }

    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});