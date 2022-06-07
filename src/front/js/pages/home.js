import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Navbar from "./../component/navbar.js";
import Jumbotron from "./../component/jumbotron.js";
import ListCards from "./../component/listCards.js";
import Map from "./../component/map.js";
import Footer from "./../component/footer.js";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<Navbar />
			<Jumbotron />
			<ListCards />
			<Map />
			<Footer />
		</div>
	);
};
