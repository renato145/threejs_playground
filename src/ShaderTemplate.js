import React, { useMemo, useEffect } from "react";
import { Vector2 } from "three";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { CanvasContainer } from "./CanvasContainer";
import { useThree, useFrame } from "react-three-fiber";

const Mesh = ({ bounds }) => {
  const { mouse } = useThree();

  const shaderData = useMemo(() => {
    const vertexShader = `
  void main() {
    gl_Position = vec4( position, 1.0 );
  }
`;

    const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;


  void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.y += sin(u_time) * 0.05;
    vec2 mouse = (u_mouse + 1.0) / 2.0;
    gl_FragColor=vec4(st.x, st.y, (mouse.x + mouse.y) / 2.0, 1.0);
  }
`;

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new Vector2() },
      u_mouse: { value: mouse },
    };

    return { vertexShader, fragmentShader, uniforms };
  }, [ mouse ]);

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

export const ShaderTemplate = () => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  return (
    <CanvasContainer text="Basic template to play with shaders." measure={ref}>
      <Mesh bounds={bounds} />
    </CanvasContainer>
  );
};
