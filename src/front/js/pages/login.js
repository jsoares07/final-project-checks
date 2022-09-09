import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "./../component/navbar";
import Footer from "./../component/footer";
import Navbarlogin from "../component/navbar-login";
import "../../styles/home.css";

import { URLbase } from "../../../../secrets.js";

export const Login = () => {

  const URLbase = process.env.BACKEND_URL;

  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const { id } = useParams();

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
      actions.login(email, password);
    } else {
      //te faltan datos
      alert("information is missing");
    }
  };

  const logOutRender = (
    <div className="row">
      <div class="col">
        <button
          type="submit"
          className="btn btn-primary float-end mt-5 me-5"
          onClick={() => actions.logout()}
        >
          Log Out
        </button>

        <Link to={`/my-profile`}>
          <button
            type="submit"
            className="btn btn-primary float-end m-5 "
          // onClick={() => actions.getUserInformation(id)}
          >
            My Profile
          </button>
        </Link>
      </div>
    </div>
  );

  const loggedInRender = (
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
              <button
                type="submit"
                className="btn btn-primary float-end mt-5 me-5"
                onClick={onSubmitClicked}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 center mx-auto">
            <h6>
              You are NOT registered?
              <Link to="/signup"  style={{textDecoration: 'bold', color: '#7d6757', fontfamily: 'Libre Baskerville', }}>
                <a>Sign Up here</a>
              </Link>
            </h6>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 center mx-auto">
            <h6>
              You forgot your password
              <Link to="/forgetpassword"  style={{textDecoration: 'bold', color: '#7d6757', fontfamily: 'Libre Baskerville', }}>
                <a>Click here</a>
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );

  const notLoggedInRender = (
    <div>
      <Navbarlogin />

      <div className="container center mt-5 mb-5 ps-5">
        <h6>
          {store.isLoggedIn
            ? "Congradulations, you´ve been logged in as " + store.user.email
            : "unlogged"}
        </h6>
      </div>

      {logOutRender}
    </div>
  );

  const loginLogicRender = store.isLoggedIn
    ? notLoggedInRender
    : loggedInRender;

  return (
    <div className="">
      {loginLogicRender}

      <Footer />
    </div>
  );
};
