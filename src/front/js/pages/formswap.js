import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


import Navbarlogin from "../component/navbar-login";
import Footer from "../component/footer.js";
import "../../styles/index.css";
import "../../styles/home.css";
import e from "cors";

import { URLbase } from "../../../../secrets.js";

export const Formswap = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = props;

  const URLbase = process.env.URLbase;


  return (
    <div>
      <Navbarlogin />

      <div className="container mt-5 mb-5 ">

        <h3 className="col-md-6 center mx-auto">I want to swap this book</h3>
        <div className="col-md-6 border-right border border-dark p-5 center mx-auto">
          <div className="row mt-1">



            <form action="https://formsubmit.co/4bb407f262693426f05ff357e1c49be2" method="POST">

              <div className="row mt-3">
                <div className="col-md-8">
                  <div className="mb-3">
                    <label>Your Email</label>
                    <input type="text" name="email" className="form-control mt-3" />
                  </div>

                </div>
              </div>


              <div className="row mt-3">
                <div className="col-md-8">
                  <div className="mb-3">
                    <label>Message</label>
                    <textarea name="message" className="form-control" required />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-8">
                  <div className="mt-5 text-center">
                    <button type="submit" className="btn btn-primary justify-content-center mt-3 ps-3 pe-3">Send</button>
                  </div>
                </div>
              </div>

              <input type="hidden" name="_next" value="https://3000-heylga-finalproject-pzekafigj08.ws-eu64.gitpod.io/swapmessage" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value=" I want to swap a book with you!" />
              <input type="hidden" name="_template" value="box" />
            </form>

            <div className="row mt-5">
            </div>
          </div>

        </div>

        <div className="row mt-5">

          <div className="col-md-6 center mx-auto">

            <h6>You want to see more books of {store.user.name}?

              <Link to={`/user/${id}`}>
                <a
                  onClick={() => actions.fetchUser(id)}>Check his profile</a>
              </Link>
            </h6>


          </div>
        </div>



      </div>



      <Footer />
    </div>
  );

  Formswap.propTypes = {
    id: PropTypes.string,
  };
};
