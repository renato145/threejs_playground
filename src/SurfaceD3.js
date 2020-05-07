import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "react-three-fiber";
import { DoubleSide } from "three";
import { OrbitControls, Sky } from "drei";
import { color, extent, scaleLinear, interpolateMagma } from "d3";
import { CanvasContainer } from "./CanvasContainer";

const M = 101,
  N = 101;

const getData = (m, n) => {
  var nverts = n * m;
  var values = new Array(n * m);
  var xgrid = new Array(n * m);
  var ygrid = new Array(n * m);
  for (var j = 0, k = 0; j < m; ++j) {
    for (var i = 0; i < n; ++i, ++k) {
      xgrid[k] = i;
      ygrid[k] = 25 * Math.sin((i * Math.PI) / 50) + j;
      values[k] = Math.pow(xgrid[k] - 50, 2) + Math.pow(ygrid[k] - 50, 2);
    }
  }
  return { xgrid, ygrid, values, nverts };
};

const { xgrid, ygrid, values, nverts } = getData(M, N);

// Obtain centre of grid and scale factors
const [xmin, xmax] = extent(xgrid);
const xmid = 0.5 * (xmin + xmax);
const xrange = xmax - xmin;

const [ymin, ymax] = extent(ygrid);
const ymid = 0.5 * (ymin + ymax);
const yrange = ymax - ymin;

const [zmin, zmax] = extent(values);
const zmid = 0.5 * (zmin + zmax);
const zrange = zmax - zmin;

const scalefac = 1.2 / Math.max(xrange, yrange);
const scalefacz = 0.5 / zrange;

// color scale
const getColor = scaleLinear()
  .domain(extent(values))
  .interpolate(() => interpolateMagma);

const Mesh = () => {
  const [vertices, colors] = useMemo(() => {
    const vertices = [];
    const colors = [];
    for (let i = 0; i < nverts; i++) {
      vertices.push((xgrid[i] - xmid) * scalefac);
      vertices.push((ygrid[i] - ymid) * scalefac);
      vertices.push((values[i] - zmid) * scalefacz);
      const col = color(getColor(values[i]));
      colors.push(col.r/255, col.g/255, col.b/255)
    }
    return [new Float32Array(vertices), new Float32Array(colors)];
  }, []);

  const faces = useMemo(() => {
    const res = [];
    for (let j = 0; j < M - 1; j++) {
      for (let i = 0; i < N - 1; i++) {
        const n0 = j * N + i;
        const n1 = n0 + 1;
        const n2 = (j + 1) * N + i + 1;
        const n3 = n2 - 1;
        res.push(n0, n1, n2);
        res.push(n2, n3, n0);
      }
    }
    return new Uint16Array(res);
  }, []);

  return (
    <mesh
      rotation-x={-Math.PI/2}
    // ref={ref}
    scale={[4,4,4]}
    // onPointerOver={() => setHover(true)}
    // onPointerOut={() => setHover(false)}
    >
      <bufferGeometry
        attach="geometry"
        onUpdate={(self) => {
          console.log(self);
          self.computeFaceNormals();
          self.computeVertexNormals();
        }}
      >
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={vertices.length / 3}
          array={vertices}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "color"]}
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          count={faces.length}
          array={faces}
          itemSize={1}
        />
      </bufferGeometry>
      <meshPhongMaterial attach="material" side={DoubleSide} vertexColors={true}  />
      <OrbitControls />
      {/* <Sky /> */}
    </mesh>
  );
};

export const SurfaceD3 = () => {
  return (
    <CanvasContainer text='Surface plot using vertex and faces, colored with d3.'>
      <Mesh />
    </CanvasContainer>
  );
};
