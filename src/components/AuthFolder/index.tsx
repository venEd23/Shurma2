import React, { FC } from "react";
import Footer from "../Common/Footer";
import Header from "..Common/Header";
import style from "./AuthPage.module.scss";
import AuthForm from "./AuthForm";

const AuthPage: FC = () => {
    return (
        <div className={style.auth_page_wrapper}>
            <Header />
            <AuthForm />
            <Footer />
        </div>
    );
};

export default AuthPage;