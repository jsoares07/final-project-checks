import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import BookCard from "./book-description-card";
import { Context } from "../store/appContext";

import "../../styles/home.css";

const BookLogicCard = () => {
  const { store, actions } = useContext(Context);

  return (
    <BookCard

      id={store.book.book_id}
      // book_picture={store.book_picture}
      title={store.book.title}
      author={store.book.author}
      publisher={store.book.publisher}
      genre={store.book.publisher}
      language={store.book.language}
      description={store.book.description}
    />
  );
};

export default BookLogicCard;
