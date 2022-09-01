import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";

import Popup from "../component/Popup";
import "../../styles/home.css";


import "../../styles/card.css";
import "../../styles/home.css";
import "../../styles/index.css";


import Navbarlogin from "../component/navbar-login";
import Footer from "../component/footer.js";



export const ProfileShort = (props) => {
  const { store, actions } = useContext(Context);
  const { id, title, author, imageUrl, description, buttonLabel } = props;


  return (
    <div>
      <Navbarlogin />

      <div className="container mt-5 mb-5" style={{ top: "10px" }} >

      <div className="col-md-6 border-right border border-dark p-5 center mx-auto">
          <div className="row">
            <div className="col-md-12 center mx-auto">
        <h3>Personal info</h3>
        <div className="card-body">
          <img
            className="rounded-circle mt-5"
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          />
          <p>Name: 
            Olga
            {/* {store.user.name}  */}
          </p>
          <p>City: 
            Barcelona
            {/* {store.user.city}  */}
          </p>
          {/* <p>Rating: </p> */}


          <hr />

          <ul>
          <Link style={{textDecoration: '', color: '#7d6757', fontfamily: 'Libre Baskerville', }} to="/formswap">
            <li>
              {/* {store.book.title} */}
              The Catcher in the Rye
            </li>
          </Link>
          <Link style={{textDecoration: '', color: '#7d6757', fontfamily: 'Libre Baskerville', }} to="/formswap">
            <li>
              Limón
              {/* {store.book.title} */}
            </li>
          </Link>
          {/* <Link to="/formswap">
            <li>{store.book.title}</li>
          </Link> */}
          </ul>
          
          {/* <Link to="/my-profile"> */}
          {/* <button className="btn btn-primary justify-content-center mt-3"
          >
            <Popup />
          </button> */}
{/* 
          <hr></hr>
          <ul>
            <li>Random book 1</li>
            <li>Random book 2</li>
            <li>Random book 3</li>
          </ul>
          <button className="btn btn-primary justify-content-center mt-3"
          >
            see all
          </button> */}
      </div>
      </div>
      </div>
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
