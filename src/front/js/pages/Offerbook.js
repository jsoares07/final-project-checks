import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Navbar from "./../component/navbar.js";
import Footer from "./../component/footer";

export const Offerbook = () => {
    const { store, actions } = useContext(Context);

    return (  <div>
            <Navbar />
            <Footer />
    </div> );
};