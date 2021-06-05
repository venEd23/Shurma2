import React from "react";
import style from "./Footer.module.scss";

class Footer extends React.PureComponent {
  render() {
    return (
      <>
        <footer className={style.footer}>
          Стрелочные функции не имеют своего this (c) LearnJavascript
        </footer>
      </>
    );
  }
}

export default Footer;
