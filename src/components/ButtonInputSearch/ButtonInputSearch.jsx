import { Button, Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "fff",
    backgroundColorButton = "rgb(13, 92, 182)",
    colorButton = "#ff",
  } = props;

  return (
    <div style={{ display: "flex" }}>
      <Input
        size={size}
        placeholder={placeholder}
        style={{
          backgroundColor: backgroundColorInput,
          borderRadius: "0px",
        }}
      />
      <Button
        size={size}
        style={{
          background: backgroundColorButton,
          borderRadius: "0px",
        }}
        icon={<SearchOutlined style={{ color: colorButton }} />}
      >
        <span style={{ color: colorButton }}>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
