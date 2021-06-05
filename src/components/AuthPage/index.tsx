import React, { FC } from "react";
import AuthForm from "../AuthFolder/AuthForm";
import style from "./AuthPage.module.scss";

const AuthPage: FC = () => (
  <div className={style.auth_page_wrapper}>
    <h1 className={style.h1} style={{ color: "red" }}>
          {" "}
          Магазин шаурмы Восточные сказки
        </h1>
    <AuthForm/>
    <footer className={style.footer}>
          Стрелочные функции не имеют своего this (c) LearnJavascript
        </footer>
  </div>
);

export default AuthPage;
