import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/signup.css";

import { Context } from "../store/appContext";

import Navbar from "./../component/navbar.js";
import Footer from "./../component/footer";


export const Signup = () => {
  const { store, actions } = useContext(Context);

  // const URLbase = process.env.BACKEND_URL;

  const URLbase = "https://3001-heylga-finalproject-gwaoxnrdgj4.ws-eu47.gitpod.io";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [userName, setUserName] = useState();
  const [city, setCity] = useState();
  const [picture, setPicture] = useState();


  const onSubmitClicked = () => {
    console.log("estoy haciendo click en submit");
    // obtener email, password, repeatpassword, firstName, userName, city
    // email no vacio
    // password no vacio
    // repeatpassword no vacio
    // firstName no vacio
    // userName no vacio
    // city no vacio
    // password === repeatpassword

    if (email && password && repeatPassword && firstName && userName && city) {
    // if (email && password && repeatPassword) {
      if (password === repeatPassword) {
        // hacemos el fetch
        onFetchSignUp(email, password, firstName, userName, city);
      } else {
        // las pass tienen que coincidir
        alert("the passwords have to be iqual");
      }
    } else {
      //te faltan datos
      alert("information is missing");
    }
  };

 


  const onFetchSignUp = (email, password, first_name, user_name, city) => {
    // fetch
    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: first_name,
        user_name: user_name,
        city: city,
        // picture: picture,
      }),
    };

    console.log("info login", post);

    fetch(
      `${URLbase}/api/signup`,
      post
    )

      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const onTypeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onTypePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const onTypeRepeatPassword = (e) => {
    console.log(e.target.value);
    setRepeatPassword(e.target.value);
  };

  const OnTypeFirstName = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  };

  const OnTypeUserName = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const onTypeCity = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  const onTypePicture = (e) => {
    console.log(e.target.value);
    setPicture(e.target.value);
  };


  return (
    <div className="">
      <Navbar />

      <div className="container center mt-5 mb-5">
        <h1>Sign Up</h1>

        <div className="col-md-12 border-right border border-dark p-5">
          <div className="row">
            <div className="col-md-6">
              <div className="Form" action="/signup" method="post">
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

                <label for="exampleInputPassword1" className="form-label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat Password"
                  id="exampleInputPassword1"
                  value={repeatPassword}
                  onChange={onTypeRepeatPassword}
                />

                <label for="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  id="firstname"
                  value={firstName}
                  onChange={OnTypeFirstName}
                />

                {/* <label for="lastname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id="lastname" /> */}

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

                {/* <label for="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" /> */}

                <label for="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  id="inputCity"
                  value={city}
                  onChange={onTypeCity}
                ></input>

                {/* <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select> */}

                {/* <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" /> */}

                {/* <form action="/action_page.php">
                            <label for="birthday">Date Of Birth</label>
                            <br></br>
                            </form>  */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="wrapper">
                <input type="file" className="my_file mt-1"
                onChange={onTypePicture}>
                </input>
              </div>

              <div className="col text-center">
                <button
                  type="submit"
                  onClick={onSubmitClicked}

                  className="btn btn-primary text-center"
                >
                  Submit
                </button>
              </div>
            </div>
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
