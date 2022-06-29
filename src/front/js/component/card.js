
import React, { Component, useContext, useState } from "react";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import "../../styles/card.css";
import "../../styles/home.css";


const Card = (props) => {
  const { store, actions } = useContext(Context);
  const { id, title, author, imageUrl, description, buttonLabel } = props;


  return (
    <div className="card my-4 gap-1" style={{ width: "18rem" }}>
      <img
              className="container align-item-center center pt-1"
              width="250px"
              height="160px"
              src="https://picsum.photos/200/300"
            /> 

      <div className="card-body mt-2 mb-4" style={{ height: "10rem" }}>
        <h4 className="card-title text-center fw-bolder">{title}</h4>
        <h5 className="card-title text-center fw-bolder">{author}</h5>
        <p className="card-text text-center" style={{ fontSize: "large" }}>
          {description.length > length
            ? description.substring(0, 55) + "..."
            : description}
        </p>
      </div>


      <div className="bg-light py-3 text-center">

        <Link to={`/book/${id}`}>
          <button
            type="button"
            className="btn btn-secondary my-3"
            onClick={() => actions.fetchBook(id)}
          >
            Find Out More!
          </button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  author: propTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Card;
