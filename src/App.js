import React, { Component } from "react";
import styled from "styled-components";
import GlossaryCardGrid from "./components/GlossaryCardGrid";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Interactive Glossary Prototype</h1>
        </header>
        <ContentWrapper>
          <GlossaryCardGrid />
        </ContentWrapper>
      </div>
    );
  }
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
