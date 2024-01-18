import React, { useState } from "react";

type PropsType = {
  panelTitle: string;
  isShowHelp: boolean;
  setIsShowHelp: Function;
};

export default function Header(props: PropsType) {
  const { panelTitle, isShowHelp, setIsShowHelp } = props;

  return (
    <div className="panel-header__container panel-header">
      <h2 className="panel-header__title">{panelTitle}</h2>

      <div className="panel-header__functional-buttons functional-buttons">
        <button
          className="functional-buttons__button button help-button"
          onClick={() => setIsShowHelp(!isShowHelp)}
        >
          <div className="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.2222 17.5C14.3643 17.5 17.7222 14.1421 17.7222 10C17.7222 5.85786 14.3643 2.5 10.2222 2.5C6.08003 2.5 2.72217 5.85786 2.72217 10C2.72217 14.1421 6.08003 17.5 10.2222 17.5Z"
                stroke="#173236"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2222 13.3333V10"
                stroke="#173236"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2222 6.66699H10.2315"
                stroke="#173236"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <span className="button__caption">Допомога</span>
        </button>

        <button className="functional-buttons__button button save-data-button">
          <div className="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99992 13.333L5.83325 9.16634L6.99992 7.95801L9.16658 10.1247V3.33301H10.8333V10.1247L12.9999 7.95801L14.1666 9.16634L9.99992 13.333ZM4.99992 16.6663C4.54159 16.6663 4.14922 16.5031 3.82284 16.1768C3.49645 15.8504 3.33325 15.458 3.33325 14.9997V12.4997H4.99992V14.9997H14.9999V12.4997H16.6666V14.9997C16.6666 15.458 16.5034 15.8504 16.177 16.1768C15.8506 16.5031 15.4583 16.6663 14.9999 16.6663H4.99992Z"
                fill="#173236"
              />
            </svg>
          </div>

          <span className="button__caption">Зберегати дані</span>
        </button>
      </div>
    </div>
  );
}
