import React, { Component } from "react";
import Header from "../components/Header";
console.info("info", process);

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />

        <div
          className="w3-sidebar w3-bar-block w3-border-right"
          style={{ display: "none" }}
          id="mySidebar"
        >
          <button className="w3-bar-item w3-large">Close &times;</button>
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

        <div className="w3-container">
          <p>You must click on the "hamburger" icon (top left) to open it.</p>
          <p>You must click on the "hamburger" icon (top left) to open it.</p>
          <p>You must click on the "hamburger" icon (top left) to open it.</p>
          <p>You must click on the "hamburger" icon (top left) to open it.</p>
          <p>You must click on the "hamburger" icon (top left) to open it.</p>
          <p>You must click on the "hamburger" icon (top left) to open it.</p>
          <p>You must click on the "hamburger" icon (top left) to open it.</p>
          <p>You must click on the "hamburger" icon (top left) to open it.</p>
          <p>You must click on the "hamburger" icon (top left) to open it.</p>
          <p>The sidebar will hide a part of the page content.</p>
        </div>
      </div>
    );
  }
}

export default App;
