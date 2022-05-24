import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">LOGO</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button type="button" className="btn btn-outline-light me-1">Log In</button>
					</Link>
					<Link to="/demo">
						<button type="button" className="btn btn-outline-light ms-1">Sign Up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
