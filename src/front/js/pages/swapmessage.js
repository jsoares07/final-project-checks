import React, {  useContext } from "react";
import { Context } from "../store/appContext";
import Navbarlogin from "../component/navbar-login";
import Footer from "../component/footer.js";
import { Link } from 'react-router-dom';
import "../../styles/home.css";



export const Swapmessage = () =>  {
  const { store, actions } = useContext(Context);
  return (
    <div>
         <Navbarlogin />
  
  <div className="container mt-5 mb-5 ">

        <h3 className="col-md-6 center mx-auto">You´ve just offered to swap the book</h3>



    <div className="col-md-6 border-right border border-dark p-5 center mx-auto">

      <div className="row">

        <div className="col-md-12 center mx-auto">



          <div className="m-5 text-center">


          </div>
            
          </div>


      </div>

      <div className="row mt-5">

      <p>
      We sent email to {store.user.name}. You will get feedback within the next 24 hours
              </p>
      </div>


      <div className="row mt-5">
      </div>


      <div className="row mt-5">
      </div>
    </div>


    
      <div className="row mt-5">

      <div className="col-md-6 center mx-auto">

          <h6>You want to swap more books?

          <Link to="/allbooks">
          <a>Check all books</a>
          </Link> 
          </h6>


        </div> 
      </div>



    </div>



<Footer />
    </div>
  )
}
