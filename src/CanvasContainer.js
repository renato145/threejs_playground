import React from "react";
import styled from "styled-components";
import { Canvas } from "react-three-fiber";
import { Stats } from "drei";

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  & canvas:focus {
    outline-width: 0px;
  }
`;

export const Text = styled.div`
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  padding-top: 0.5em;
`;

export const CanvasContainer = ({ text, children, xtra, measure }) => {
  return (
    <Container ref={measure}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {children}
        <Stats />
      </Canvas>
      {xtra && xtra}
      {text && <Text>{text}</Text>}
    </Container>
  );
};
