import React, { useEffect, useState } from "react";
import styled from "styled-components";

const global = 600;
const birdh = 30;

export default function App() {
  const [dis, setDis] = useState(200);
  const [left, setleft] = useState(100);

  useEffect(() => {
    let setTime;
    if (dis < global - birdh) {
      setTime = setInterval(() => {
        setDis((dis) => dis + 5);
        setleft((left) => left + 5);
      }, 50);
    }
    return () => clearInterval(setTime);
  });

  const handle = () => {
    setDis((dis) => dis - 10);
  };

  return (
    <Home onClick={handle}>
      <Background>
        <Bird top={dis} left={left} />
      </Background>
    </Home>
  );
}
const Home = styled.div`
  height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  background-image: url(https://i.pinimg.com/736x/72/5e/5d/725e5dc00ba49c240cd489e7b87e0496.jpg);
  background-repeat: no-repeat;
  background-size: 400px 600px;
  height: 600px;
  width: 400px;
  background-color: aqua;
`;

const Bird = styled.div`
  background-image: url(https://i.pinimg.com/originals/61/91/45/619145ded30fa9757b76a11601800137.jpg);
  background-repeat: no-repeat;
  background-size: 30px 30px;
  height: 30px;
  width: 30px;
  position: relative;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;
