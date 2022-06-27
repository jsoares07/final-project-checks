import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/navbar";
import BookLogicCard from "../component/book-description-logic";
import Footer from "../component/footer.js";
import "../../styles/index.css";
import "../../styles/home.css";

export const BookDescription = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <Navbar />
      <BookLogicCard />
      <button onClick={() => console.log(store.book)}>BOOK</button>

      <Footer />
    </div>
  );
};
