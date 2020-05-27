import React from "react";
import { Canvas } from "react-three-fiber";
import { Stats } from "drei";

export const Text = ({ children, tw="", ...props }) => (
  <div className={`text-center align-middle text-lg ${tw}`} {...props}>
    <p>{children}</p>
  </div>
);

export const CanvasContainer = ({
  text,
  children,
  xtra,
  measure,
  ...props
}) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div ref={measure} className="flex-auto" {...props}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {children}
          <Stats />
        </Canvas>
      </div>
      <div className="py-2">
        {xtra && xtra}
        {text && <Text>{text}</Text>}
      </div>
    </div>
  );
};
