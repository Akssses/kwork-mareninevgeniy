import React from "react";
import s from "./Header.module.scss";
import { IoNotifications } from "react-icons/io5";

export default function Header() {
  return (
    <header className={`container ${s.header}`}>
      <div className={s.userBlock}>
        <img src="/assets/icons/avatars.svg" alt="" />
        <div className={s.headerText}>
          <span>Добро пожаловать</span>
          <h5>Егор Климов</h5>
        </div>
      </div>
      <button className={s.notificationButton}>
        <IoNotifications size={25} />
      </button>
    </header>
  );
}
