import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Header extends Component {
  render() {
    return (
      <header>
        <Helmet>
          <title>ParcelReact</title>
          <meta name="description" content="description" />
          <meta name="keywords" content="parcel, react" />
          <meta name="author" content="azul" />
        </Helmet>
        <a
          href="#main-menu"
          role="button"
          id="main-menu-toggle"
          className="menu-toggle"
          aria-expanded="false"
          aria-controls="main-menu"
          aria-label="Open main menu"
        >
          <span className="sr-only">Open main menu</span>
          <span aria-hidden="true"> = Menu</span>
        </a>

        <h1 className="logo">hamburgers</h1>

        <nav
          id="main-menu"
          role="navigation"
          className="main-menu"
          aria-expanded="false"
          aria-label="Main menu"
        >
          <a
            href="#main-menu-toggle"
            role="button"
            id="main-menu-close"
            className="menu-close"
            aria-expanded="false"
            aria-controls="main-menu"
            aria-label="Close main menu"
          >
            <span className="sr-only">Close main menu</span>
            <span aria-hidden="true">x</span>
          </a>
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <a href="#main-menu-toggle" className="backdrop" tabIndex="-1" aria-hidden="true" hidden />
      </header>
    );
  }
}

export default Header;
