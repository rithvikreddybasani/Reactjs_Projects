import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import First from "./components/First";
import Second from "./components/Second";

const Cards = styled.div`
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`;
const Global = createGlobalStyle`
      body {
        background-color: orange;
      }
`;

const Card = styled.p`
  font-size: 23px;
  border: 1px solid black;
  padding: 8px;
`;

export default function App() {
  return (
    <>
      <Global />
      <Cards>
        <First></First>
        <Second></Second>
      </Cards>
    </>
  );
}
