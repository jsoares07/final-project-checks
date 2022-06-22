import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Popup from "../component/Popup";



import Navbarlogin from "../component/navbar-login";
import Footer from "../component/footer.js";
import "../../styles/index.css";


export const ProfileShort = (props) => {
  // const { store, actions } = useContext(Context);
  // const [loggedIn, setLoggedIn] = useState(false);

  // const params = useParams();

  // console.log('params', params)

  // // const { id, first_name, user_name, email, city} = props;

  // // useEffect(() => {
  // //   actions.getUserInformation
  // // }, [])

  // // console.log("User information from flux getUserInformation", store.getUserInformation)
  // console.log("User from user store flux", store.user);

  // return (

  //   <div className="">


  //     <div className="container rounded bg-white mt-5 mb-5">
  //       <div className="row">
  //         {/* Profile photo starts */}
  //         <div className="col-md-3 border-right">
  //           <div className="d-flex flex-column align-items-center text-center p-3 py-5">
  //             <img
  //               className="rounded-circle mt-5"
  //               width="150px"
  //               src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
  //             />
  //           </div>
  //           <div className="mt-5 text-center">
  //             <Link to="/edit-profile">
  //               <button
  //                 className="btn btn-primary edit-profile-button"
  //                 type="button"
  //               >
  //                 Edit Profile
  //               </button>
  //             </Link>
  //           </div>
  //         </div>
  //         {/* Profile photo ends */}
  //         {/* Profile Info starts */}
  //         <div className="col-md-5 border-right border border-dark">
  //           <div className="p-3 py-5">
  //             <div className="d-flex justify-content-between align-items-center mb-3">
  //               <h4 className="text-right">Profile Info</h4>
  //             </div>
  //             <div className="row mt-2">
  //               <div className="col-md-6">
  //                 <label className="labels"><bold><strong>First Name</strong></bold></label>
  //                 <p>{store.user.first_name}</p>
  //               </div>
  //             </div>

  //             <div className="row mt-2">
  //               <div className="col-md-6">
  //                 <label className="labels"><strong>User Name</strong></label>
  //                 <p>{store.user.user_name}</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         {/* Profile Info ends */}
  //         {/* Book History starts */}
  //         <div className="col-md-4 border border-dark">
  //           <div className="p-3 py-5">
  //             <div className="d-flex justify-content-between align-items-center book-history ">
  //               <h4 className="text-right ">My book History</h4>
  //             </div>
  //             <br />
  //             <div className="col-md-12">
  //               <label className="labels"><strong>My Books</strong></label>
  //               <p>Book #1</p>
  //             </div>
  //             <hr />
  //             <div className="col-md-12">
  //               <label className="labels"><strong>My Swapped Books</strong></label>
  //               <p>Book #1</p>
  //             </div>
  //           </div>
  //         </div>
  //         {/* Book History Ends */}
  //       </div>
  //     </div>

  //     <Footer />
  //   </div>

  const { store, actions } = useContext(Context);
  return (
  <div>
      <Navbarlogin />
      <div className="card align-items-center" style={{top: "10px"}} >
          <h3>Personal info</h3>
          <div className="card-body">
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
      <div className="row">
          
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Username books offered</h5>
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
              {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Username books swapped</h5>
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
              {/* </Link> */}
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
