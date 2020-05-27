import React, { useRef } from "react";
import styled from "styled-components";

const Button = styled.button`
  text-align: center;
  vertical-align: middle;
  background-color: #ccc;
  color: #111;
  border: 1px solid transparent;
  padding: 0.175rem 0.75rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #666;
    color: #fff;
  }
`;

export const ButtonImageUpload = ({
  text = "Upload Image",
  handleUpload = () => {},
  ...props
}) => {
  const ref = useRef();

  return (
    <div {...props}>
      <input
        ref={ref}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleUpload}
      />
      <Button
        onClick={() => ref.current.click()}
        // disabled={disableButtons}
      >
        {text}
      </Button>
    </div>
  );
};
