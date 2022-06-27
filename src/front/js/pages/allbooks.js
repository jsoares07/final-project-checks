import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/navbar";
import ShowAll from "../component/showall.js";
import Footer from "../component/footer.js";
import "../../styles/index.css";
import "../../styles/home.css";

export const AllBooks = () => {
  return (
    <div className="">
      <Navbar />
      <ShowAll />
      <Footer />
    </div>
  );
};
