import React from "react";
import {
  ContentDisplayedElementsType,
  ContentElementsDisplayModeType,
} from "../../types";

type PropsType = {
  categoriesTabs: string[];
  activeCategoryTabIndex: number;
  setActiveCategoryTabIndex: Function;
  elementsDisplayMode: ContentElementsDisplayModeType;
  setElementsDisplayMode: Function;
  displayedElementsType: ContentDisplayedElementsType;
  setDisplayedElementsType: Function;
};

export default function SubHeader(props: PropsType) {
  const {
    categoriesTabs,
    activeCategoryTabIndex,
    setActiveCategoryTabIndex,
    elementsDisplayMode,
    setElementsDisplayMode,
    displayedElementsType,
    setDisplayedElementsType,
  } = props;

  return (
    <div className="panel-sub-header__container panel-sub-header">
      <ul className="panel-sub-header__nav-tabs nav-tabs">
        {categoriesTabs.map((item, index) => {
          return (
            <li
              key={index}
              className={`nav-tabs__tab-item${
                index === activeCategoryTabIndex ? " active" : ""
              } `}
              onClick={() => setActiveCategoryTabIndex(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>

      <div className="panel-sub-header__functional-buttons functional-buttons">
        <button
          className="functional__button view-mode-button"
          onClick={() => {
            setElementsDisplayMode(
              elementsDisplayMode === "grid" ? "list" : "grid"
            );
          }}
        >
          {elementsDisplayMode === "grid" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.08333 8.75H4.16667C3.70833 8.75 3.31597 8.58681 2.98958 8.26042C2.66319 7.93403 2.5 7.54167 2.5 7.08333V4.16667C2.5 3.70833 2.66319 3.31597 2.98958 2.98958C3.31597 2.66319 3.70833 2.5 4.16667 2.5H7.08333C7.54167 2.5 7.93403 2.66319 8.26042 2.98958C8.58681 3.31597 8.75 3.70833 8.75 4.16667V7.08333C8.75 7.54167 8.58681 7.93403 8.26042 8.26042C7.93403 8.58681 7.54167 8.75 7.08333 8.75ZM4.16667 7.08333H7.08333V4.16667H4.16667V7.08333ZM7.08333 17.5H4.16667C3.70833 17.5 3.31597 17.3368 2.98958 17.0104C2.66319 16.684 2.5 16.2917 2.5 15.8333V12.9167C2.5 12.4583 2.66319 12.066 2.98958 11.7396C3.31597 11.4132 3.70833 11.25 4.16667 11.25H7.08333C7.54167 11.25 7.93403 11.4132 8.26042 11.7396C8.58681 12.066 8.75 12.4583 8.75 12.9167V15.8333C8.75 16.2917 8.58681 16.684 8.26042 17.0104C7.93403 17.3368 7.54167 17.5 7.08333 17.5ZM4.16667 15.8333H7.08333V12.9167H4.16667V15.8333ZM15.8333 8.75H12.9167C12.4583 8.75 12.066 8.58681 11.7396 8.26042C11.4132 7.93403 11.25 7.54167 11.25 7.08333V4.16667C11.25 3.70833 11.4132 3.31597 11.7396 2.98958C12.066 2.66319 12.4583 2.5 12.9167 2.5H15.8333C16.2917 2.5 16.684 2.66319 17.0104 2.98958C17.3368 3.31597 17.5 3.70833 17.5 4.16667V7.08333C17.5 7.54167 17.3368 7.93403 17.0104 8.26042C16.684 8.58681 16.2917 8.75 15.8333 8.75ZM12.9167 7.08333H15.8333V4.16667H12.9167V7.08333ZM15.8333 17.5H12.9167C12.4583 17.5 12.066 17.3368 11.7396 17.0104C11.4132 16.684 11.25 16.2917 11.25 15.8333V12.9167C11.25 12.4583 11.4132 12.066 11.7396 11.7396C12.066 11.4132 12.4583 11.25 12.9167 11.25H15.8333C16.2917 11.25 16.684 11.4132 17.0104 11.7396C17.3368 12.066 17.5 12.4583 17.5 12.9167V15.8333C17.5 16.2917 17.3368 16.684 17.0104 17.0104C16.684 17.3368 16.2917 17.5 15.8333 17.5ZM12.9167 15.8333H15.8333V12.9167H12.9167V15.8333Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.16667 7.16667C1.70833 7.16667 1.31597 7.00347 0.989583 6.67708C0.663194 6.35069 0.5 5.95833 0.5 5.5V2.16667C0.5 1.70833 0.663194 1.31597 0.989583 0.989583C1.31597 0.663194 1.70833 0.5 2.16667 0.5H13.8333C14.2917 0.5 14.684 0.663194 15.0104 0.989583C15.3368 1.31597 15.5 1.70833 15.5 2.16667V5.5C15.5 5.95833 15.3368 6.35069 15.0104 6.67708C14.684 7.00347 14.2917 7.16667 13.8333 7.16667H2.16667ZM2.16667 5.5H13.8333V2.16667H2.16667V5.5ZM2.16667 15.5C1.70833 15.5 1.31597 15.3368 0.989583 15.0104C0.663194 14.684 0.5 14.2917 0.5 13.8333V10.5C0.5 10.0417 0.663194 9.64931 0.989583 9.32292C1.31597 8.99653 1.70833 8.83333 2.16667 8.83333H13.8333C14.2917 8.83333 14.684 8.99653 15.0104 9.32292C15.3368 9.64931 15.5 10.0417 15.5 10.5V13.8333C15.5 14.2917 15.3368 14.684 15.0104 15.0104C14.684 15.3368 14.2917 15.5 13.8333 15.5H2.16667ZM2.16667 13.8333H13.8333V10.5H2.16667V13.8333Z"
                fill="white"
              />
            </svg>
          )}
        </button>

        <div className="functional__button files-or-folders-mode-toogle-buttons">
          <button
            className={`files-mode-button button ${
              displayedElementsType === "files" ? "active" : ""
            }`}
            onClick={() => setDisplayedElementsType("files")}
          >
            Файли
          </button>
          <button
            className={`files-mode-button button ${
              displayedElementsType === "folders" && "active"
            }`}
            onClick={() => setDisplayedElementsType("folders")}
          >
            Папки
          </button>
        </div>
      </div>
    </div>
  );
}
