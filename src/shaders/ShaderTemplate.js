import React from "react";
import { ShaderEditorLayout } from "../components/ShaderEditorLayout";

const VERTEX_SHADER = /*glsl*/`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /*glsl*/`
  varying vec2 vUv;
  uniform float u_time;
  uniform float u_aspect;
  uniform vec2 u_mouse;

  void main() {
    vec2 st = vUv;
    st.y += sin(u_time) * 0.05;
    vec2 mouse = (u_mouse + 1.0) / 2.0;
    gl_FragColor = vec4(st.x, st.y, (mouse.x + mouse.y) / 2.0, 1.0);
  }
`;

export const ShaderTemplate = () => {
  return (
    <ShaderEditorLayout
      description="Basic template to play with shaders."
      textureEnable={false}
      vertexShader={VERTEX_SHADER}
      fragmentShader={FRAGMENT_SHADER}
    >
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
    </ShaderEditorLayout>
  );
};

