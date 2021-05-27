import React, { FC, useState } from "react";
import style from "./AuthForm.module.scss";

const AuthForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  return (
    <div className={style.auth_form_wrapper}>
      <h3>Auth Form</h3>
      <input type="text" className={style.auth_form_input} />
      <input type="password" className={style.auth_form_input} />
      <button type="button" className={style.auth_form_btn}>
          Login
        </button>
    </div>
    );
};

export default AuthForm;
