import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Button = styled.button`
  background-color: ${({ primary }) => (primary ? "green" : "pink")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid transparent;
  border-radius: 3px;
`;

const GlobalStyle = createGlobalStyle({});

export default function App() {
  return (
    <div>
      <Button primary>Normal Button</Button>
      <Button>Primary</Button>
    </div>
  );
}
