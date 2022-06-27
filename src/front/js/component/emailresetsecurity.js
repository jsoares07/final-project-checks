import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";
import "../../styles/home.css";

export const Emailresetsecurity = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <Navbar />

      <div className="container mt-5 mb-5 ">

        <h3 className="col-md-6 center mx-auto">Changing the current password</h3>



        <div className="col-md-6 border-right border border-dark p-5 center mx-auto">
  

          <div className="row mt-5">

            <div className="col-md-8 mt-2">
              <h6>New password</h6>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-8  mt-2">
              <h6>Repeat password</h6>
              <input type="text" className="form-control" />
            </div>

            <br />
            <br />

            <h6 className=" mt-2">Password Strength:</h6>
            <p>
              Your password must be at least 8 characters and should include a combination of numbers, letters and special characters (!$%&@). Don´t use a password from another site, or something too obvious like your pet´s name
            </p>



            <div className="mt-5 mb-5 text-left">

              <div className="row">

                <div class="col">
                  <button type="submit" className="btn btn-primary float-end mt-2 me-2">Change Password</button>
                </div>

          
              </div>
            </div>






          </div>


  
        </div>



        {/* <div className="row mt-5">
  
            <div className="col-md-6 center mx-auto">
  
              <h6>You are registered?   
    
              <Link to="/signup">
              <a>Sign Up here</a>
              </Link> 
              </h6>
  
  
            </div>
          </div> */}



      </div>

      {/* <Link to="/">
        <button className="btn btn-primary justify-content-center m-5">Back home</button>
      </Link> */}

      <Footer />
    </div>
  );
};
