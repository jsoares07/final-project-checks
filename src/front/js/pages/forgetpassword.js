import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";

export const Forgetpassword = () => {
	const { store, actions } = useContext(Context);

	return (

			
    <div className="">
    <Navbar />
  
      <div className="container mt-5 mb-5 ">
  
            <h3 className="col-md-6 center mx-auto">Did you forget your password?</h3>
  
  
  
        <div className="col-md-6 border-right border border-dark p-5 center mx-auto">
  
          <div className="row">
  
            <div className="col-md-12 center mx-auto">
  
  
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email Address" aria-describedby="emailHelp" />
  
              <div className="mt-5 mb-5 text-left">

                  <Link to="/emailtoreset">
                    <button className="btn btn-primary justify-content-center">
                        Send Email
                    </button>
                  </Link>
              </div>
                  <p>
                      Please enter your email address in the field above, once completed, 
                      you will receive an email from BookSwap containing a link to reset your password.
                  </p>
              </div>
  
  
          </div>

       
  
        </div>
  
        
          <div className="row mt-5">
  
            <div className="col-md-6 center mx-auto">
  
              <h6>You are registered?   
    
              <Link to="/signup">
              <a>Sign Up here</a>
              </Link> 
              </h6>
  
  
            </div>
          </div>
  
  

        </div>
  
      {/* <Link to="/">
        <button className="btn btn-primary justify-content-center m-5">Back home</button>
      </Link> */}
  
  <Footer />
  </div>
	);
};
