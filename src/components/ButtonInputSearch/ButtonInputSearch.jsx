import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    backgroundColorInput = "fff",
    backgroundColorButton = "rgb(13, 92, 182)",
    colorButton = "#ff",
  } = props;

  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        style={{
          backgroundColor: backgroundColorInput,
          borderRadius: "0px",
        }}
      />
      <ButtonComponent
        size={size}
        styleButton={{
          background: backgroundColorButton,
          borderRadius: "0px",
        }}
        icon={<SearchOutlined style={{ color: colorButton }} />}
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
      />
    </div>
  );
};

export default ButtonInputSearch;
