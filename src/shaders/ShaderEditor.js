import React, { useMemo, useEffect, useState, useCallback } from "react";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Vector2 } from "three";
import { useThree, useFrame, useUpdate } from "react-three-fiber";
import { CanvasContainer } from "../components/CanvasContainer";
import exampleTexture from "./textures/texture1.png";
import { loadTexture } from "../utils";
import theme from "prism-react-renderer/themes/nightOwl";
import { ButtonImageUpload } from "../components/ButtonImageUpload";
import "./ShaderEditor.css";

const Mesh = ({ vertexShaderCode, fragmentShaderCode, bounds, textureUrl }) => {
  const { mouse, clock, aspect } = useThree();
  const texture = useMemo(() => loadTexture(exampleTexture), []);
  const ref = useUpdate(
    (material) => {
      material.vertexShader = vertexShaderCode;
      material.fragmentShader = fragmentShaderCode;
      material.needsUpdate = true;
    },
    [vertexShaderCode, fragmentShaderCode]
  );

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_aspect: { value: 1 },
      u_resolution: { value: new Vector2() },
      u_mouse: { value: mouse },
      u_texture: { value: texture },
    }),
    [mouse, texture]
  );

  useEffect(() => void (uniforms.u_aspect.value = aspect), [aspect, uniforms]);

  useEffect(() => {
    if (textureUrl) uniforms.u_texture.value = loadTexture(textureUrl);
  }, [textureUrl, uniforms]);

  useFrame(() => {
    uniforms.u_time.value += clock.elapsedTime / 1000; //miliseconds
  });

  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
      <shaderMaterial ref={ref} attach="material" uniforms={uniforms} />
    </mesh>
  );
};

const VERTEX_SHADER = /* glsl */ `varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0 );
}`;
const FRAGMENT_SHADER = /* glsl */ `varying vec2 vUv;
uniform float u_time;
uniform float u_aspect;
uniform vec2 u_mouse;
uniform sampler2D u_texture;

void main() {
  vec2 uv = vUv - 0.5;
  uv.x *= u_aspect;
  vec2 mouse = (u_mouse + 1.0) / 2.0; // 0-1

  uv *= 1.0; // control zoom 
  vec3 col = vec3(0.0);


  // Circle
  vec2 center = vec2(0.0);
  float r = 0.1;
  // r = 0.1 + sin(u_time)*0.02; // using time
  // center = clamp(u_mouse, -0.5, 0.5); // using mouse
  float pct = distance(uv, center);
  col += smoothstep(r, r-0.001, pct);

  // col += texture2D(u_texture, vUv).rgb; // texture example

  gl_FragColor=vec4(col, 1.0);
}`;

const CodeEditor = ({ code, setCode, className = "", ...style }) => {
  const highlight = useCallback(
    (code) => (
      <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
        {({ tokens, getLineProps, getTokenProps }) => (
          <div>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </>
              </div>
            ))}
          </div>
        )}
      </Highlight>
    ),
    []
  );

  return (
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={highlight}
      padding={10}
      textareaClassName="editor-text-area"
      className={className}
      style={{
        fontSize: "0.8em",
        overflow: "auto",
        boxSizing: "border-box",
        fontFamily: '"Dank Mono", "Fira Code", monospace',
        ...theme.plain,
        ...style,
      }}
    />
  );
};

export const ShaderEditor = () => {
  const [textureUrl, setTextureUrl] = useState();
  const handleUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setTextureUrl(url);
  };
  const [vertexShaderCode, setVertexShaderCode] = useState(VERTEX_SHADER);
  const [fragmentShaderCode, setFragmentShaderCode] = useState(FRAGMENT_SHADER);

  return (
    <div className="w-full grid grid-cols-6 grid-flow-row">
      <div className="row-span-2 col-span-3 xl:col-span-4">
        <CanvasContainer
          text="A simple shader code editor"
          xtra={
            <ButtonImageUpload handleUpload={handleUpload}>
              Upload texture
            </ButtonImageUpload>
          }
        >
          <Mesh
            vertexShaderCode={vertexShaderCode}
            fragmentShaderCode={fragmentShaderCode}
            textureUrl={textureUrl}
          />
        </CanvasContainer>
      </div>
      <div className="col-span-3 xl:col-span-2">
        <CodeEditor
          code={vertexShaderCode}
          className="h-screen-49"
          setCode={setVertexShaderCode}
        />
      </div>
      <div className="col-span-3 xl:col-span-2">
        <CodeEditor
          code={fragmentShaderCode}
          className="h-screen-49"
          setCode={setFragmentShaderCode}
        />
      </div>
    </div>
  );
};
