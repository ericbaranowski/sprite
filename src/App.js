import React, { Component } from "react";
import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Editor />
        <Preview
          value={`
        graph TD;
          A-->B;
          A-->C;
          B-->D;
          C-->D;
        `}
        />
      </div>
    );
  }
}

export default App;
