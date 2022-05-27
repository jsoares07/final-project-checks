import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";

export const Emailtoreset = () => {
	const { store, actions } = useContext(Context);

	return (

	   <div className="">
      <Navbar />
      <div className="container m-5 m-5">
        <div className="row">
          <h1>Did you forget your password?</h1>
          <div className="col-md-12 border-right border border-dark">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center m-5">
                
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <p>
                   
                  </p>
                  <div className="col-md-8">
                    <h5></h5>

                  </div>
                  <p>
                   We have sent an email to User@gmail.com from BookSwap containing a link to reset you password
                  </p>
                  <div className="col-md-8">
                    <h5></h5>

                  </div>
                  <div className="col-md-8">
                    <h5></h5>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9">


          
          </div>
        </div>

        <h6>You are registered? 

<Link to="/signup">
<a>Sign Up here</a>
</Link> 
</h6>


</div>
      </div>
      <Footer />
    </div>
        
	);
};
