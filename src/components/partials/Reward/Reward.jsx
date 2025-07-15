import React from "react";
import s from "./Reward.module.scss";
import { PiWarningCircle } from "react-icons/pi";

export default function Reward() {
  return (
    <section className={s.section}>
      <div className={s.header}>
        <div className={s.titleContainer}>
          <img src="/assets/icons/trophy.svg" alt="" />
          <h2 className={s.title}>Получить награду</h2>
        </div>
        <div className={s.infoIcon}>
          <PiWarningCircle />
        </div>
      </div>

      <div className={s.buttons}>
        <button>Получить сейчас</button>
        <button>Увеличить награду</button>
      </div>

      <div className={s.divider}></div>

      <div className={s.nextReward}>
        <h3 className={s.nextRewardTitle}>До следующей награды осталось</h3>

        <div className={s.rewardInfo}>
          <div className={s.timeContainer}>
            <div className={s.timeIcon}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <span className={s.timeText}>5д : 4ч : 3м</span>
          </div>

          <div className={s.amountContainer}>
            <div className={s.dollarIcon}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
              </svg>
            </div>
            <span className={s.amountText}>$20.00</span>
          </div>
        </div>

        <div className={s.progressBar}>
          <div className={s.progressFill}></div>
        </div>
      </div>
    </section>
  );
}
