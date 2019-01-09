import React, { Component } from "react";
import Header from "../components/Header";
import { SampleArticle } from "../components/Sample";
console.info("info", process);

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <SampleArticle />
      </div>
    );
  }
}

export default App;
