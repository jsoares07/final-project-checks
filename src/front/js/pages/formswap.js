import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

import Navbarlogin from "../component/navbar-login";
import Footer from "../component/footer.js";
import "../../styles/index.css";
import e from "cors";

export const Formswap = () => {
  const { store, actions } = useContext(Context);
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_kgq4p6g', 'service_kgq4p6g', form.current, 'b7QHi16EqpR2NYZX8')
  //     .then((result) => {

  //         console.log('SUCCESS!', response.status, response.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  const URLbase = process.env.BACKEND_URL;

  return (
    <div>
    <Navbarlogin />

  <div className="container mt-5 mb-5 ">

          <h3 className="col-md-6 center mx-auto">Did you finally swap the book?</h3>
                <div className="col-md-6 border-right border border-dark p-5 center mx-auto">
          <div className="row mt-5">
 
      

  <form action="https://formsubmit.co/5c9ae7eaeea71f3f2d11a1bde0fd6b67" method="POST">

  <div className="mb-3">
      <label>Name</label>
      <input type="text" name="name" />
  </div>
      
  <div className="mb-3">
      <label>Email</label>
      <input type="email" name="email" />
  </div>


  <div className="mb-3">
      <label>Message</label>
      <textarea name="message" />
  </div>

      {/* <input type="submit" value="Send" /> */}

  <div className="mt-5 text-center">
      {/* <Link to="/swapmessage"> */}
      <button type="submit">Send</button>
      {/* </Link> */}
  </div>
  <input type="hidden" name="_next" value="https://3000-heylga-finalproject-wy4721z3r5y.ws-eu47.gitpod.io/swapmessage" />
  <input type="hidden" name="_captcha" value="false"/>
    
    </form>



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
