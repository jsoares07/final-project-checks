import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/signup.css";

import { Context } from "../store/appContext";

import Navbar from "./../component/navbar.js";
import Footer from "./../component/footer";


export const Signup = () => {
  const { store, actions } = useContext(Context);

  const URLbase = process.env.BACKEND_URL;

  // const URLbase = "https://3001-heylga-finalproject-wy6lkyxgzdu.ws-eu47.gitpod.io"

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  // const [picture, setPicture] = useState();


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

    if (email && password && name && city) {
    // if (email && password && repeatPassword) {
      if (password) {
        // hacemos el fetch
        onFetchSignUp(email, password, name, city);
      } else {
        // las pass tienen que coincidir
        alert("the passwords have to be iqual");
      }
    } else {
      //te faltan datos
      alert("information is missing");
    }
  };


  const onFetchSignUp = (email, password, name, city) => {
    // fetch
    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
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

  const OnTypeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onTypeCity = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  // const onTypePicture = (e) => {
  //   console.log(e.target.value);
  //   setPicture(e.target.files[0]);
  // };


  return (
    <div className="">
      <Navbar />

      <div className="container center mt-5 mb-5">
        <h1>Sign Up</h1>

        <div className="col-md-12 border-right border border-dark p-5">
          <div className="row">
            <div className="col-md-6 pt-5">
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

                <label for="firstname" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  id="name"
                  value={name}
                  onChange={OnTypeName}
                />


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

              </div>
            </div>

            <div className="col-md-6">
              <div className="wrapper">
                <input type="file" className="my_file mt-1"
                // onChange={onTypePicture}
                >
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
