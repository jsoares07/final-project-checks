import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";

export const Forgetpassword = () => {
	const { store, actions } = useContext(Context);

	return (

	    <div className="container">
            <Navbar />
			<br />
            <div className="container center m-5">

            <form>

            <div className="row">

                        <div className="col-md-6 ">

                        <h1>Log In</h1>
                            <label for="exampleInputEmail1" className="form-label m-2">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email Address" aria-describedby="emailHelp" />

                            
                            <div className="mt-5 mb-5 text-center">

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
   
   
					
							<div className="row">

					<div className="col-md-9">

                    <h6>You are registered? 

<Link to="/login">
<a>Click here</a>
</Link> 
</h6>

					</div>
					</div>



            </form>

{/* 
			<Link to="/">
				<button className="btn btn-primary justify-content-center m-5">Back home</button>
			</Link> */}



		</div>

        <Footer />
        </div>

        
	);
};
