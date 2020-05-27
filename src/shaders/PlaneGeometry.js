import React, { useRef, useCallback, useEffect, useState } from "react";
import { OrbitControls } from "drei";
import { CanvasContainer } from "../components/CanvasContainer";
import { DoubleSide, Float32BufferAttribute } from "three";
import { Controls, useControl } from "react-three-gui";
import { color, extent, scaleLinear, interpolateMagma } from "d3";

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
    value: 0.25,
    min: 0,
    max: 2,
  });
  const wireframe = useControl("wireframe", { type: "boolean", value: false });

  const [colors, setColors] = useState([]);

  const updatePlaneInfo = useCallback(
    (plane) => {
      const vertices = plane.attributes.position.array;
      for (let i = 0; i < vertices.length; i++) {
        if (i % 3 === 2) vertices[i] = Math.random() * elevation;
      }

      if (colors && colors.length === vertices.length) {
        plane.setAttribute('color', new Float32BufferAttribute(colors, 3));
      } else {
        const zValues = [...vertices.filter((o, i) => i % 3 === 2)];

        const getColor = scaleLinear()
          .domain(extent(zValues))
          .interpolate(() => interpolateMagma);

        const vertexColors = [];
        zValues.forEach((o) => {
          const col = color(getColor(o));
          vertexColors.push(col.r / 255, col.g / 255, col.b / 255);
        });
        setColors(() => {
          plane.setAttribute('color', new Float32BufferAttribute(vertexColors, 3));
          return vertexColors;
        });
      }

      // if (plane.attributes.color) plane.attributes.color.needsUpdate = true;
    },
    [colors, elevation]
  );

  useEffect(() => {
    updatePlaneInfo(ref.current);
    ref.current.attributes.position.needsUpdate = true;
  }, [elevation, updatePlaneInfo]);

  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-1.5}>
      <planeBufferGeometry
        ref={ref}
        attach="geometry"
        args={[width, height, widthSegments, heightSegments]}
        onUpdate={(self) => updatePlaneInfo(self)}
      >
      </planeBufferGeometry>
      <meshPhongMaterial
        attach="material"
        side={DoubleSide}
        wireframe={wireframe}
        vertexColors={true}
      />
      <OrbitControls />
    </mesh>
  );
};

export const PlaneGeometry = () => {
  return (
    <CanvasContainer
      text="Using a plane buffer geometry to show a surface plot, with colors given by d3."
      xtra={<Controls />}
    >
      <Mesh />
    </CanvasContainer>
  );
};
