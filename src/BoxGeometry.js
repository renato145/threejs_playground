import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { OrbitControls } from "drei";
import { CanvasContainer } from "./CanvasContainer";

const Mesh = () => {
  const ref = useRef();
  const [hovered, setHover] = useState(false);

  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  return (
    <mesh
      ref={ref}
      scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
      <OrbitControls />
    </mesh>
  );
};

export const BoxGeometry = () => {
  return (
    <CanvasContainer text="Simple box geometry with hover event.">
      <Mesh />
    </CanvasContainer>
  );
};
