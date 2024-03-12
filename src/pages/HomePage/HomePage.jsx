import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
// import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ButtonComponent from "./../../components/ButtonComponent/ButtonComponent";

const HomePage = () => {
  const arr = ["TV", "Laptop", "Phone"];

  return (
    <div style={{ padding: "0 120px", lineHeight: "3" }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeProduct>
      <div
        style={{
          backgroundColor: "#efefef",
          padding: "0 120px",
          height: "1000px",
        }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
        <WrapperButtonMore
          textButton="Xem thêm"
          type="outline"
          styleButton={{
            border: "1px solid rgb(11, 116, 229)",
            color: "rgb(11, 116, 229)",
            width: "240px",
            height: "38px",
            borderRadius: "4px",
          }}
          styleTextButton={{ fontWeight: "500" }}
        />
      </div>
    </div>
  );
};

export default HomePage;
