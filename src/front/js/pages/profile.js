import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";


import Navbarlogin from "../component/navbar-login";
import Footer from "../component/footer.js";
import "../../styles/index.css";


export const Profile = (props) => {
  const { store, actions } = useContext(Context);
  const [loggedIn, setLoggedIn] = useState(false);

  const { first_name, user_name, email} = props;
  
  // console.log(useParams(1))
  const {id} = useParams()
  console.log(id)


  console.log("User", store.user);

  return (

    <div className="">

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
                  <label className="labels">First Name</label>
                  <p>First Name</p>
                  <p></p>
                </div>
                </div>

                <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">User Name</label>
                 <p>User Name</p> 
                  {/* <p>{props.user_name}</p> */}
                </div>

              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <p>{email}</p>
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

Profile.propTypes = {
  first_name: propTypes.string,
  user_name: propTypes.string,
  email: propTypes.string,
}
};
