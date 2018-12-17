import React from "react";
import styled from "styled-components";

const GlossaryCard = props => (
  <CardWrapper>
    <GlossaryTitle>{props.termTitle}</GlossaryTitle>
    <GlossaryDefinition>{props.termDefinition}</GlossaryDefinition>
    <RevealButton>Reveal Definition</RevealButton>
  </CardWrapper>
);

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

const GlossaryTitle = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  color: #4f4f4f;
`;

const GlossaryDefinition = styled.p`
  font-size: 2rem;
`;

const RevealButton = styled.button`
  background-color: #0091c9;
  color: #fafafa;
  padding: 1rem 2rem;
  border-radius: 5px;
`;

export default GlossaryCard;
