import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import './styles/Navbar.css';


export default function Navbar() {
  return (
    <Fragment>
        <ul class="nav justify-content-end nav_styles">
          <li class="nav-item">
            <NavLink className="nav-link" exact activeClassName='is-active' to="/">
              Random Cat 
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link"  exact activeClassName='is-active'  to="/categories">
              Random by category
            </NavLink>
          </li>
        </ul>
      </Fragment>
  )
}



