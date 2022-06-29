import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Card from "./card.js";
import { Catcher } from "./../../img/catcher.jpg";
import { Crime } from "./../../img/crime.jpg";
import { littleprince } from "./../../img/littleprince.jpg";
import { we } from "./../../img/we.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export default function Search() {
    const { store, actions } = useContext(Context);
    const [value, setValue] = useState("");

    const data = store.books;

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    const link = "https://3001-heylga-finalproject-59atkmezlzj.ws-eu47.gitpod.io/allbooks"

    return (
        <div className="Search">
            <h1>Search</h1>

            <div className="search-container">
                <div className="search-inner">
                    <input type="text" value={value} onChange={onChange} />
                    <button onClick={() => onSearch(value)}> Search </button>
                </div>
                <div className="dropdown">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const bookTitle = item.title.toLowerCase();
                            const bookAuthor = item.author.toLowerCase();

                            return (
                                searchTerm &&
                                bookTitle.startsWith(searchTerm) &&
                                bookTitle !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <a
                                onClick={() => onSearch(item.title, item.author)}
                                className="dropdown-row"
                                key={item.title}
                                href={link}
                                target="_blank"
                            >
                                {item.title}
                            </a>
                        ))}
                </div>
            </div>
        </div>
    );
}
