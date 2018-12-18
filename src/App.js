import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlossaryCardGrid from "./components/GlossaryCardGrid";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <GlossaryCardGrid />
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
`;

export default App;
