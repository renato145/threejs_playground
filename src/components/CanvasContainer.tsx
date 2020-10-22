import React, { HTMLProps } from "react";
import { Canvas } from "react-three-fiber";
import { Stats } from "drei";

interface TextProps extends HTMLProps<HTMLDivElement> {
  tw?: string;
}

export const Text: React.FC<TextProps> = ({ children, tw = "", ...props }) => (
  <div className={`text-center lg:text-lg ${tw}`} {...props}>
    <p>{children}</p>
  </div>
);

interface Props extends HTMLProps<HTMLDivElement> {
  text: string;
  xtra: React.ReactNode;
  measure: React.RefObject<HTMLDivElement>;
}

export const CanvasContainer: React.FC<Props> = ({
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
      <div className="py-2 flex justify-center items-center">
        {text && <Text>{text}</Text>}
        {xtra && xtra}
      </div>
    </div>
  );
};
