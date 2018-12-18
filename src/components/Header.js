import React from "react";
import styled from "styled-components";

const Header = () => (
  <Masthead>
    <SiteTitle>Interactive Glossary: Prototype v1</SiteTitle>
  </Masthead>
);

const Masthead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0px;
  background-color: #0091c9;
`;

const SiteTitle = styled.h1`
  font-size: 2.25rem;
  color: #ffffff;
  padding: 0px;
  margin: 0px;

  @media only screen and (min-width: 375px) {
    font-size: 3rem;
    margin: 0 10vw;
  }
`;

export default Header;
