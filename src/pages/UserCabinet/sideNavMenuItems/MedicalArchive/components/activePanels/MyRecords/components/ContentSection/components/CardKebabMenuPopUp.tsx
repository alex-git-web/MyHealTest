import React, { useState } from "react";
import {
  ContentDisplayedElementsType,
  ContentElementsDisplayModeType,
} from "../../../types";

type PropsType = {
  displayMode: ContentElementsDisplayModeType;
  displayedElementsType: ContentDisplayedElementsType;
};
export default function CardKebabMenuPopUp(props: PropsType) {
  const { displayMode, displayedElementsType } = props;

  return (
    <ul
      className={`kebab-menu__pop-up pop-up ${
        displayMode === "grid" ? "grid-mode" : "list-mode"
      }
      `}
    >
      {displayedElementsType === "files" && (
        <li className="pop-up__rename-btn add-file-to-folder-btn">
          Додати в папку
        </li>
      )}
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
      {displayedElementsType === "folders" && (
        <li className="pop-up__rename-btn rename-btn">Перейменувати</li>
      )}
      <li className="pop-up__delete-btn delete-btn disabled">Видалити</li>

      <ul
        className={`pop-up__context-menu context-menu ${
          displayMode === "grid" ? "grid-mode" : "list-mode"
        }`}
      >
        <li className="context-menu__open-access-btn open-access-btn context-menu__item">
          Відкрити доступ
        </li>
        <li className="context-menu__create-link-btn create-link-btn context-menu__item">
          Створити посилання
        </li>
      </ul>
    </ul>
  );
}
