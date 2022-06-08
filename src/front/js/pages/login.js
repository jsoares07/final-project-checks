
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const URLbase =
    "https://3001-heylga-finalproject-vicufwdsixf.ws-eu47.gitpod.io";

	const onTypeEmail = (e) => {
		console.log(e.target.value);
		setEmail(e.target.value);
	  };
	
	  const onTypePassword = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	  };
	
	const onSubmitClicked = () => {
		// onFetchLogIn("TEST3", "TEST3", "TEST3", "TEST3", "TEST3");
	
		if (email && password) {
			 // hacemos el fetch
			 onFetchLogIn(email, password);
			} else {
				//te faltan datos
				alert("information is missing");
			}
	}

	const onChangeProfile = () => {
		
	}

	const onFetchLogIn = (email, password) => {
		// fetch
		const post = {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({
			email: email,
			password: password,
		  }),
		};
	
		console.log("info login", post);
	
		fetch(
		  `${URLbase}/api/login`,
		  post
		)
	
		  .then((response) => response.text())
		  .then((result) => console.log(result))
		  .catch((error) => console.log("error", error));
	  };


	return (

		
	<div className="">
	<Navbar />

		<div className="container mt-5 mb-5 ">

					<h1 className="col-md-6 center mx-auto">Log In</h1>



			<div className="col-md-6 border-right border border-dark p-5 center mx-auto">

				<div className="row">

					<div className="col-md-12 center mx-auto">

					<label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email Address"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={onTypeEmail}
                />

                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={onTypePassword}
                />

					</div>


				</div>

				<div className="row">
						   
						   <div class="col">
								   <button type="submit" 
								   className="btn btn-primary float-end mt-5 me-5"
								   onClick={onSubmitClicked}>
									   Submit
									</button>
							</div>
				</div>
	   

			</div>

			
				<div className="row mt-5">

					<div className="col-md-6 center mx-auto">

						<h6>You are NOT registered?   
	
						<Link to="/signup">
						<a>Sign Up here</a>
						</Link> 
						</h6>


					</div>
				</div>


				<div className="row">

					<div className="col-md-6 center mx-auto">

						<h6>You forgot your password 

						<Link to="/forgetpassword">
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