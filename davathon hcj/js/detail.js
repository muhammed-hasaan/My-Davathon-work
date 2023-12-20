import { app,  auth , db } from "../firebase.mjs";
import { createUserWithEmailAndPassword, getAuth  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"; 

var loginbtn = document.getElementById("loginbtn")
loginbtn.addEventListener("click",async() => {
    var name = document.getElementById("name").value;
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    var phone = document.getElementById("phone").value;
    var corcess = document.getElementById("corcess").value;

   
            try {
                const docRef = await addDoc(collection(db, "Enroll"), {
                 name:name,
                 phone:phone,
                 email1:email1,
                 password1:password1,
                 corcess:corcess
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
              
           
            })