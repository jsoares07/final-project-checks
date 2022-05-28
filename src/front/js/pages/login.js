import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (

		
	<div className="">
	<Navbar />

		<div className="container mt-5 mb-5 ">

					<h1 className="col-md-6 center mx-auto">Log In</h1>



			<div className="col-md-6 border-right border border-dark p-5 center mx-auto">

				<div className="row">

					<div className="col-md-9  center mx-auto">


						<label for="exampleInputEmail1" className="form-label">Email address</label>
						<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email Address" aria-describedby="emailHelp" />

						<label for="exampleInputPassword1" className="form-label mt-3">Password</label>
						<input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" />

				   
					</div>


				</div>

				<div className="row">
						   
						   <div class="col">
								   <button type="submit" className="btn btn-primary float-end mt-5">Submit</button>
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


				<div className="row">

					<div className="col-md-6 center mx-auto">

						<h6>You forgot your password 

						<Link to="/">
						<a>Click here</a>
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
