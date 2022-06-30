import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import "../../styles/home.css";

import Footer from "./../component/footer";
import Navbarlogin from "../component/navbar-login";

import { URLbase } from "../../../../secrets.js";

export const Offerbook = () => {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publisher, setPublisher] = useState();
  const [genre, setGenre] = useState();
  const [language, setLanguage] = useState();
  const [description, setDescription] = useState();
  const [owner_user_id, setowner_user_id] = useState();
  // const [book_picture, setBookPicture] = useState();



  // const URLbase = "https://3001-heylga-finalproject-59atkmezlzj.ws-eu47.gitpod.io"


  const onSubmit = () => {
    console.log("submit working");

    if (title && author && publisher && genre && language && description) {
      // hacemos el fetch
      FetchOfferBook(title, author, publisher, genre, language, description);
      alert("Your book has been added");
      // <Redirect to="/my-profile" />
    } else {
      //te faltan datos
      alert("Information is missing");
    }
  };

  const FetchOfferBook = (
    title,
    author,
    publisher,
    genre,
    language,
    description,
  ) => {
    // fetch
    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: author,
        publisher: publisher,
        genre: genre,
        language: language,
        description: description,
        owner_name: store.user.name,
        // owner_name: store.user.name
      }),
    };

    console.log("info after fetch --->", post);

    fetch(`${URLbase}/api/offerbook`, post)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const onTypeTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const onTypeAuthor = (e) => {
    console.log(e.target.value);
    setAuthor(e.target.value);
  };

  const onTypePublisher = (e) => {
    console.log(e.target.value);
    setPublisher(e.target.value);
  };

  const onTypeGenre = (e) => {
    console.log(e.target.value);
    setGenre(e.target.value);
  };

  const onTypeLanguage = (e) => {
    console.log(e.target.value);
    setLanguage(e.target.value);
  };

  const onTypeDescription = (e) => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };

  const onPicture = (e) => {
    console.log(e.target.value);
    setBookPicture(e.target.value);
  };

  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div>

      <Navbarlogin />
      <div className=" container card center mt-5 mb-5">
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <label for="bookTitle" className="col-sm-2 col-form-label">
                Title of the book
              </label>
              <div className="col-sm-10">
                <input
                  type="title"
                  className="form-control"
                  id="bookTitle"
                  placeholder="Title of the Book"
                  value={title}
                  onChange={onTypeTitle}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="author" className="col-sm-2 col-form-label">
                Author
              </label>
              <div className="col-sm-10">
                <input
                  type="author"
                  className="form-control"
                  id="author"
                  placeholder="Author"
                  value={author}
                  onChange={onTypeAuthor}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="publisher" className="col-sm-2 col-form-label">
                Publisher
              </label>
              <div className="col-sm-10">
                <input
                  type="publisher"
                  className="form-control"
                  id="publisher"
                  placeholder="Publisher"
                  value={publisher}
                  onChange={onTypePublisher}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="genre" className="col-sm-2 col-form-label">
                Genre
              </label>
              <div className="col-sm-10">
                <input
                  type="genre"
                  className="form-control"
                  id="genre"
                  placeholder="Genre"
                  value={genre}
                  onChange={onTypeGenre}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="language" className="col-sm-2 col-form-label">
                Language
              </label>
              <div className="col-sm-10">
                <input
                  type="language"
                  className="form-control"
                  id="language"
                  placeholder="Language"
                  value={language}
                  onChange={onTypeLanguage}
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="descriptn" className="form-label">
                Description
              </label>
              <input
                type="description"
                className="form-control"
                id="description"
                placeholder="Decribe briefly the synopsis of the book"
                value={description}
                onChange={onTypeDescription}
              />
            </div>

            <div className="container d-flex">
              <div className="mb-3">
                <label for="formFileMultiple" className="form-label">
                  Upload file(s)
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
              </div>

            </div>
            <div className="col text-center">
              <button
                type="submit"
                className="btn btn-primary float-end mt-5 me-5"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
            <br></br>
            <img src={baseImage} height="200px" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
