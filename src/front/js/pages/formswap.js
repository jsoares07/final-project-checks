import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

import Navbarlogin from "../component/navbar-login";
import Footer from "../component/footer.js";
import "../../styles/index.css";
import e from "cors";

export const Formswap = () => {
  const { store, actions } = useContext(Context);

    function sendEmail (e) {
        e.preventDefault()
        emailjs.sendForm(
        'service_kgq4p6g',
        'template_dh5xe9l',
        e.target,
        'user_b7QHi16EqpR2NYZX8'
        
        )
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
 };


  return (
    <div>
    <Navbarlogin />

<div className="container mt-5 mb-5 ">

   <h3 className="col-md-6 center mx-auto">Did you finally swap the book?</h3>



<div className="col-md-6 border-right border border-dark p-5 center mx-auto">

 

 <div className="row mt-5">
 <div className="mb-3">
  <label for="nameControlInput" className="form-label">Name</label>
  <input name="name" type="name" className="form-control" placeholder="name"/>
</div>
 <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" name="user_email" className="form-control" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea name="message" className="form-control" rows="3"></textarea>
</div>

<div className="mt-5 text-center">
              <Link to="/swapmessage">
                <button
                  className="btn btn-primary edit-profile-button"
                  type="button"
                >
                  Swap
                </button>
              </Link>
            </div>

 <div className="row mt-5">
 </div>
</div>

</div>

 <div className="row mt-5">

 <div className="col-md-6 center mx-auto">

     <h6>You already did?

     <Link to="/swapconfirmation">
     <a>Please rate your experience</a>
     </Link> 
     </h6>


   </div> 
 </div>



</div>



<Footer />
</div>
  );
};
