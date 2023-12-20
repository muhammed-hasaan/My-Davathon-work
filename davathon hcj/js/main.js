import { app, auth, db } from "../firebase.mjs";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {  query, onSnapshot, doc, where, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const querySnapshot = await getDocs(collection(db, "cources"));

querySnapshot.forEach((doc) => {

    document.getElementById('courceproducts').innerHTML+=
    `<div class="col-lg-3 col-md-4 col-sm-6 pb-1" >
    <div class="product-item bg-light mb-4">
    <div class="product-img position-relative overflow-hidden">
            <img class="img-fluid w-100" src=${doc.data().image} alt="">
            <div class="product-action">
                <a class="btn btn-outline-dark btn-square" href="../pages/detailcource.html"><i onclick="detail('${doc.data().name}', '${doc.data().price}')" class="fa fa-shopping-cart"></i></a>
                
            </div>
            </div>
        <div class="text-center py-4">
            <a class="h6 text-decoration-none text-truncate" href="">${doc.data().name}</a>
            <div class="d-flex align-items-center justify-content-center mt-2">
                <h5>$123.00</h5><h6 class="text-muted ml-2"><del>${doc.data().price}</del></h6>
                </div>
            <div class="d-flex align-items-center justify-content-center mb-1">
            <small class="fa fa-star text-primary mr-1"></small>
            <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small>(99)</small>
            </div>
        </div>
        </div>
</div>
    
`


});





// async function detail(name, price, url, id) {
    //     localStorage.setItem("name", name)
    //     localStorage.setItem("price", price)
    //     localStorage.setItem("url", url)
    //     localStorage.setItem("id", id)
    //     // window.location.href = "detail.html"
    // }
    