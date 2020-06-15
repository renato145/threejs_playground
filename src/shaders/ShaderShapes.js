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
    vec3 color = vec3(0.0);
    vec2 mouse = u_mouse;

    float d = 0.0;
    st = st * 2. - 1.; // normalize between 0-1
    st.x -= mouse.x;
    st.y = step(1.0, st.y);
    d = length( abs(st) - sin(u_time/2.0) );
    color = vec3(st.x, st.y + mouse.y*0.25, 0.0);
    color.b += (mouse.x + 1.0) / 2.0 * 0.35;
    color += fract(d*12.0);

    gl_FragColor=vec4(color, 1.0);
  }
`;

export const ShaderShapes = () => {
  return (
    <ShaderEditorLayout
      description="Playing with shapes on shaders."
      textureEnable={false}
      vertexShader={VERTEX_SHADER}
      fragmentShader={FRAGMENT_SHADER}
    >
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
    </ShaderEditorLayout>
  );
};
