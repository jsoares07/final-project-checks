import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import "../../styles/home.css";

const BookCard = (props) => {
  const { store, actions } = useContext(Context);
  const {
    user,
    id,
    title,
    author,
    publisher,
    genre,
    language,
    book_picture,
    description,
  } = props;

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row border-right border border-dark">
        <div className="col-md-7">
          <div className="mt-2">
            <p>
              <Link to="#">{store.user.name}</Link> is offering: 
            </p>
          </div>
          <div className="d-flex flex-column align-items-center text-center p-1 pb-5">
            <div className=" justify-content-between align-items-center mb-3">
              <h4 className="text-right">{title}</h4>
            </div>
            <img
              className="mt-2"
              width="250px"
              src="https://picsum.photos/200/300"
            />
          </div>
        </div>
        <div
          className="col-md-5 d-flex align-items-center"
          style={{ height: "500px" }}
        >
          <div className=" p-3 py-5">
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Author</label>
                <p>{author}</p>
              </div>
              <div className="col-md-12">
                <label className="labels">Publisher</label>
                <p>{publisher}</p>
              </div>
              <div className="col-md-12">
                <label className="labels">Genre</label>
                <p>{genre}</p>
              </div>
              <div className="col-md-12">
                <label className="labels">Language</label>
                <p>{language}</p>
              </div>
              <div className="col-md-12">
                <label className="labels">Description</label>
                <p>{description}</p>
              </div>
            </div>
            <Link to="/formswap">
              <button type="button" className="btn btn-secondary my-3">
                Connect/swap
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  user: PropTypes.string,
  id: PropTypes.string,
  book_picture: PropTypes.string,
  title: PropTypes.string,
  author: propTypes.string,
  publisher: propTypes.string,
  genre: propTypes.string,
  language: propTypes.string,
  description: PropTypes.string,
};

export default BookCard;
