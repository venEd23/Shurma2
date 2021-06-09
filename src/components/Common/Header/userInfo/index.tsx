import React from "react";
import { useSelector } from "react-redux";
import getUserLogin from "../../../../store/selectors";


const UserInfo = () => {
    const login = useSelector(getUserLogin);
    return (
        <>
        <div className={style["user-info_wrapper"]}>
            {login ? `Пользователь ${login}` : "Не авторизован"}
        </div>
    );
};

export default UserInfo;