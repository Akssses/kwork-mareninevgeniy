import React from "react";
import s from "./History.module.scss";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function History() {
  const historyItems = [
    {
      name: "Виталий",
      amount: "+$100.00",
      time: "Сегодня 13:00",
      level: "Уровень 11",
      checked: true,
    },
    {
      name: "Виталий",
      amount: "+$100.00",
      time: "Сегодня 13:00",
      level: "Уровень 11",
      checked: false,
    },
    {
      name: "Виталий",
      amount: "+$100.00",
      time: "Сегодня 13:00",
      level: "Уровень 11",
      checked: true,
    },
  ];

  return (
    <section className={s.history}>
      <h1 className={s.title}>История обращений</h1>

      <div className={s.itemsContainer}>
        {historyItems.map((item, index) => (
          <div key={index} className={s.item}>
            <div className={s.userInfo}>
              <img src="/assets/images/vitalyi.png" alt="" />
              <div>
                <span className={s.name}>{item.name}</span>
                <span className={s.time}>{item.time}</span>
              </div>
            </div>
            <div className={s.rightSection}>
              <div className={s.userAmount}>
                <span className={s.amount}>{item.amount}</span>
                <span className={s.level}>{item.level}</span>
              </div>
              <span className={s.checked}>
                {item.checked ? (
                  <IoCheckmarkCircle size={25} color="green" />
                ) : (
                  <IoCheckmarkCircle size={25} color="red" />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
