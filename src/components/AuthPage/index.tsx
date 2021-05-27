import React, { FC } from "react";
import style from "./AuthPage.module.scss";

const AuthPage: FC = () => (
  <div className={style.auth_page_wrapper}>
    <h1 className={style.h1} style={{ color: "red" }}>
          {" "}
          Магазин шурмы Восточные сказки
        </h1>
    <div>Auth Page</div>
    <footer className={style.footer}>
          Стрелочные функции не имеют своего this (c) LearnJavascript
        </footer>
  </div>
);

export default AuthPage;
