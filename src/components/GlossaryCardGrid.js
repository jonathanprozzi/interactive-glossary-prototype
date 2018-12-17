import React from "react";
import styled from "styled-components";
import GlossaryCard from "./GlossaryCard";
import { terms } from "../data";

const GlossaryCardGrid = props => (
  <MainGrid>
    {terms.map(term => (
      <GlossaryCard termTitle={term.title} termDefinition={term.definition} />
    ))}
  </MainGrid>
);

export default GlossaryCardGrid;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
