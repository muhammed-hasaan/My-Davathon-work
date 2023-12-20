import { app,  auth } from "../firebase.mjs";
import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

var loginbtn = document.getElementById("loginbtn")
loginbtn.addEventListener("click", () => {
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    console.log(email1)
    console.log(password1)
    // var file = document.getElementById("file").file[0];
    signInWithEmailAndPassword(auth, email1, password1)
        .then(async(userCredential) => {
            const user = userCredential.user;
            console.log(user);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your are signed in successfully',
                showConfirmButton: false,
                timer: 1500
              })
            window.location.href = "../index.html"
        })
        .catch((error) => {
            alert(("you are successfully login"))
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
})