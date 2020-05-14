import React, { useMemo, useEffect, useState, useCallback } from "react";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Vector2 } from "three";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { useThree, useFrame, useUpdate } from "react-three-fiber";
import styled from "styled-components";
import { CanvasContainer, Text } from "./CanvasContainer";
import exampleTexture from "./textures/texture1.png";
import { loadTexture } from "./utils";
import theme from "prism-react-renderer/themes/nightOwl";
import { ButtonImageUpload } from "./ButtonImageUpload";
import "./ShaderEditor.css";

const Mesh = ({ vertexShaderCode, fragmentShaderCode, bounds, textureUrl }) => {
  const { mouse } = useThree();
  const texture = useMemo(() => loadTexture(exampleTexture), []);
  const ref = useUpdate(
    (material) => {
      material.vertexShader = vertexShaderCode;
      material.fragmentShader = fragmentShaderCode;
      material.needsUpdate = true;
    },
    [vertexShaderCode, fragmentShaderCode]
  );

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
      u_texture: { value: texture },
    };

    return {
      vertexShader,
      fragmentShader,
      uniforms,
    };
  }, [mouse, texture]);

  useEffect(() => {
    if (textureUrl)
      shaderData.uniforms.u_texture.value = loadTexture(textureUrl);
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
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
      <shaderMaterial ref={ref} attach="material" {...shaderData} />
    </mesh>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 25vh 73vh;
  grid-row-gap: 2vh;
`;

const VERTEX_SHADER = /* glsl */`void main() {
  gl_Position = vec4( position, 1.0 );
}`;
const FRAGMENT_SHADER = /* glsl */`uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform sampler2D u_texture;

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5*u_resolution) / u_resolution.y; // 0-1
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

  // col += texture2D(u_texture, (gl_FragCoord.xy / u_resolution)).rgb; // texture example

  gl_FragColor=vec4(col, 1.0);
}`;

const CodeEditor = ({ code, setCode, ...style }) => {
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
      A simple shader code editor.
    </Text>
    <ButtonImageUpload style={{ marginLeft: "0.5em" }} text="Upload texture" handleUpload={handleUpload} />
  </CustomContainer>
);

export const ShaderEditor = () => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });
  const [textureUrl, setTextureUrl] = useState();
  const handleUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setTextureUrl(url);
  };
  const [vertexShaderCode, setVertexShaderCode] = useState(VERTEX_SHADER);
  const [fragmentShaderCode, setFragmentShaderCode] = useState(FRAGMENT_SHADER);

  return (
    <MainContainer>
      <CanvasContainer
        xtra={<Xtra handleUpload={handleUpload} />}
        measure={ref}
        style={{ width: "auto", gridRow: "1/3", gridColumn: "1/2" }}
      >
        <Mesh
          vertexShaderCode={vertexShaderCode}
          fragmentShaderCode={fragmentShaderCode}
          bounds={bounds}
          textureUrl={textureUrl}
        />
      </CanvasContainer>
      <CodeEditor
        code={vertexShaderCode}
        setCode={setVertexShaderCode}
        style={{ gridRow: "1/2", gridColumn: "2/3" }}
      />
      <CodeEditor
        code={fragmentShaderCode}
        setCode={setFragmentShaderCode}
        style={{ gridRow: "2/3", gridColumn: "2/3" }}
      />
    </MainContainer>
  );
};
