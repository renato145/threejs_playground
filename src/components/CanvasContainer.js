import React from "react";
import { Canvas } from "react-three-fiber";
import { Stats } from "drei";

export const Text = ({ children, ...props }) => (
  <div className="text-center text-lg pt-2" {...props}>
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
    <div className="w-full flex flex-row">
      <div ref={measure} className="" {...props}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {children}
          <Stats />
        </Canvas>
      </div>
      <div className="">
        {xtra && xtra}
        {text && <Text>{text}</Text>}
      </div>
    </div>
  );
};
