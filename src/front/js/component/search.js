import React, { useState, useEffect, useContext } from "react";
import PropTypes, { func } from "prop-types";
import { Catcher } from "./../../img/catcher.jpg";
import { Crime } from "./../../img/crime.jpg";
import { littleprince } from "./../../img/littleprince.jpg";
import { we } from "./../../img/we.jpg";
import { Link } from "react-router-dom";
import ShowAll from "./showall";
import { Context } from "../store/appContext";

import "../../styles/home.css";




export default function Search() {
    const { store, actions } = useContext(Context);
    const [value, setValue] = useState("");

    const data = store.books;

    console.log('miremos', data)

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
    };


    const searching = () => {
        const filteredBooks = data
            .filter((book) => {
                const searchTerm = value.toLowerCase();
                const bookTitle = book.title.toLowerCase();


                return (
                    searchTerm &&
                    bookTitle.includes(searchTerm) &&
                    bookTitle !== searchTerm
                );
            })

        //debounce
        if (filteredBooks.length > 0 && value.length < 1 && filteredBooks.length > 0 === store.booksInSeach.length > 0) actions.setSearchingBooks(filteredBooks)
        return filteredBooks;
    }


    return (


        
        <div className="Search">
            <h1>Search</h1>

            <div className="search-container">
                <div className="search-inner mt-3 mb-5">
                    <input 
                    className="form-control rounded" placeholder="Book"
    
                    type="text" 
                    value={value} 
                    onChange={onChange} />
                    <button onClick={() => onSearch(value)}
                    aria-label="Search" aria-describedby="search-addon"
                    > 
                    
                    <span className=" input-group-text border-0 "
                    style={{borderColor: "transparent"}}
                    >
							<i className="fas fa-search"></i>
						</span>
                    
                     </button>
                </div>

                <div className="dropdown">
                    {
                        searching().slice(0, 10)
                            .map((book) => (
                                <a
                                    onClick={() => onSearch(book.title, book.author)}
                                    className="dropdown-row"
                                    key={book.title}
                                    href={`/book/${book.id}`}
                                >
                                    {book.title}
                                </a>
                            ))}
                </div>
            </div>
        </div>
    );
}
