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
        <div className='container'>
          <div className="card text-center">
            <div className="card p-4">
              <div>
                <h1>Rating and Review</h1>
                <p>How was your exchange with User?</p>
              </div>
              <Rating />
              <div className='col align-self-center'>
              <textarea placeholder="Write a review about your book exchange" style={{height: "100px", width: "400px"}}></textarea>
              </div>
              <div>
                <button type="button" className="btn btn-success" style={{width: "100px"}}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
