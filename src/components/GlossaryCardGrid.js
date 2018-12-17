import React from "react";
import styled from "styled-components";
import GlossaryCard from "./GlossaryCard";
import { terms } from "../data";

const GlossaryCardGrid = props => (
  <MainGrid>
    {terms.map(term => (
      <GlossaryCard
        key={term.title}
        termTitle={term.title}
        termDefinition={term.definition}
      />
    ))}
  </MainGrid>
);

export default GlossaryCardGrid;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 2vh;
`;