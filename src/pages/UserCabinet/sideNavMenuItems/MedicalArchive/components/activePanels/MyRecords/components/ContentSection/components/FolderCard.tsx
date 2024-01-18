import React, { useState } from "react";
import { ContentElementsDisplayModeType, FolderCardType } from "../../../types";
import { KebubMenuBtn, OpenFilesBtn } from "./common";

type PropsType = {
  data: FolderCardType;
  displayMode: ContentElementsDisplayModeType;
};

const MainInfoBlock = ({ data }: { data: FolderCardType }) => {
  return (
    <div className="folder-card__main main">
      <h4 className="main__title">{data.title}</h4>
      <h4 className="main__direction">{data.direction}</h4>
    </div>
  );
};

export default function FolderCard(props: PropsType) {
  const { data, displayMode } = props;
  const [isKebabMenuBtnClicked, setIsKebabMenuBtnClicked] =
    useState<boolean>(false);

  return displayMode === "grid" ? (
    <div className="folder-card__container folder-card grid-mode">
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

        <KebubMenuBtn
          isKebabMenuBtnClicked={isKebabMenuBtnClicked}
          setIsKebabMenuBtnClicked={setIsKebabMenuBtnClicked}
          displayMode={displayMode}
        />
      </header>

      <MainInfoBlock data={data} />

      <OpenFilesBtn filesLenght={data.files.length} />
    </div>
  ) : displayMode === "list" ? (
    <div className="folder-card__container folder-card list-mode">
      <span className="folder-card__header-icon">
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

      <MainInfoBlock data={data} />

      <OpenFilesBtn filesLenght={data.files.length} />

      <KebubMenuBtn
        isKebabMenuBtnClicked={isKebabMenuBtnClicked}
        setIsKebabMenuBtnClicked={setIsKebabMenuBtnClicked}
        displayMode={displayMode}
      />
    </div>
  ) : (
    <></>
  );
}
