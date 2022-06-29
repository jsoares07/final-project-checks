import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/navbar";
import ShowAll from "../component/showall.js";
import Footer from "../component/footer.js";
import "../../styles/index.css";
import "../../styles/home.css";
import Navbarlogin from "../component/navbar-login";

export const AllBooks = () => {
  const { store, actions } = useContext(Context);


	const loggedInRender = (
		<>
			<Navbarlogin />
      <ShowAll />
      <Footer />
		</>
	);

	const notLoggedInRender = (
		<>
			<Navbar />
      <ShowAll />
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
