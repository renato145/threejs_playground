import React, { useMemo } from "react";
import { CanvasContainer } from "./CanvasContainer";
import { useThree, useFrame } from "react-three-fiber";

const Mesh = () => {
  const { mouse, clock } = useThree();

  const shaderData = useMemo(() => {
    const vertexShader = /*glsl*/`
  varying vec2 vuv;

  void main() {
    vuv = uv;
    gl_Position = vec4( position, 1.0 );
  }
`;

    const fragmentShader = /*glsl*/`
  uniform float u_time;
  uniform vec2 u_mouse;
  varying vec2 vuv;

  void main() {
    vec2 st = vuv;
    st.y += sin(u_time) * 0.05;
    vec2 mouse = (u_mouse + 1.0) / 2.0;
    gl_FragColor = vec4(st.x, st.y, (mouse.x + mouse.y) / 2.0, 1.0);
  }
`;

    const uniforms = {
      u_time: { value: 0 },
      u_mouse: { value: mouse },
    };

    return { vertexShader, fragmentShader, uniforms };
  }, [ mouse ]);

  useFrame(() => {
    shaderData.uniforms.u_time.value += clock.elapsedTime / 1000; // miliseconds
  });

  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
      <shaderMaterial attach="material" {...shaderData} />
    </mesh>
  );
};

export const ShaderTemplate = () => {
  return (
    <CanvasContainer text="Basic template to play with shaders.">
      <Mesh />
    </CanvasContainer>
  );
};
