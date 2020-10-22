import React, { HTMLProps, useRef } from "react";

interface Props extends Omit<HTMLProps<HTMLButtonElement>, "type"> {
  handleUpload: () => void;
}

export const ButtonImageUpload: React.FC<Props> = ({
  children,
  handleUpload = () => {},
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (ref.current !== null) ref.current.click();
  };

  return (
    <div className="text-sm ml-2">
      <input
        ref={ref}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleUpload}
      />
      <button {...props} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};
