import React, { FC } from "react";
import AuthForm from "../AuthFolder/AuthForm";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import NavMenu from "../Common/NavElems";
import style from "./AuthPage.module.scss";

const AuthPage: FC = () => (
  <div className={style.auth_page_wrapper}>
    <Header />
    <NavMenu />
    <AuthForm />
    <Footer />
  </div>
);

export default AuthPage;
