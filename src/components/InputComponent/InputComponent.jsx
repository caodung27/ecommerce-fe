import { Input } from "antd";
import React from "react";

const InputComponent = ({ size, placeholder, style, ...rests }) => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      style={{
        borderRadius: "0px",
      }}
      {...rests}
    />
  );
};

export default InputComponent;
