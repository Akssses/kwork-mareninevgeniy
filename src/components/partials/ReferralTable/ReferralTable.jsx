"use client";

import React, { useRef } from "react";
import s from "./ReferralTable.module.scss";

export default function ReferralTable() {
  const scrollRef = useRef(null);

  const referralData = [
    {
      level: "Уровень 1",
      percentage: "3%",
      amount: "$5,000",
      isActive: true,
      isUnlocked: true,
    },
    {
      level: "Уровень 2",
      percentage: "4%",
      amount: "$10,000",
      isActive: false,
      isUnlocked: true,
    },
    {
      level: "Уровень 3",
      percentage: "5%",
      amount: "$20,000",
      isActive: false,
      isUnlocked: false,
    },
    {
      level: "Уровень 4",
      percentage: "6%",
      amount: "$40,000",
      isActive: false,
      isUnlocked: false,
    },
  ];

  const handlePrevious = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={s.section}>
      <div className={s.header}>
        <div className={s.titleContainer}>
          <img src="/assets/icons/tableIcon.svg" alt="" />
          <h2 className={s.title}>Таблица рефералов</h2>
        </div>

        <div className={s.navigation}>
          <button className={s.navButton} onClick={handlePrevious}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
          <button className={s.navButton} onClick={handleNext}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>
      </div>

      <div className={s.divider}></div>

      <div className={s.tableContainer} ref={scrollRef}>
        <div className={s.card}>
          <img
            className={s.layoutIcons}
            src="/assets/icons/layoutIcons.svg"
            alt=""
          />
          <div className={s.amount}>Оборот</div>
        </div>

        <div className={s.connector}></div>

        {referralData.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`${s.card} 
                ${item.isActive ? s.active : ""} 
                ${!item.isUnlocked ? s.locked : ""}`}
            >
              <div className={s.level}>{item.level}</div>
              <div className={s.percentage}>
                {item.isUnlocked ? (
                  item.percentage
                ) : (
                  <span className={s.lockIcon}>
                    <img src="/assets/icons/lockIcon.svg" alt="" />
                  </span>
                )}
              </div>
              <div className={s.amount}>{item.amount}</div>
            </div>
            {index < referralData.length - 1 && (
              <div className={s.connector}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
