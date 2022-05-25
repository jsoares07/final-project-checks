import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import Navbar from "./navbar";
import Footer from "./footer";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="container">
            <Navbar />
			<br />
            <div className="container center m-5">

        <form>

            <h1>Sign Up</h1>

                <div className="col-6 col-md-4">
                <div className="col m-1">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
  
                <div className="col-6 col-md-4">
                <div className="col m-1">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                </div>

                <div className="col-6 col-md-4">
                <div className="col m-1">
                    <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                </div>

                <div className="col-6 col-md-4">
                    <div className="col m-1">
                    <label for="firstname" class="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" id="firstname" />
                    </div>

                <div className="col m-1">
                <label for="lastname" class="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id="lastname" />
                </div>
                </div>

                
                <form action="/action_page.php">
                    <div className="col-6 col-md-4">
                        <div className="col m-1">
                            <label for="birthday">Date Of Birth</label>
                                <br></br>
                            <input className="form-control" type="date" id="birthday" name="birthday" />
                        </div>
                    </div>
                </form>


                <button type="submit" class="btn btn-primary">Submit</button>
        </form>


			<Link to="/">
				<button className="btn btn-primary justify-content-center">Back home</button>
			</Link>
            <Footer />
		</div>
        </div>
	);
};
