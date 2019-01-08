import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Header extends Component {
  state = {
    show: false
  };
  toggleMenu = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const { show } = this.state;
    const classDemo = show
      ? "w3-bar-block w3-hide-large w3-hide-medium w3-show"
      : "w3-bar-block w3-hide-large w3-hide-medium w3-hide";
    return (
      <header>
        <Helmet>
          <title>ParcelReact</title>
          <meta name="description" content="description" />
          <meta name="keywords" content="parcel, react" />
          <meta name="author" content="azul" />
        </Helmet>

        <div className="w3-top">
          <div className="w3-bar w3-black">
            <a href="#" className="w3-bar-item w3-button">
              Home
            </a>
            <a href="#" className="w3-bar-item w3-button w3-mobile w3-hide-small">
              Link 1
            </a>
            <a href="#" className="w3-bar-item w3-button w3-mobile w3-hide-small">
              Link 2
            </a>
            <a
              href="javascript:void(0)"
              className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
              onClick={this.toggleMenu}
            >
              &#9776;
            </a>

            <div id="demo" className={classDemo}>
              <a href="#" className="w3-bar-item w3-button">
                Link 1
              </a>
              <a href="#" className="w3-bar-item w3-button">
                Link 2
              </a>
              <a href="#" className="w3-bar-item w3-button">
                Link 3
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
