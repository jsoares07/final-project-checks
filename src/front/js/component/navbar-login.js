import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import swopbook from "../../img/swopbook.png"
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
      <nav className="navbar navbar-expand-md ">
        <div className="container">
          <Link to="/">
            <img
              className="logoNav"
              src={swopbook}
              alt="Responsive image"
            />
          </Link>

          <div className="ml-auto">

            <Link to="/allbooks">
              <button type="button" className="btn btn-outline-light me-1 float-end">
                See all books
              </button>
            </Link>


            {/* DROPDOWN */}

            <Dropdown isOpen={dropdownProfile} toggle={profileOpenDropdown} className="float-end">
              <DropdownToggle caret>
                <i class="fa-solid fa-user"></i>
              </DropdownToggle>
              <DropdownMenu
              >
                <DropdownItem>
                  <Link to="/my-profile">
                    Profile
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/edit-profile/:id">
                    Configuration
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => actions.logout()}>
                  Log Out
                </DropdownItem>

              </DropdownMenu>
            </Dropdown>

            <Link to="/Offerbook">
              <button type="button" className="btn btn-outline-light me-1 float-end"><i class="fa-solid fa-plus"></i></button>
            </Link>

          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbarlogin;
