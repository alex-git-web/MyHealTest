import React, { useState } from "react";

export default function CardKebabMenuPopUp() {
  return (
    <div className="kebab-menu__pop-up pop-up">
      <button className="pop-up__load-btn">Завантажити</button>
      <button className="pop-up__share-btn">
        Поділитися
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7 13L10 8L7 3"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button className="pop-up__rename-btn">Перейменувати</button>
      <button className="pop-up__delete-btn">Видалити</button>
    </div>
  );
}
