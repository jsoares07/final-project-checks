import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/home.css";

function Navbarlogin() {
  return (
<div>
        <nav className="navbar navbar-expand-md">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">LOGO</span>
				</Link>
				<div className="ml-auto">


                    {/* DROPDOWN */}


                    
                    <div class="dropdown">

                    <Link to="/">
                    
                    <button type="button" className="btn btn-outline-light me-1"><i class="fa-solid fa-plus"></i></button>
                    </Link>
                    <Link to="/">
						<button type="button" className="btn btn-outline-light me-1"> <i class="fa-solid fa-bell"></i></button>
					</Link>
                    <Link to="/">
						<button type="button" className="btn btn-outline-light me-1"><i class="fa-solid fa-heart"></i></button>
					</Link>


                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-user"></i>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li><button class="dropdown-item" type="button">Profile</button></li>
                                        <li><button class="dropdown-item" type="button">Configuration</button></li>
                                        <li><button class="dropdown-item" type="button">Something else here</button>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Log Out</a></li>
                                        </li>
                                    </ul>
                                </div>


        {/* <div class="btn-group">
            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Small button
            </button>
                    <ul class="dropdown-menu">
                        ...
                    </ul>
        </div>

        <div class="btn-group">
            <button class="btn btn-secondary btn-sm" type="button">
                Small split button
            </button>
            <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
                    <ul class="dropdown-menu">
                        ...
                    </ul>
        </div> */}



					 <Link to="/login">

						<button type="button" className="btn btn-outline-light me-1"><i className="fa-brands fa-gratipay"></i></button>
					</Link>
					<Link to="/signup">
						<button type="button" className="btn btn-outline-light ms-1"><i className="fa-solid fa-circle-user"></i></button>
					</Link> */}
				</div>
			</div>
		</nav>
</div>
  )
} 

export default Navbarlogin