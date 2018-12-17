import React, { Component } from "react";
import GlossaryCardGrid from "./components/GlossaryCardGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Interactive Glossary Prototype</h1>
        </header>
        <GlossaryCardGrid />
      </div>
    );
  }
}

export default App;
