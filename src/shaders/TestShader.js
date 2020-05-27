import React, { useRef, useState, useMemo, useCallback } from "react";
import { useFrame } from "react-three-fiber";
import { OrbitControls } from "drei";
import { CanvasContainer } from "../components/CanvasContainer";
import { Controls, useControl } from 'react-three-gui';

const Mesh = () => {
  const ref = useRef();
  const boxRef = useRef();

  const shaderData = useMemo(() => {
    const vertexShader = /*glsl*/`
  attribute float displacement;
  varying float z;

  void main() {
    vec3 pos = position;
    z = pos.z;
    pos.x += (displacement/1.0);
    // pos.y += cos(displacement/2.0);
    // pos.y += fract(displacement/2.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

    const fragmentShader = /*glsl*/`
  uniform float delta;
  varying float z;
  
  void main() {
    gl_FragColor = vec4(z*0.5, 0.5 + cos(delta)*0.25, sin(delta), 1.0);
  }
`;

    const uniforms = {
      delta: { value: 0 },
    };

    return { vertexShader, fragmentShader, uniforms };
  }, []);

  const [displacement, setDisplacement] = useState();

  const getDisplacement = useCallback(
    (box) => {
      if (displacement) return;
      const n = box.attributes.position.count;
      const res = new Float32Array(n);
      setDisplacement(res);
    },
    [displacement]
  );

  const colorSpeed = useControl('Color speed', {type: 'number', value: 0.1, max: 10.0})
  const distortionLvl = useControl('Distortion lvl', {type: 'number', value: 0.0, max: 1.0})

  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01;
    shaderData.uniforms.delta.value += colorSpeed;
    for (let i = 0; i < displacement.length; i++) {
      displacement[i] = Math.random() * distortionLvl;
    }
    boxRef.current.attributes.displacement.needsUpdate = true;
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry
        ref={boxRef}
        attach="geometry"
        args={[3, 3, 3]}
        onUpdate={(self) => getDisplacement(self)}
      >
        {displacement && (
          <bufferAttribute
            attachObject={["attributes", "displacement"]}
            count={displacement.length}
            array={displacement}
            itemSize={1}
          />
        )}
      </boxBufferGeometry>
      <shaderMaterial attach="material" {...shaderData} />
      <OrbitControls />
    </mesh>
  );
};

export const TestShader = () => {
  return (
    <CanvasContainer text="Testing the use of shaders." xtra={<Controls />}>
      <Mesh />
    </CanvasContainer>
  );
};
