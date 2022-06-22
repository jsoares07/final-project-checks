import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import BookCard from "./book-description-card";
import { Catcher } from "./../../img/catcher.jpg";
import { Crime } from "./../../img/crime.jpg";
import { littleprince } from "./../../img/littleprince.jpg";
import { we } from "./../../img/we.jpg";
import { Context } from "../store/appContext";

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

  // const bookInfo = () => {
  //   store.book.map((cardItem, index) => {
  //     return (
  //       <BookCard
  //         key={index}
  //         id={cardItem.id}
  //         title={cardItem.title}
  //         author={cardItem.author}
  //         publisher={cardItem.publisher}
  //         genre={cardItem.publisher}
  //         language={cardItem.language}
  //         book_picture={cardItem.book_picture}
  //         description={cardItem.description}
  //       />
  //     );
  //   });
  // };
  // return <div className="conteiner center">{bookInfo}</div>;
};

export default BookLogicCard;
