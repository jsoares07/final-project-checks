import React, { useContext } from "react"
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Navbarlogin from "../component/navbar-login";
import { Context } from "../store/appContext";

export const Other_users_profile = () => {
    const { store, actions } = useContext(Context);
    return (
    <div>
        <Navbarlogin />
        <div className="card align-items-center" style={{top: "10px"}} >
            <h3>Personal info</h3>
            <div class="card-body">
              <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <p>Username: </p>
                <p>Name: </p>
                <p>City: </p>
                <p>Member since: </p>
                <p>Rating: </p>
            </div>
        </div>
        {/* Book history */}
        <div class="row">
            
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Username books offered</h5>
                  <ul>
                    <li>Random book 1</li>
                    <li>Random book 2</li>
                    <li>Random book 3</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Username books swapped</h5>
                  <ul>
                    <li>Random book 1</li>
                    <li>Random book 2</li>
                    <li>Random book 3</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}