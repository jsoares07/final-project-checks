import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Popup from "../component/Popup";
import "../../styles/home.css";



import Navbarlogin from "../component/navbar-login";
import Footer from "../component/footer.js";
import "../../styles/index.css";


export const ProfileShort = (props) => {
  const { store, actions } = useContext(Context);

  const params = useParams();

  console.log('params', params)

  const { id } = useParams();

  return (
    <div>
      <Navbarlogin />
      <div className="container center m-5" style={{ top: "10px" }} >
        <h3>Personal info</h3>
        <div className="card-body">
          <img
            className="rounded-circle mt-5"
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          />
          <p>Name: {store.user.name} </p>
          <p>City: {store.user.city} </p>
          <p>Rating: </p>


          <hr />

          <ul>
            <li>Random book 1</li>
            <li>Random book 2</li>
            <li>Random book 3</li>
          </ul>
          {/* <Link to="/my-profile"> */}
          <button className="btn btn-primary justify-content-center mt-3"
          >
            <Popup />
          </button>


          <hr></hr>
          <ul>
            <li>Random book 1</li>
            <li>Random book 2</li>
            <li>Random book 3</li>
          </ul>
          {/* <Link to="/"> */}
          <button className="btn btn-primary justify-content-center mt-3"
          >
            see all
          </button>
        </div>

      </div>
 
 
      <Footer />
    </div>

  );

  // Profile.propTypes = {
  //   first_name: propTypes.string,
  //   user_name: propTypes.string,
  //   email: propTypes.string,
  //   id: propTypes.string,
  // }
};
