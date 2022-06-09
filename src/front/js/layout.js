import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./component/login.js";
import { Signup } from "./component/signup.js";
import injectContext from "./store/appContext";
import { Offerbook } from "./pages/Offerbook";
import { Other_users_profile } from "./pages/other-users-profile"
import { Reviewuser } from "./pages/Reviewuser"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/offerbook">
							<Offerbook />
						</Route>
						<Route exact path="/other-users-profile">
							<Other_users_profile />
						</Route>
						<Route exact path="/reviewuser">
							<Reviewuser />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
