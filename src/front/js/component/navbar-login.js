import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

//LIBRERIA BOOTSTRAP FOR REACT

function Navbarlogin() {
    const { store, actions } = useContext(Context);
    const [dropdown, setDropdown] = useState(false);
    const [dropdownProfile, setDropdownProfile] = useState(false);

    const openCloseDropdown = () => {
		setDropdown(!dropdown);
	};

    const profileOpenDropdown = () => {
		setDropdownProfile(!dropdownProfile);
	};

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


                    <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>



                    <Link to="/allbooks">
            <button type="button" className="btn btn-outline-light me-1">
              See all books
            </button>
          </Link>


                    <Link to="/Offerbook">
                    <button type="button" className="btn btn-outline-light me-1"><i class="fa-solid fa-plus"></i></button>
                    </Link>
                    <Link to="/">
						<button type="button" className="btn btn-outline-light me-1"> <i class="fa-solid fa-bell"></i></button>
					</Link>
                    <Link to="/">
                    </Link>

                
				<DropdownToggle caret className="dropdownButton">
                <i class="fa-solid fa-heart"></i>{" "}
						{store.favorite.length}
				</DropdownToggle>
				<DropdownMenu right>
					{store.favorite.length > 0 ? (
						store.favorite.map((favorite, index) => {
							return (
								<DropdownItem key={index}>
									<div className="favAndTrash">
										{favorite}
										<i
											id="delete"
											className="far fa-trash-alt pointer trash"
											onClick={() => {
												actions.deleteFavorite({ index });
											}}
										/>
									</div>
								</DropdownItem>
							);
						})
					) : (
						<DropdownItem>
							<p>Emty</p>
						</DropdownItem>
					)}
				</DropdownMenu>
                
			</Dropdown>



            <Dropdown isOpen={dropdownProfile} toggle={profileOpenDropdown}>
    <DropdownToggle caret>
    <i class="fa-solid fa-user"></i>
    </DropdownToggle>
    <DropdownMenu
    >
      <DropdownItem>
          <Link to="/">
      Profile
      </Link>
      </DropdownItem>
      <DropdownItem>
          <Link to="/edit-profile">
      Configuration
      </Link>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem onClick={() => actions.logout()}>
       Log Out
      </DropdownItem>

    </DropdownMenu>
    </Dropdown>

            
                                </div>

				</div>
			</div>
		</nav>
</div>
  )
} 


export default Navbarlogin;
