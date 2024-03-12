import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons"; // Added import statement
import logo from "../../assets/images/logo.png";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      headerStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
      hoverable
      cover={
        <img
          alt=""
          src="https://th.bing.com/th/id/OIP.5bEaFR4mph68HswCO-YSbwAAAA?w=400&h=400&rs=1&pid=ImgDetMain"
        />
      }
    >
      <img
        src={logo}
        alt=""
        style={{
          width: "68px",
          height: "14px",
          position: "absolute",
          top: -1,
          left: -1,
          borderTopLeftRadius: "3px",
        }}
      />
      <StyleNameProduct> Iphone 15 </StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.5</span>
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />{" "}
        </span>
        <span> | Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        10.000.000d
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
