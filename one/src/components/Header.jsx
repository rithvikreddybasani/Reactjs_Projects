import React from "react";

const Header = ({ ind, index, select }) => {
  return <button onClick={() => select(index)}>{ind}</button>;
};

export default Header;
