import React, { useMemo } from "react";
import { DoubleSide } from "three";
import { OrbitControls } from "drei";
import { color, extent, scaleLinear, interpolateMagma } from "d3";
import { CanvasContainer } from "../components/CanvasContainer";
import { ShaderEditorLayout } from "../components/ShaderEditorLayout";

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
      colors.push(col.r / 255, col.g / 255, col.b / 255);
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

  const shaderData = useMemo(() => {
    const vertexShader = /*glsl*/`
  varying float z;

  void main() {
    vec3 pos = position;
    z = 0.41 + pos.z*1.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

    const fragmentShader = /*glsl*/`
  varying float z;
  
  void main() {
    gl_FragColor = vec4(z, cos(z*200.0), cos(z*100.0), 1.0);
  }
`;

    return { vertexShader, fragmentShader };
  }, []);

  return (
    <mesh
      rotation-x={-Math.PI / 2}
      scale={[4, 4, 4]}
    >
      <bufferGeometry
        attach="geometry"
        onUpdate={(self) => {
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
      <shaderMaterial attach="material" {...shaderData} side={DoubleSide}  />
      <OrbitControls />
    </mesh>
  );
};

// export const SurfaceShader = () => {
//   return (
//     <CanvasContainer text='Surface plot using vertex and faces, colored with a custom fragment shader.'>
//       <Mesh />
//     </CanvasContainer>
//   );
// };

const VERTEX_SHADER = /*glsl*/`
  varying float z;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;
    z = 0.41 + pos.z*1.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAGMENT_SHADER = /*glsl*/`
  varying float z;
  varying vec2 vUv;
  uniform float u_time;
  uniform float u_aspect;
  uniform vec2 u_mouse;
  uniform sampler2D u_texture;
  
  void main() {
    gl_FragColor = vec4(z, cos(z*200.0), cos(z*100.0), 1.0);
  }
`;


export const SurfaceShader = () => {
  const [vertices, colors] = useMemo(() => {
    const vertices = [];
    const colors = [];
    for (let i = 0; i < nverts; i++) {
      vertices.push((xgrid[i] - xmid) * scalefac);
      vertices.push((ygrid[i] - ymid) * scalefac);
      vertices.push((values[i] - zmid) * scalefacz);
      const col = color(getColor(values[i]));
      colors.push(col.r / 255, col.g / 255, col.b / 255);
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
    <ShaderEditorLayout
      description="Surface plot using vertex and faces, colored with a custom fragment shader."
      textureEnable={false}
      vertexShader={VERTEX_SHADER}
      fragmentShader={FRAGMENT_SHADER}
      materialSide={DoubleSide}
      rotation-x={-Math.PI / 2}
      scale={[4, 4, 4]}
    >
      <bufferGeometry
        attach="geometry"
        onUpdate={(self) => {
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
      <OrbitControls />
    </ShaderEditorLayout>
  );
};
