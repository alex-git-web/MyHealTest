import React, { useState } from "react";

export default function CardKebabMenuPopUp() {
  return (
    <ul className="kebab-menu__pop-up pop-up">
      <li className="pop-up__load-btn load-btn">Завантажити</li>
      <li className="pop-up__share-btn share-btn">
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </li>
      <li className="pop-up__rename-btn rename-btn">Перейменувати</li>
      <li className="pop-up__delete-btn delete-btn disabled">Видалити</li>

      <ul className="pop-up__context-menu context-menu">
        <li className="context-menu__open-access-btn open-access-btn">
          Відкрити доступ
        </li>
        <li className="context-menu__create-link-btn create-link-btn">
          Створити посилання
        </li>
      </ul>
    </ul>
  );
}
