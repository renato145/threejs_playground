import React, { useMemo } from "react";
import { CanvasContainer } from "../components/CanvasContainer";
import { useThree, useFrame, useResource } from "react-three-fiber";
import { DoubleSide, Vector3 } from "three";
import { OrbitControls } from 'drei';

const Mesh = () => {
  const { mouse, clock } = useThree();
  const [ref, geometry] = useResource();
  const { randomDirections, randomStrengths } = useMemo(() => {
    if (!geometry) return {randomDirections: undefined, randomStrengths: undefined};
    const triangleCount = geometry.getAttribute("position").count / 3;
    const vec3 = new Vector3();
    const randomDirections = [];
    const randomStrengths = [];

    for (let i = 0; i < triangleCount; i++) {
      const directions = vec3
        .set(
          ...Array(3)
            .fill()
            .map(() => Math.random())
        )
        .multiplyScalar(2)
        .subScalar(1)
        .normalize()
        .toArray();
      randomDirections.push(...Array(3).fill(directions).flat());
      randomStrengths.push(...Array(3).fill(Math.random()));
    }
    return { randomDirections: new Float32Array(randomDirections), randomStrengths: new Float32Array(randomStrengths) };
  }, [geometry]);

  const shaderData = useMemo(() => {
    const vertexShader = /*glsl*/ `
  attribute vec3 randomDirections;
  attribute float randomStrength;
  uniform float u_explosion;
  uniform vec2 u_mouse;
  varying vec2 vUv;
  varying vec3 vPos;

  void main() {
    vUv = uv;
    vPos = position;
    vec3 pos = position;
    pos += randomDirections * randomStrength * pow(u_explosion*1.5, 2.0);
    // pos += randomDirections * randomStrength * distance(u_mouse, vec2(0.0));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

    const fragmentShader = /*glsl*/ `
  uniform float u_time;
  uniform vec2 u_mouse;
  varying vec2 vUv;
  varying vec3 vPos;

  void main() {
    vec3 col = normalize(vPos) * 0.5 + 0.5;
    gl_FragColor = vec4(col, 1.0);
    // vec2 st = vUv;
    // st.y += sin(u_time) * 0.05;
    // vec2 mouse = (u_mouse + 1.0) / 2.0;
    // gl_FragColor = vec4(st.x, st.y, (mouse.x + mouse.y) / 2.0, 1.0);
  }
`;

    const uniforms = {
      u_explosion: { value: 1 },
      u_mouse: { value: mouse },
    };

    return { vertexShader, fragmentShader, uniforms };
  }, [mouse]);

  useFrame(() => {
    shaderData.uniforms.u_explosion.value = Math.sin(clock.elapsedTime/1.5 - Math.PI/4)*0.5 + 0.5;
  });

  return (
    <mesh>
      {/* icosahedronBufferGeometry(radius : Float, detail : Integer) */}
      <icosahedronBufferGeometry ref={ref} attach="geometry" args={[1.5, 6]}>
        {randomDirections && (<bufferAttribute
          attachObject={["attributes", "randomDirections"]}
          count={randomDirections.length / 3}
          array={randomDirections}
          itemSize={3}
        />)}
        {randomStrengths && (<bufferAttribute
          attachObject={["attributes", "randomStrength"]}
          count={randomStrengths.length}
          array={randomStrengths}
          itemSize={1}
        />)}
      </icosahedronBufferGeometry>
      <shaderMaterial attach="material" side={DoubleSide} {...shaderData} />
    </mesh>
  );
};

export const ExplodingSphere = () => {
  return (
    <CanvasContainer text="An exploding sphere using vertex shaders.">
      <Mesh />
      <OrbitControls />
    </CanvasContainer>
  );
};
