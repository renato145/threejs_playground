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
  uniform sampler2D u_texture;

  void main() {
    vec2 uv = vUv - 0.5;
    uv.x *= u_aspect;
    vec2 mouse = (u_mouse + 1.0) / 2.0;
    float zoom = pow(10.0, 5.0 * (0.1 - mouse.y));

    vec2 c = uv*zoom*2.8;
    c += vec2(-0.69955, 0.37999);

    vec2 z = vec2(0.0);
    float iter = 0.0;

    float ma = 100.0;
    const float max_iter = 100.0;

    for(float i=0.0; i<max_iter; i++) {
      z = vec2(z.x*z.x - z.y*z.y, 2.0*z.x*z.y) + c; // z^2 of a complex number
      // ma = distance(z, mouse)*mouse.x*0.5;
      // z *= mouse.x;
      if(length(z) > 2.0) break;
      iter++;
    }

    float f = iter/max_iter;
    // f = ma;

    vec3 col = vec3(f);
    vec2 t = vec2(sin(u_time*0.1), cos(u_time*0.15))*0.5;
    col.rb += vUv * 0.5 + t;
    gl_FragColor=vec4(col, 1.0);
  }
`;

export const FractalMandelBrot = () => {
  return (
    <ShaderEditorLayout
      description="Example of a MandelBrot fractal pattern."
      textureEnable={false}
      vertexShader={VERTEX_SHADER}
      fragmentShader={FRAGMENT_SHADER}
    >
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
    </ShaderEditorLayout>
  );
};
