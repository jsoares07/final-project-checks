import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Navbar from "./../component/navbar.js";
import Jumbotron from "./../component/jumbotron.js";
import ListCards from "./../component/listCards.js";
import Map from "./../component/map.js";
import Footer from "./../component/footer.js";

import Prueba from "../component/map-test";
import MapTest from "../component/map-prueba";

import "../../styles/home.css";
import Navbarlogin from "../component/navbar-login";




export const Home = () => {
	const { store, actions } = useContext(Context);


	const loggedInRender = (
		<>
			<Navbarlogin />
			<Jumbotron />
			<ListCards />
			{/* <Map /> */}
			<Footer />
		</>
	);

	const notLoggedInRender = (
		<>
			<Navbar />
			<Jumbotron />
			<ListCards />

			<Map />
			{/* <MapTest /> */}
			{/* <Prueba /> */}
			{/* <Map /> */}

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
