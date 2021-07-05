import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import getUserLogin from "../../store/selectors";
import AuthPage from "../AuthPage";

const AuthPageContainer: FC = () => {
  const history = useHistory();
  const login = useSelector(getUserLogin);

  useEffect(() => {
    if (login) {
      history.push("/main");
    }
  }, [history, login]);

  return <AuthPage />;
};

export default AuthPageContainer;
