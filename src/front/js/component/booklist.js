import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

const Booklist = (props) => {
    const { store, actions } = useContext(Context);
    const {
        user,
        title,
        author,
        language,
    } = props;

    return (
        <div>
            <ul>
                <li>{title}</li>
                <li>{author}</li>
                <li>{language}</li>
            </ul>

        </div>
    );
};

Booklist.propTypes = {
    user: PropTypes.string,
    title: PropTypes.string,
    author: propTypes.string,
    language: propTypes.string,
};

export default Booklist;
