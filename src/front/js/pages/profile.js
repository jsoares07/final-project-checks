import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/footer.js";
import "../../styles/index.css";
import Navbarlogin from "../component/navbar-login";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      
     {/* Navbar */}

     <Navbarlogin />


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
              <button
                className="btn btn-primary edit-profile-button"
                type="button"
              >
                Edit Profile
              </button>
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
                  <label className="labels">Full Name</label>
                  <p>Full Name</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <p>Email</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <p>Mobile Number</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">Birthday</label>
                  <p>Day / Month / Year</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line</label>
                  <p>Address Line</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <p>Postcode</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">State</label>
                  <p>State</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">City</label>
                  <p>City</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">Country</label>
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
                <label className="labels">My Books</label>
                <p>Book #1</p>
              </div>
              <hr />
              <div className="col-md-12">
                <label className="labels">My books Swapped</label>
                <p>Book #1</p>
              </div>
            </div>
          </div>
          {/* Book History Ends */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
