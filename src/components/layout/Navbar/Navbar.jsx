import React from "react";
import s from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <section className={s.navbar}>
      <nav>
        <ul>
          <li>
            <button>
              <img src="/assets/icons/home.svg" alt="" />
            </button>
          </li>
          <li>
            <button>
              <img src="/assets/icons/tiime.svg" alt="" />
            </button>
          </li>
          <li className={s.bank}>Банк</li>
          <li>
            <button className={s.circle}>
              <img src="/assets/icons/circle.svg" alt="" />
            </button>
          </li>
          <li>
            <button>
              <img src="/assets/icons/main.svg" alt="" />
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
