import React from "react";
import { Link } from "react-router-dom";
import style from "./NavMenu.module.scss";

class NavMenu extends React.PureComponent {
  render() {
    return (
      <>
        <nav className={style.nav_wrapper}>
          <ul className={style.nav_list}>
            <li>О нас</li>
            <li>
              <Link to="/main">Страница заказа</Link>
            </li>
            <li>
              <Link to="/auth">Авторизация</Link>
            </li>
            <li>
              <Link to="/reg">Регистрация</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavMenu;