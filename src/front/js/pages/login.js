
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [userName, setUserName] = useState();
	const [loggedIn, setLoggedIn] = useState(false);


	const URLbase =
		"https://3001-heylga-finalproject-nn1iaqlzqt1.ws-eu47.gitpod.io";

	const onTypeEmail = (e) => {
		console.log(e.target.value);
		setEmail(e.target.value);
	};

	const onTypePassword = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	};

	const OnTypeUserName = (e) => {
		console.log(e.target.value);
		setUserName(e.target.value);
	  };

	const onSubmitClicked = () => {

		if (email && password) {
			// hacemos el fetch
			//onFetchLogIn(email, password);
			actions.login(email, password)
		} else {
			//te faltan datos
			alert("information is missing");
		}
	}


	const logOutRender = <div className="row">

		<div class="col">
			<button type="submit"
				className="btn btn-primary float-end mt-5 me-5"
				onClick={() => actions.logout()}>
				Log Out
			</button>
		</div>
	</div>

	const loggedInRender = <div className="container mt-5 mb-5 ">

		<h1 className="col-md-6 center mx-auto">Log In</h1>



		<div className="col-md-6 border-right border border-dark p-5 center mx-auto">

			<div className="row">

				<div className="col-md-12 center mx-auto">

				<label for="username" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  aria-label="User Name"
                  id="username"
                  value={userName}
                  onChange={OnTypeUserName}
                />

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

	const notLoggedInRender = <div>
		{'You are succesfully logged in' + '  ' + store.user?.email}
		{logOutRender}
	</div>


	const loggedInWindow = 
	<div>
		 <div className="container mt-5 mb-5">
        <div className="row">
          <h1>Dashboard</h1>
          <div className="col-md-12 border-right border border-dark">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Congradulations, you are succesfully logged in!</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <p>
				  You are in the dashboard area. Now you able to adjust your profile, add your books and swap whichever book you would like to.
					Enjoy it!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 mb-5 text-center">

              <Link to="/profile">
                <button className="btn btn-primary justify-content-center">
                  My Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
	</div>



	const loginLogicRender = store.isLoggedIn ? notLoggedInRender : loggedInRender;



	return (


		<div className="">

			<Navbar />

			{loginLogicRender}

			<Footer />
		</div>

	);
};