import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/navbar";
import Footer from "../component/footer.js";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import "../../styles/home.css";


export const Security = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="row">
          <h1>Security</h1>
          <div className="col-md-12 border-right border border-dark">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Change Password</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <p>
                    Choose a strong password and don't reuse it for other
                    accounts. Changing your password will sign you out on your
                    devices.
                  </p>
                  <div className="col-md-8">
                    <h5>Current password</h5>
                    <input type="text" className="form-control" />
                  </div>
                  <p>
                    Your password must be at least 8 characters and should
                    include a combination of numbers, letters and special
                    characters (!$%&@). Don’t use a password from another site,
                    or something too obvious like your pet’s name.
                  </p>
                  <div className="col-md-8">
                    <h5>New password</h5>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-8">
                    <h5>Repeat password</h5>
                    <input type="text" className="form-control"  />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 mb-5 text-center">

            <Link to="/emailtoreset">
              <button
                className="btn btn-primary edit-profile-button"
                type="submit"
              >
                Changes Password
              </button>
              </Link>

              <Link to="/edit-profile">
                <button className="btn btn-primary justify-content-center">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
