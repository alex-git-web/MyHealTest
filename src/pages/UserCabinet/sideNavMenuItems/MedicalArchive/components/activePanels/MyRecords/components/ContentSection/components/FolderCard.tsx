import React, { useState } from "react";
import { ContentElementsDisplayModeType, FolderCardType } from "../../../types";
import CardKebabMenuPopUp from "./CardKebabMenuPopUp";

type PropsType = {
  data: FolderCardType;
  displayMode: ContentElementsDisplayModeType;
};

export default function FolderCard(props: PropsType) {
  const { data, displayMode } = props;
  const [isKebabMenuBtnClicked, setIsKebabMenuBtnClicked] =
    useState<boolean>(false);

  return (
    <div
      className={`folder-card__container file-card ${
        displayMode === "grid" ? "grid" : "list"
      }`}
    >
      <header className="folder-card__header header">
        <span className="header__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H10L12 6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V8H11.175L9.175 6H4V18Z"
              fill="#173236"
            />
          </svg>
        </span>

        <button
          className={`"header__kebab-menu-btn kebab-menu-btn ${
            isKebabMenuBtnClicked ? " active" : ""
          }`}
          onClick={() => setIsKebabMenuBtnClicked((state) => !state)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 16.6667C9.54168 16.6667 9.14932 16.5035 8.82293 16.1771C8.49654 15.8507 8.33334 15.4583 8.33334 15C8.33334 14.5417 8.49654 14.1493 8.82293 13.8229C9.14932 13.4965 9.54168 13.3333 10 13.3333C10.4583 13.3333 10.8507 13.4965 11.1771 13.8229C11.5035 14.1493 11.6667 14.5417 11.6667 15C11.6667 15.4583 11.5035 15.8507 11.1771 16.1771C10.8507 16.5035 10.4583 16.6667 10 16.6667ZM10 11.6667C9.54168 11.6667 9.14932 11.5035 8.82293 11.1771C8.49654 10.8507 8.33334 10.4583 8.33334 10C8.33334 9.54168 8.49654 9.14932 8.82293 8.82293C9.14932 8.49654 9.54168 8.33334 10 8.33334C10.4583 8.33334 10.8507 8.49654 11.1771 8.82293C11.5035 9.14932 11.6667 9.54168 11.6667 10C11.6667 10.4583 11.5035 10.8507 11.1771 11.1771C10.8507 11.5035 10.4583 11.6667 10 11.6667ZM10 6.66668C9.54168 6.66668 9.14932 6.50348 8.82293 6.17709C8.49654 5.8507 8.33334 5.45834 8.33334 5.00001C8.33334 4.54168 8.49654 4.14932 8.82293 3.82293C9.14932 3.49654 9.54168 3.33334 10 3.33334C10.4583 3.33334 10.8507 3.49654 11.1771 3.82293C11.5035 4.14932 11.6667 4.54168 11.6667 5.00001C11.6667 5.45834 11.5035 5.8507 11.1771 6.17709C10.8507 6.50348 10.4583 6.66668 10 6.66668Z"
              fill="#173236"
            />
          </svg>
        </button>

        {isKebabMenuBtnClicked && <CardKebabMenuPopUp />}
      </header>

      <main className="folder-card__main main">
        <h4 className="main__title">{data.title}</h4>
        <h4 className="main__direction">{data.direction}</h4>
      </main>

      <footer className="folder-card__footer footer">
        <button className="footer__open-files-btn open-files-btn">
          <span className="open-files-btn__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.9669 3.80694L4.22383 10.3093C3.77694 10.7402 3.77694 11.4389 4.22383 11.8698C4.67073 12.3007 5.39529 12.3007 5.84218 11.8698L12.5853 5.36749C13.4791 4.50562 13.4791 3.10825 12.5853 2.24638C11.6915 1.38451 10.2424 1.38451 9.3486 2.24638L2.60549 8.7487C1.2648 10.0415 1.2648 12.1376 2.60549 13.4304C3.94617 14.7232 6.11984 14.7232 7.46053 13.4304L14.4 6.73872"
                stroke="#173236"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span className="open-file-btn__caption">
            {data.files.length} Файл(и)
          </span>
        </button>
      </footer>
    </div>
  );
}
