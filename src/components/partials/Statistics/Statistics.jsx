import React from "react";
import s from "./Statistics.module.scss";

export default function Statistics() {
  const statisticsData = [
    {
      title: "Вся команда",
      amount: "$4,320.00",
      change: 2.5,
      period: "7 дней",
      icon: "/assets/icons/userIcon.svg",
      isPositive: true,
    },
    {
      title: "Вся команда",
      amount: "$4,320.00",
      change: 2.5,
      period: "7 дней",
      icon: "/assets/icons/userIcon.svg",
      isPositive: true,
    },
    {
      title: "Прямые ре...",
      amount: "$4,320.00",
      change: 2.5,
      period: "4 дня",
      icon: "/assets/icons/markIcon.svg",
      isPositive: false,
    },
    {
      title: "Объем ком...",
      amount: "$4,320.00",
      change: 2.5,
      period: "7 дней",
      icon: "/assets/icons/idCardIcon.svg",
      isPositive: true,
    },
  ];

  return (
    <section className={s.section}>
      <h2 className={s.title}>Статистика</h2>
      <div className={s.slider}>
        {statisticsData.map((item, index) => (
          <div key={index} className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.iconContainer}>
                <img src={item.icon} alt={item.title} className={s.icon} />
              </div>
              <div className={s.infoHeader}>
                <span className={s.cardTitle}>{item.title}</span>
                <span className={s.amount}>{item.amount}</span>
              </div>
            </div>

            <div className={s.cardFooter}>
              <div
                className={`${s.change} ${
                  item.isPositive ? s.positive : s.negative
                }`}
              >
                {item.change}% {item.isPositive ? "↗" : "↘"}
              </div>
              <span className={s.period}>{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
