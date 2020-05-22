import React, { useMemo, useEffect } from "react";
import { Vector2 } from "three";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { CanvasContainer } from "./CanvasContainer";
import { useThree, useFrame } from "react-three-fiber";

const Mesh = ({ bounds }) => {
  const { mouse } = useThree();

  const shaderData = useMemo(() => {
    const vertexShader = /*glsl*/`
  void main() {
    gl_Position = vec4( position, 1.0 );
  }
`;

    const fragmentShader = /*glsl*/`
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    vec2 mouse = u_mouse;

    // Borders
    // vec2 bl = smoothstep(0.05, 0.5, st);
    // float pct = bl.x * bl.y;
    // vec2 tr = step(0.05, 1.0 - st);
    // pct *= tr.x * tr.y;
    // color = vec3(pct);

    // Circle
    // float pct = distance(st, vec2(0.5));
    // color = vec3(pct);

    // Repeating circles
    float d = 0.0;
    st = st * 2. - 1.; // normalize between 0-1
    st.x -= mouse.x;
    // st.y -= mouse.y;
    st.y = step(1.0, st.y);
    // st.y = smoothstep(-1.0, 1.0, st.y);
    d = length( abs(st) - sin(u_time/20.0) );
    color = vec3(st.x, st.y + mouse.y*0.25, 0.0);
    color.b += (mouse.x + 1.0) / 2.0 * 0.35;
    color += fract(d*12.0);

    gl_FragColor=vec4(color, 1.0);
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

export const ShaderShapes = () => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  return (
    <CanvasContainer text="Playing with shapes on shaders." measure={ref}>
      <Mesh bounds={bounds} />
    </CanvasContainer>
  );
};
