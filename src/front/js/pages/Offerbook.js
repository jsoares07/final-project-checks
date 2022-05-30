import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Footer from "./../component/footer";
import Navbarlogin from "../component/navbar-login";

export const Offerbook = () => {
    const { store, actions } = useContext(Context);

    return (  
    <div>
        <Navbarlogin />
        <div className=" container card">
            <div className="card-body">
                <form>
                    <div className="row mb-3">
                        <label for="bookTitle" className="col-sm-2 col-form-label">Title of the book</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="bookTitle" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="author" className="col-sm-2 col-form-label">Author</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="author" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="editor" className="col-sm-2 col-form-label">Editor</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="editor" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="genre" className="col-sm-2 col-form-label">Genre</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="genre" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="language" className="col-sm-2 col-form-label">Language</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="language" />
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