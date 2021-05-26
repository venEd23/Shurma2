import React, { FC } from "react";
import style from "./AuthPage.module.scss";

const AuthPage: FC = () => {
    return (
        <div className={style.auth_page_wrapper}>
            <Header />
            <div>Auth Page</div>
            <Footer />
        </div>
    );
};

export default AuthPage;