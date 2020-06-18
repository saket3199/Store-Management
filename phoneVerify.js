window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
recaptchaVerifier.render();



// document.getElementById('button_send_code').addEventListener("click", function () {
//     document.querySelector('.bg-modal').style.display = "flex";
// });

// document.querySelector('.close').addEventListener("click", function () {
//     document.querySelector('.bg-modal').style.display = "none";
// });


function phoneAuth() {
    var phoneNumber = document.getElementById('number').value;
    var appVerifier = window.recaptchaVerifier;


    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        console.log(window.confirmationResult);
        alert('message sent!!');
        console.log("fast");

        document.getElementById("call2").style.display = 'block';
        console.log("fast1");
        document.getElementById("call3").style.display = 'none';
        console.log("Running");



    }).catch(function (error) {
        alert(error.message);
    })
}


window.recaptchaVerifier.render().then(function (widgetId) {
    grecaptcha.reset(widgetId);
});

function codeverify() {
    var code = document.getElementById('verificationCode').value;

    confirmationResult.confirm(code).then(function (result) {
        alert("Successfully Verified!!");
        var user = result.user;
    }).catch(function (error) {
        alert(error.message);

    });
}