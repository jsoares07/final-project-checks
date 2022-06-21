import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/navbar";
import Footer from "../component/footer.js";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import Navbarlogin from "../component/navbar-login";

export const EditProfile = () => {
  const { store, actions } = useContext(Context);
  const [info, setInfo] = useState({});

  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [userName, setUserName] = useState();
  const [city, setCity] = useState();
  const [picture, setPicture] = useState();


  return (
    <div className="">
            
     {/* Navbar */}
     <Navbarlogin />

      <div className="container rounded bg-white mt-5 mb-5 border border-dark">
        <div className="row">
          {/* Profile Info starts */}
          <div className="col-md-7 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Edit Profile Info</h4>
              </div>

              <div className="row mt-3">
                <div className="col-md-8">
                  <label className="labels">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={store.user.first_name}
                    value=""
                  />
                </div>
                </div>

                <div className="row mt-3">
                <div className="col-md-8">
                  <label className="labels">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={store.user.user_name}
                    value=""
                  />
                </div>

              </div>

              <div className="row mt-3">
                <div className="col-md-8">
                  <label className="labels">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={store.user.email}
                  />
                </div>
                <div className="col-md-8">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                    value=""
                  />
                </div>
                <div className="col-md-8">
                  <label className="labels">Birthday</label>
                  <input className="form-control" type="date" id="birthday" name="birthday" style={{color: "grey"}}/>
                </div>
                <div className="col-md-8">
                  <label className="labels">Address Line</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address Line"
              
                  />
                </div>
                <div className="col-md-8">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postcode"
                  />
                </div>
                <div className="col-md-8">
                  <label className="labels">State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                  />
                </div>
                <div className="col-md-8">
                  <label className="labels">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={store.user.city}
                    value=""
                  />
                </div>
                <div className="col-md-8">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
              </div>

              <Link to="/security">
              <button type="button" class="btn btn-outline-secondary my-3">Change Password</button>
              </Link>
              <p>
                Looking to manage account security settings? You can find them
                in the <a href="#">Password and authentication</a> page.
              </p>
            </div>
          </div>
          {/* Profile Info ends */}
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
                className="btn btn-primary edit-profile-button "
                type="submit"
              >
                Save Changes
              </button>
              <br />
              <Link to="/profile">
                <button className="btn btn-primary justify-content-center mt-3">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
          {/* Profile photo ends */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
