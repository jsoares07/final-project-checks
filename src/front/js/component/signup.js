import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

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

            <div className="row">

                    <h1>Sign Up</h1>

                        <div className="col-md-4">

                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
 
                            <label for="exampleInputPassword1" className="form-label">Repeat Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />

                            <label for="firstname" className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" id="firstname" />
                    
                            <label for="lastname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id="lastname" />

                            <label for="username" className="form-label">User Name</label>
                            <input type="text" className="form-control" placeholder="User Name" aria-label="User Name" id="username" />

                            <label for="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />

                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity"></input>

                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
        
                            <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                
                            <form action="/action_page.php">
                            <label for="birthday">Date Of Birth</label>
                            <br></br>
                            <input className="form-control" type="date" id="birthday" name="birthday" />
            </form>       
                        </div>

              
                        <div className="col-md-2">
                               
                            <div className="wrapper">
                                <input type="file" className="my_file"></input>
                                
                            </div>



                        </div>

                        <div className="col-md-2">
                        <div className="col-md-6 mb-4">

           </div> 
       </div>
            </div>

                        <button type="submit" className="btn btn-primary m-5">Submit</button>

            </form>


			<Link to="/">
				<button className="btn btn-primary justify-content-center m-5">Back home</button>
			</Link>
            <Footer />
		</div>
        </div>
	);
};
