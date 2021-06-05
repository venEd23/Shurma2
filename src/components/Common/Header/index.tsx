import React from "react";
import style from "./Header.module.scss";

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <h1 className={style.h1} style={{ color: "red" }}>
          {" "}
          Магазин шаурмы Восточные сказки
        </h1>
      </>
    );
  }
}

export default Header;
