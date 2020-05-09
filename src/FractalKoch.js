import React, { useMemo, useEffect, useState } from "react";
import { Vector2 } from "three";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { useThree, useFrame } from "react-three-fiber";
import styled from "styled-components";
import { CanvasContainer } from "./CanvasContainer";
import { Text } from "./CanvasContainer";
import exampleTexture from "./textures/texture1.png";
import { ButtonImageUpload } from "./ButtonImageUpload";
import { loadTexture } from './utils';

const Mesh = ({ bounds, textureUrl }) => {
  const { mouse } = useThree();
  const texture = useMemo(() => loadTexture(exampleTexture), []);

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
  uniform sampler2D u_texture;

  vec2 N(float angle) {
    return vec2(sin(angle), cos(angle));
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5*u_resolution) / u_resolution.y;
    vec2 mouse = (u_mouse + 1.0) / 2.0;

    uv *= 1.5; // zoom 
    vec3 col = vec3(0.0);

    uv.x = abs(uv.x); // reflect x coords

    // shift y coord to center the graph
    // tan(a) = y / 0.5 -> y = tan(a)*0.5
    uv.y += tan(5.0/6.0*3.1415) * 0.5;

    // setup a reflection over an angle
    vec2 n = N(5.0/6.0*3.1415); // reflection angle
    float d = dot(uv - vec2(0.5, 0.0), n); // vec2 sets the reflection point
    uv -= max(0.0, d)*n*2.0;

    // col += smoothstep(0.01, 0.0, abs(d)); // a line

    n = N(u_mouse.y * (2.0/3.0) * 3.1415);
    uv.x += 0.5; // compensates the 1st step on for loop ( + 1.5/3)
    float scale = 2.0; // track the width of the lines

    for(int i=0; i<10; i++) {
      scale *= 3.0;
      uv *= 3.0;
      uv.x -= 1.5;

      uv.x = abs(uv.x); // reflect x coords
      uv.x -= 0.5;
      uv -= min(0.0, dot(uv, n))*n*2.0; // reflection over angle
      uv *= 0.9 + mouse.x * 0.1;
    }

    d = length(uv - vec2(clamp(uv.x, -1.0, 1.0), 0.0));
    col += smoothstep(2.0 / u_resolution.y, 0.0, d/scale);
    uv /= scale; // normalize
    col += texture2D(u_texture, uv*2.0 + u_time*0.03).rgb;

    gl_FragColor=vec4(col, 1.0);
  }
`;

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new Vector2() },
      u_mouse: { value: mouse },
      u_texture: { value: texture },
    };

    return { vertexShader, fragmentShader, uniforms };
  }, [mouse, texture]);

  useEffect(() => {
    if (textureUrl) shaderData.uniforms.u_texture.value = loadTexture(textureUrl);
  }, [textureUrl, shaderData]);

  useEffect(() => {
    shaderData.uniforms.u_resolution.value.x = bounds.width;
    shaderData.uniforms.u_resolution.value.y = bounds.height;
  }, [bounds, shaderData]);

  useFrame(() => {
    shaderData.uniforms.u_time.value += 0.05;
  });

  return (
    <mesh>
      <planeBufferGeometry  attach="geometry" args={[2, 2]} />
      <shaderMaterial attach="material" {...shaderData} />
    </mesh>
  );
};

const CustomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  padding-top: 0.5rem;
`;

const Xtra = ({ handleUpload }) => (
  <CustomContainer>
    <Text>
      Example of a Koch Snowflake fractal pattern, try a custom texture:
    </Text>
    <ButtonImageUpload style={{ marginLeft: "0.5em" }} text="Upload texture" handleUpload={handleUpload} />
  </CustomContainer>
);

export const FractalKoch = () => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });
  const [textureUrl, setTextureUrl] = useState();
  const handleUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setTextureUrl(url);
  };

  return (
    <CanvasContainer xtra={<Xtra handleUpload={handleUpload} />} measure={ref}>
      <Mesh bounds={bounds} textureUrl={textureUrl} />
    </CanvasContainer>
  );
};
