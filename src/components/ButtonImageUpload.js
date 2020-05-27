import React, { useRef } from "react";

export const ButtonImageUpload = ({
  children,
  handleUpload = () => {},
  ...props
}) => {
  const ref = useRef();

  return (
    <div className="inline text-sm">
      <input
        ref={ref}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleUpload}
      />
      <button {...props} onClick={() => ref.current.click()}>
        {children}
      </button>
    </div>
  );
};
