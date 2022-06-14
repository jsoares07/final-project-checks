import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import Navbarlogin from '../component/navbar-login'
import { Context } from "../store/appContext";
import Rating from '../component/rating';
import Footer from '../component/footer'
export const Reviewuser = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
        <Navbarlogin />
        <div className="container">
          <div className="card p-4">
            <div>
              <h4>Rating and Review</h4>
              <p>How was your exchange with User?</p>
            </div>
            <Rating />
          </div>
        </div>
        <Footer />
    </div>
  )
}
