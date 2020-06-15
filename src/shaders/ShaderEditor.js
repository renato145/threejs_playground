import React from "react";
import { ShaderEditorLayout } from "../components/ShaderEditorLayout";
import exampleTexture from "./textures/texture1.png";

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0 );
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  varying vec2 vUv;
  uniform float u_time;
  uniform float u_aspect;
  uniform vec2 u_mouse;
  uniform sampler2D u_texture;

  void main() {
    vec2 uv = vUv - 0.5;
    uv.x *= u_aspect;
    vec2 mouse = (u_mouse + 1.0) / 2.0; // 0-1

    uv *= 1.0; // control zoom 
    vec3 col = vec3(0.0);


    // Circle
    vec2 center = vec2(0.0);
    float r = 0.1;
    // r = 0.1 + sin(u_time)*0.02; // using time
    // center = clamp(u_mouse, -0.5, 0.5); // using mouse
    float pct = distance(uv, center);
    col += smoothstep(r, r-0.001, pct);

    // col += texture2D(u_texture, vUv).rgb; // texture example

    gl_FragColor=vec4(col, 1.0);
  }
`;

export const ShaderEditor = () => {
  return (
    <ShaderEditorLayout
      description="A simple shader code editor"
      texture={exampleTexture}
      vertexShader={VERTEX_SHADER}
      fragmentShader={FRAGMENT_SHADER}
    >
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
    </ShaderEditorLayout>
  );
};
