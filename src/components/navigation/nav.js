import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import './nav.css';

function Nav() {
  return (
    <header>
      <div className="just">
        <h1 className="h1">BookStore CMS</h1>
        <nav>
          <button className="button-2" type="button">
            <Link className="nav-button" to="/">Books</Link>
          </button>
          <button className="button-2" type="button">
            <Link className="nav-button" to="/categories">Categories</Link>
          </button>
        </nav>
      </div>
      <div className="Mask">
        <BsPersonFill className="profile" />
      </div>
    </header>
  );
}

export default Nav;
