
import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link, useParams } from "react-router-dom";


import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";
import Navbarlogin from "../component/navbar-login";

export const Login = () => {

	const URLbase = process.env.BACKEND_URL;

	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [loggedIn, setLoggedIn] = useState(false);

	const {id} = useParams()

	const onTypeEmail = (e) => {
		console.log(e.target.value);
		setEmail(e.target.value);
	};

	const onTypePassword = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
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

			<Link to={`/login/${id}`}>
				<button type="submit"
				className="btn btn-primary float-end m-5 "
				// onClick={() => actions.getUserInformation(id)}
				>
				My Profile
				</button>
			</Link>

		</div>
	</div>

	const loggedInRender = 
	<>
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

	</>

	const notLoggedInRender = <div>

<Navbarlogin />

<div className="container center mt-5 mb-5 ps-5">
        <h6>{'Congradulations, you´ve been logged in as ' + (localStorage.getItem("User") ? localStorage.getItem("User") : store.user.email)}</h6>
</div>

		<div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          {/* Profile photo starts */}
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
            </div>
            <div className="mt-5 text-center">
            <Link to="/edit-profile">
              <button
                className="btn btn-primary edit-profile-button"
                type="button"
              >
                Edit Profile
              </button>
            </Link>
            </div>
          </div>
          {/* Profile photo ends */}
          {/* Profile Info starts */}
          <div className="col-md-5 border-right border border-dark">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Info</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels"><bold><strong>First Name</strong></bold></label>
                  <p>{store.user.first_name}</p>
                </div>
                </div>

                <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels"><strong>User Name</strong></label>
                  <p>{store.user.user_name}</p>
                </div>

              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels"><strong>Email</strong></label>
                  <p>{store.user.email}</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>Mobile Phone</strong></label>
                  <p>Mobile Number</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>Birthday</strong></label>
                  <p>Day / Month / Year</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>Address Line</strong></label>
                  <p>Address Line</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>Postcode</strong></label>
                  <p>Postcode</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>State</strong></label>
                  <p>State</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>City</strong></label>
                  <p>{store.user.city}</p>
                </div>
                <div className="col-md-12">
                  <label className="labels"><strong>Country</strong></label>
                  <p>Country</p>
                </div>
              </div>
            </div>
          </div>
          {/* Profile Info ends */}
          {/* Book History starts */}
          <div className="col-md-4 border border-dark">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center book-history ">
                <h4 className="text-right ">My book History</h4>
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels"><strong>My Books</strong></label>
                <p>Book #1</p>
              </div>
              <hr />
              <div className="col-md-12">
                <label className="labels"><strong>My Swapped Books</strong></label>
                <p>Book #1</p>
              </div>
            </div>
          </div>
          {/* Book History Ends */}
        </div>
      </div>


		{logOutRender}

		
	</div>


	const loginLogicRender = store.isLoggedIn ? notLoggedInRender : loggedInRender;



	return (


		<div className="">


			{loginLogicRender}

			<Footer />
		</div>

	);

};