import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/navbar";
import Navbarlogin from "../component/navbar-login";
import BookLogicCard from "../component/book-description-logic";
import Footer from "../component/footer.js";
import "../../styles/index.css";
import "../../styles/home.css";

export const BookDescription = () => {
  const { store, actions } = useContext(Context);

  const loggedInRender = (
    <>
      <Navbarlogin />
      <BookLogicCard />
      <Footer />
    </>
  );

  const notLoggedInRender = (
    <>
      <Navbar />
      <BookLogicCard />
      <Footer />
    </>
  );

  return (
    <div className="">
      {store.isLoggedIn
        ? loggedInRender
        : notLoggedInRender}
    </div>
  );
};
