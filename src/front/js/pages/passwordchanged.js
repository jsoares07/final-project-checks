import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";
import "../../styles/home.css";

export const PasswordChanged = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <Navbar />

      <div className="container mt-5 mb-5 ">

        <h3 className="col-md-6 center mx-auto">Password Management</h3>



        <div className="col-md-6 border-right border border-dark p-5 center mx-auto">
  

          <div className="row mt-5">


            <h6 className=" mt-2"> Your password has been changed</h6>
            <p>
             
            </p>

            <div className="mt-5 mb-5 text-left">

              <div className="row">

                <div class="col">
                    <Link to="/">
                  <button type="submit" className="btn btn-primary float-end mt-2 me-2">Back to Home</button>
                  </Link>
                </div>

          
              </div>
            </div>






          </div>


  
        </div>



      </div>


      <Footer />
    </div>
  );
};
