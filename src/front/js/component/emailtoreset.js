import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";
import "../../styles/home.css";

export const Emailtoreset = () => {
	const { store, actions } = useContext(Context);

	return (
    <div className="">
    <Navbar />
  
      <div className="container mt-5 mb-5 ">
  
            <h3 className="col-md-6 center mx-auto">Did you forget your password?</h3>
  
  
  
        <div className="col-md-6 border-right border border-dark p-5 center mx-auto">
  
          <div className="row">
  
            <div className="col-md-12 center mx-auto">
  

  
              <div className="m-5 text-center">


              </div>
                
              </div>
  
  
          </div>

          <div className="row mt-5">

          <p>
                  We have sent an email to User@gmail.com from BookSwap containing a link to reset you password
                  </p>
          </div>


          <div className="row mt-5">
          </div>
  

          <div className="row mt-5">
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
