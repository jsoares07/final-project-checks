import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import ProfileShort from "./../pages/profile-short";
import { Context } from "../store/appContext";

import "../../styles/home.css";

const useridshortlogic = () => {
  const { store, actions } = useContext(Context);

  return (
    <ProfileShort

      id={store.user.user_id}

      // book_picture={store.book_picture}
      name={store.user.name}
      city={store.user.city}
    />
  );

};

export default useridshortlogic;
