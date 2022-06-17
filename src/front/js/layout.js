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
import { Security } from "./pages/security";
import { Offerbook } from "./pages/Offerbook";

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
            <Route exact path="/" component={Home}>
              <Home />
            </Route>
            <Route exact path="/login/:id">
              <Profile />
            </Route>
            <Route exact path="/login" component={Login}>
              <Login />
            </Route>
            <Route exact path="/signup" component={Signup}>
              <Signup />
            </Route>
            <Route exact path="/profile" component={Profile}>
              <Profile />
            </Route>
            <Route exact path="/edit-profile" component={EditProfile}>
              <EditProfile />
            </Route>
						<Route exact path="/forgetpassword" component={Forgetpassword}>
							<Forgetpassword />
						</Route>
            <Route exact path="/offerbook" component={Offerbook}>
							<Offerbook />
						</Route>
						<Route exact path="/emailtoreset" component={Emailtoreset}>
							<Emailtoreset />
						</Route>
						<Route exact path="/resetpassword" component={Resetpassword}>
							<Resetpassword />
						</Route>
            <Route exact path="/security" component={Security}>
              <Security />
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
