import React, { useMemo, useEffect, useState, useCallback } from "react";
import { FrontSide } from "three";
import { useThree, useFrame, useUpdate } from "react-three-fiber";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { CanvasContainer } from "./CanvasContainer";
import { loadTexture } from "../utils";
import { ButtonImageUpload } from "./ButtonImageUpload";
import "./ShaderEditorLayout.css";

const Mesh = ({
  children,
  vertexShaderCode,
  fragmentShaderCode,
  textureUrl,
  materialSide,
  ...props
}) => {
  const { mouse, clock, aspect } = useThree();
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
      u_mouse: { value: mouse },
      u_texture: { value: 0 },
    }),
    [mouse]
  );

  useEffect(() => void (uniforms.u_aspect.value = aspect), [aspect, uniforms]);

  useEffect(() => {
    if (textureUrl) uniforms.u_texture.value = loadTexture(textureUrl);
  }, [textureUrl, uniforms]);

  useFrame(() => {
    uniforms.u_time.value += clock.elapsedTime / 1000; //miliseconds
  });

  return (
    <mesh {...props}>
      {children}
      <shaderMaterial
        ref={ref}
        attach="material"
        uniforms={uniforms}
        side={materialSide}
      />
    </mesh>
  );
};

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

export const ShaderEditorLayout = ({
  children,
  texture,
  description,
  vertexShader,
  fragmentShader,
  xtra,
  doShowCode=false,
  materialSide = FrontSide,
  textureEnable = true,
  ...props
}) => {
  const [textureUrl, setTextureUrl] = useState(texture);
  const handleUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setTextureUrl(url);
  };
  const [vertexShaderCode, setVertexShaderCode] = useState(vertexShader);
  const [fragmentShaderCode, setFragmentShaderCode] = useState(fragmentShader);
  const [showCode, setShowCode] = useState(doShowCode);

  const xtra_content = useMemo(() => {
    if (!xtra && !textureEnable) return false;
    return (
      <>
        {xtra}
        <ButtonImageUpload handleUpload={handleUpload}>
          Upload texture
        </ButtonImageUpload>
      </>
    );
  }, [textureEnable, xtra]);

  const handleClick = useCallback(() => setShowCode((show) => !show), []);

  return (
    <div>
      <div className="w-full grid grid-cols-6 grid-flow-row">
        <div className={`row-span-2 ${showCode ? "col-span-3 xl:col-span-4}" : "col-span-6"}`}>
          <CanvasContainer text={description} xtra={xtra_content}>
            <Mesh
              vertexShaderCode={vertexShaderCode}
              fragmentShaderCode={fragmentShaderCode}
              textureUrl={textureUrl}
              materialSide={materialSide}
              {...props}
            >
              {children}
            </Mesh>
          </CanvasContainer>
        </div>
        {showCode && (
          <>
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
          </>
        )}
      </div>
      <div className="fixed top-0 right-0 mr-4">
        <button
          className="text-sm font-semibold opacity-75 focus:opacity-100 focus:shadow-none"
          onClick={() => handleClick()}
          >
          {showCode ? "Hide editor" : "Show editor"}
        </button>
      </div>
    </div>
  );
};
