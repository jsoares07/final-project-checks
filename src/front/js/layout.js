import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";

import { Login } from "./pages/login.js";
import { Signup } from "./pages/signup.js";
import injectContext from "./store/appContext";
import { EditProfile } from "./pages/edit-profile.js";
import { Resetpassword } from "./pages/resetpassword.js"
import { Forgetpassword } from "./pages/forgetpassword.js";
import { Emailtoreset } from "./component/emailtoreset.js";
import { Profile } from "./pages/profile.js";

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
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/edit-profile">
              <EditProfile />
            </Route>
						<Route exact path="/forgetpassword">
							<Forgetpassword />
						</Route>
						<Route exact path="/emailtoreset">
							<Emailtoreset />
						</Route>
						<Route exact path="/resetpassword">
							<Resetpassword />
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
