import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";

import { Signup } from "./pages/signup.js";
import { Login } from "./pages/login.js";

import { MyProfile } from "./pages/my-profile.js";
import { EditProfile } from "./pages/edit-profile.js";

import { Forgetpassword } from "./pages/forgetpassword.js";
import { Emailresetsecurity } from "./component/emailresetsecurity";
import { Security } from "./pages/security";
import { PasswordChanged } from "./pages/passwordchanged";

import { Offerbook } from "./pages/Offerbook";
import { BookDescription } from "./pages/book-description";
import { AllBooks } from "./pages/allbooks.js";

import { ProfileShort } from "./pages/profile-short";


import { Swapmessage } from "./pages/swapmessage.js";
import { Swapconfirmation } from "./pages/swapconfirmation.js";
import { Formswap } from "./pages/formswap";

import { Profilepic } from "./component/profilepic";
import { Reviewuser } from "./pages/reviewuser";


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

            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/my-profile/:id">
              <MyProfile />
            </Route>
            <Route exact path="/my-profile" component={MyProfile}>
              <MyProfile />
            </Route>
            <Route exact path="/edit-profile/:id" >
              <EditProfile />
            </Route>
            <Route exact path="/edit-profile" component={EditProfile}>
              <EditProfile />
            </Route>


            <Route exact path="/forgetpassword" component={Forgetpassword}>
              <Forgetpassword />
            </Route>
            <Route exact path="/emailtoresetsecurity" component={Emailresetsecurity}>
              <Emailresetsecurity />
            </Route>
            <Route exact path="/security" component={Security}>
              <Security />
            </Route>
            <Route exact path="/passwordchanged" component={PasswordChanged}>
              <PasswordChanged />
            </Route>

            <Route exact path="/offerbook" component={Offerbook}>
              <Offerbook />
            </Route>
            <Route exact path="/book/:id">
              <BookDescription />
            </Route>
            <Route exact path="/allbooks">
              <AllBooks />
            </Route>

            <Route exact path="/user/:id">
              <ProfileShort />
            </Route>


            <Route exact path="/swapmessage">
              <Swapmessage />
            </Route>
            <Route exact path="/swapconfirmation">
              <Swapconfirmation />
            </Route>
            <Route exact path="/formswap">
              <Formswap />
            </Route>

            <Route exact path="/profilepic" component={Profilepic}>
              <Profilepic />
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
