import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Navbar from "./../component/navbar.js";
import Footer from "./../component/footer";

export const Offerbook = () => {
    const { store, actions } = useContext(Context);

    return (  
    <div>
        <Navbar />
        <div className=" container card">
            <div className="card-body">
                <form>
                    <div class="row mb-3">
                        <label for="bookTitle" class="col-sm-2 col-form-label">Title of the book</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="bookTitle" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="author" class="col-sm-2 col-form-label">Author</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="author" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="editor" class="col-sm-2 col-form-label">Editor</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="editor" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="genre" class="col-sm-2 col-form-label">Genre</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="genre" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="language" class="col-sm-2 col-form-label">Language</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="language" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="descriptn" class="form-label">Description</label>
                        <input type="text" class="form-control" id="descriptn" placeholder="Decribe briefly the synopsis of the book" />
                    </div>
                    <div class="mb-3">
                        <label for="formFileMultiple" className="form-label">Upload file(s)</label>
                        <input className="form-control" type="file" id="formFileMultiple" multiple />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
        <Footer />
    </div> 
    );
};