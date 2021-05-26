import React, { FC } from "react";

const AuthForm: FC = () => {
    return (
    <div className={<style.auth_form_wrapper>}>
        <h3>Auth Form</h3>
        <input type="text" />
        <input type="password" />
        <button type="button">Login</button>
    </div>;
    );
};

export default AuthForm;
