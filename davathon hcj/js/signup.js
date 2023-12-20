import { app,  auth , db } from "../firebase.mjs";
import { createUserWithEmailAndPassword, getAuth  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"; 

var loginbtn = document.getElementById("loginbtn")
loginbtn.addEventListener("click", () => {
    var name = document.getElementById("name").value;
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    var phone = document.getElementById("phone").value;
    console.log(email1)
    console.log(password1)
    // var file = document.getElementById("file").file[0];
    createUserWithEmailAndPassword(auth, email1, password1)
    .then(async(userCredential) => {
            const user = userCredential.user;
            console.log(user);
            try {
                const docRef = await addDoc(collection(db, "users"), {
                 name:name,
                 phone:phone
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
              
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Account Has been created successfully !',
                showConfirmButton: false,
                timer: 1500
              })
            window.location.href = "./signin.html"
        })
        .catch((error) => {
            alert(("please fill all the fields ."))
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
})