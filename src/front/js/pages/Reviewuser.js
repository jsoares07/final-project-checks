import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import Navbarlogin from '../component/navbar-login';
import { Context } from "../store/appContext";
import Rating from '../component/rating';
export const Reviewuser = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
        <Navbarlogin />
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div className="card p-4">
            <div>
              <h4>Rating and Review</h4>
              <p>How was your exchange with User?</p>
            </div>
            <Rating />
          </div>
        </div>
    </div>
  )
}
