import React from "react";
import styled from "styled-components";

const GlossaryCard = props => (
  <CardWrapper>
    <GlossaryTitleContainer>
      <GlossaryTitle>{props.termTitle}</GlossaryTitle>
    </GlossaryTitleContainer>
    <GlossaryPhoto src={props.termImage} />
    <GlossaryDefinition>{props.termDefinition}</GlossaryDefinition>
    <RevealButton>Reveal Definition</RevealButton>
  </CardWrapper>
);

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2vh 2vw;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const GlossaryTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  background: rgba(0, 145, 201, 0.5);
  padding: 2vh 2vw;
`;

const GlossaryTitle = styled.h3`
  margin: 0px;
  text-transform: uppercase;
  font-size: 3rem;
  color: #000;
`;

const GlossaryPhotoContainer = styled.figure``;

const GlossaryPhoto = styled.img``;

const GlossaryDefinition = styled.p`
  font-size: 2rem;
`;

const RevealButton = styled.button`
  font-family: Avenir;
  font-size: 1.8rem;
  font-weight: bolder;
  background-color: #fafafa;
  color: #0091c9;
  border: 2px solid #0091c9;
  padding: 1rem 2rem;
  margin: 2vh 2vw;
  border-radius: 5px;

  &:hover {
    border: 2px solid #0091c9;
    background-color: #0091c9;
    color: #fafafa;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }
`;

export default GlossaryCard;
