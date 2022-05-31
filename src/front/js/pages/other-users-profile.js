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
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        {/* Book history */}
        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
        <Footer />
    </div>
  )
}