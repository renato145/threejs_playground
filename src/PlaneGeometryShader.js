import React, { useRef, useCallback, useEffect, useMemo } from "react";
import { OrbitControls } from "drei";
import { CanvasContainer } from "./CanvasContainer";
import { DoubleSide } from "three";
import { Controls, useControl } from "react-three-gui";

const Mesh = () => {
  const ref = useRef();
  const width = useControl("width", {
    type: "number",
    value: 5,
    min: 1,
    max: 10,
  });
  const height = useControl("height", {
    type: "number",
    value: 5,
    min: 1,
    max: 10,
  });
  const widthSegments = useControl("width segments", {
    type: "number",
    value: 10,
    min: 2,
    max: 100,
  });
  const heightSegments = useControl("height segments", {
    type: "number",
    value: 10,
    min: 2,
    max: 100,
  });
  const elevation = useControl("max elevation", {
    type: "number",
    value: 0.35,
    min: 0,
    max: 2,
  });
  const wireframe = useControl("wireframe", { type: "boolean", value: false });

  const updatePlaneInfo = useCallback(
    (plane) => {
      const vertices = plane.attributes.position.array;
      for (let i = 0; i < vertices.length; i++) {
        if (i % 3 === 2) vertices[i] = Math.random() * elevation;
      }
    },
    [elevation]
  );

  useEffect(() => {
    updatePlaneInfo(ref.current);
    ref.current.attributes.position.needsUpdate = true;
  }, [elevation, updatePlaneInfo]);

  const shaderData = useMemo(() => {
    const vertexShader = `
  varying float z;

  void main() {
    vec3 pos = position;
    z = pos.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

    const fragmentShader = `
  varying float z;
  
  void main() {
    gl_FragColor = vec4(z, 0.1, 0.3, 1.0);
  }
`;

    return { vertexShader, fragmentShader };
  }, []);

  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-1.5}>
      <planeBufferGeometry
        ref={ref}
        attach="geometry"
        args={[width, height, widthSegments, heightSegments]}
        onUpdate={(self) => updatePlaneInfo(self)}
      >
      </planeBufferGeometry>
      <shaderMaterial attach="material" {...shaderData} side={DoubleSide} wireframe={wireframe} />
      <OrbitControls />
    </mesh>
  );
};

export const PlaneGeometryShader = () => {
  return (
    <CanvasContainer
      text="Using a plane buffer geometry to show a surface plot, with colors given by a fragment shader."
      xtra={<Controls />}
    >
      <Mesh />
    </CanvasContainer>
  );
};
