import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserLoginAction } from "../../../store/actions";
import TextInput from "../../Form/TextInput";
import style from "./AuthForm.module.scss";

const AuthForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();

  const textInputHandler = (event: any) => {
    setLogin(event.currentTarget.value);
  };

  const passwordInputHandler = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  const onsubmit = () => {
    dispatch(setUserLoginAction(login));
  };

  return (
    <div className={style.auth_form_wrapper}>
      <h3>Auth Form</h3>
      <TextInput placeholder="Login" handler={setLogin} />
      <TextInput placeholder="Name" handler={setName} />
      <input
        type="password"
        className={style.auth_form_input}
        onChange={passwordInputHandler}
        placeholder="Password"
      />
      <button type="button" className={style.auth_form_btn} onClick={onsubmit}>
        Login
      </button>
    </div>
  );
};

export default AuthForm;
