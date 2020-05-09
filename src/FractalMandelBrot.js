import React, { useMemo, useEffect, useState, Suspense } from "react";
import { Vector2 } from "three";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { useThree, useFrame } from "react-three-fiber";
import styled from "styled-components";
import { CanvasContainer } from "./CanvasContainer";
import { Text } from "./CanvasContainer";
import { ButtonImageUpload } from "./ButtonImageUpload";
import { StandardEffects } from "drei";

const Mesh = ({ bounds }) => {
  const { mouse } = useThree();

  const shaderData = useMemo(() => {
    const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

    const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  varying vec3 pos;

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5*u_resolution) / u_resolution.y;
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
    col.rb += gl_FragCoord.xy / u_resolution * 0.5 + t;
    gl_FragColor=vec4(col, 1.0);
  }
`;

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new Vector2() },
      u_mouse: { value: mouse },
    };

    return { vertexShader, fragmentShader, uniforms };
  }, [mouse]);

  useEffect(() => {
    shaderData.uniforms.u_resolution.value.x = bounds.width;
    shaderData.uniforms.u_resolution.value.y = bounds.height;
  }, [bounds, shaderData]);

  useFrame(() => {
    shaderData.uniforms.u_time.value += 0.05;
  });

  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
      <shaderMaterial attach="material" {...shaderData} />
    </mesh>
  );
};

export const FractalMandelBrot = () => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  return (
    <CanvasContainer text="Example of a MandelBrot fractal pattern." measure={ref}>
      <Mesh bounds={bounds} />
      <Suspense fallback={null}>
        <StandardEffects bloom={false} ao={false} smaa={true} />
      </Suspense>
    </CanvasContainer>
  );
};
