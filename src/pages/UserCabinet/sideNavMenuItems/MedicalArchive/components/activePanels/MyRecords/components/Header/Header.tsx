import React, { useState } from "react";
import FilterBtnPopUp from "./components/FilterBtnPopUp";

type PropsType = {
  panelTitle: string;
};

export default function Header(props: PropsType) {
  const { panelTitle } = props;
  const [isShowFilterPopUp, setIsShowFilterPopUp] = useState<boolean>(false);

  return (
    <div className="panel-header__container panel-header">
      <h2 className="panel-header__title">{panelTitle}</h2>

      <div className="panel-header__functional-buttons functional-buttons">
        <button
          className="functional-buttons__button button filter-button"
          onClick={() => setIsShowFilterPopUp((state) => !state)}
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
                d="M9.16665 16.6667C8.93054 16.6667 8.73262 16.5868 8.5729 16.4271C8.41318 16.2674 8.33332 16.0695 8.33332 15.8333V10.8333L3.49999 4.66668C3.29165 4.3889 3.2604 4.09723 3.40624 3.79168C3.55207 3.48612 3.80554 3.33334 4.16665 3.33334H15.8333C16.1944 3.33334 16.4479 3.48612 16.5937 3.79168C16.7396 4.09723 16.7083 4.3889 16.5 4.66668L11.6667 10.8333V15.8333C11.6667 16.0695 11.5868 16.2674 11.4271 16.4271C11.2673 16.5868 11.0694 16.6667 10.8333 16.6667H9.16665ZM9.99998 10.25L14.125 5.00001H5.87499L9.99998 10.25Z"
                fill="#173236"
              />
            </svg>
          </div>

          <span className="button__caption">Фільтр</span>
        </button>

        <button className="functional-buttons__button button access-button">
          <div className="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.99992 18.3333C4.54159 18.3333 4.14922 18.1701 3.82284 17.8438C3.49645 17.5174 3.33325 17.125 3.33325 16.6667V8.33334C3.33325 7.87501 3.49645 7.48265 3.82284 7.15626C4.14922 6.82987 4.54159 6.66668 4.99992 6.66668H5.83325V5.00001C5.83325 3.84723 6.2395 2.86459 7.052 2.05209C7.8645 1.23959 8.84714 0.833344 9.99992 0.833344C11.1527 0.833344 12.1353 1.23959 12.9478 2.05209C13.7603 2.86459 14.1666 3.84723 14.1666 5.00001V6.66668H14.9999C15.4583 6.66668 15.8506 6.82987 16.177 7.15626C16.5034 7.48265 16.6666 7.87501 16.6666 8.33334V16.6667C16.6666 17.125 16.5034 17.5174 16.177 17.8438C15.8506 18.1701 15.4583 18.3333 14.9999 18.3333H4.99992ZM4.99992 16.6667H14.9999V8.33334H4.99992V16.6667ZM9.99992 14.1667C10.4583 14.1667 10.8506 14.0035 11.177 13.6771C11.5034 13.3507 11.6666 12.9583 11.6666 12.5C11.6666 12.0417 11.5034 11.6493 11.177 11.3229C10.8506 10.9965 10.4583 10.8333 9.99992 10.8333C9.54158 10.8333 9.14922 10.9965 8.82283 11.3229C8.49645 11.6493 8.33325 12.0417 8.33325 12.5C8.33325 12.9583 8.49645 13.3507 8.82283 13.6771C9.14922 14.0035 9.54158 14.1667 9.99992 14.1667ZM7.49992 6.66668H12.4999V5.00001C12.4999 4.30557 12.2569 3.71529 11.7708 3.22918C11.2846 2.74307 10.6944 2.50001 9.99992 2.50001C9.30547 2.50001 8.7152 2.74307 8.22908 3.22918C7.74297 3.71529 7.49992 4.30557 7.49992 5.00001V6.66668Z"
                fill="#173236"
              />
            </svg>
          </div>

          <span className="button__caption">Доступи</span>
        </button>

        <button className="functional-buttons__button button print-button">
          <div className="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3334 6.66667V4.16667H6.66675V6.66667H5.00008V2.5H15.0001V6.66667H13.3334ZM15.0001 10.4167C15.2362 10.4167 15.4341 10.3368 15.5938 10.1771C15.7536 10.0174 15.8334 9.81944 15.8334 9.58333C15.8334 9.34722 15.7536 9.14931 15.5938 8.98958C15.4341 8.82986 15.2362 8.75 15.0001 8.75C14.764 8.75 14.5661 8.82986 14.4063 8.98958C14.2466 9.14931 14.1667 9.34722 14.1667 9.58333C14.1667 9.81944 14.2466 10.0174 14.4063 10.1771C14.5661 10.3368 14.764 10.4167 15.0001 10.4167ZM13.3334 15.8333V12.5H6.66675V15.8333H13.3334ZM15.0001 17.5H5.00008V14.1667H1.66675V9.16667C1.66675 8.45833 1.9098 7.86458 2.39591 7.38542C2.88203 6.90625 3.4723 6.66667 4.16675 6.66667H15.8334C16.5417 6.66667 17.1355 6.90625 17.6147 7.38542C18.0938 7.86458 18.3334 8.45833 18.3334 9.16667V14.1667H15.0001V17.5ZM16.6667 12.5V9.16667C16.6667 8.93056 16.5869 8.73264 16.4272 8.57292C16.2674 8.41319 16.0695 8.33333 15.8334 8.33333H4.16675C3.93064 8.33333 3.73272 8.41319 3.573 8.57292C3.41328 8.73264 3.33341 8.93056 3.33341 9.16667V12.5H5.00008V10.8333H15.0001V12.5H16.6667Z"
                fill="#173236"
              />
            </svg>
          </div>
        </button>

        {isShowFilterPopUp && <FilterBtnPopUp />}
      </div>
    </div>
  );
}