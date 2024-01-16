import React, { useState } from "react";
import { ContentElementsDisplayModeType, FileCardType } from "../../../types";
import CardKebabMenuPopUp from "./CardKebabMenuPopUp";

type PropsType = {
  data: FileCardType;
  displayMode: ContentElementsDisplayModeType;
};

const OpenFilesBtn = ({ filesLenght }: { filesLenght: number }) => {
  return (
    <button className="open-files-btn">
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

      <span className="open-file-btn__caption">{filesLenght} Файл(и)</span>
    </button>
  );
};

const InfoBlock = ({ data }: { data: FileCardType }) => {
  return (
    <div className="info-block">
      <h4 className="info-block__caption">
        {data.bloodPressureType
          ? data.bloodPressureType
          : data.doctorName
          ? data.doctorName
          : data.medicalClinicTitle && data.medicalClinicTitle}
      </h4>
      <h4 className="info-block__sub-caption">
        {data.bloodPressureValue
          ? data.bloodPressureValue
          : data.doctorSpeciality
          ? data.doctorSpeciality
          : data.medicalClinicAddress && data.medicalClinicAddress}
      </h4>
    </div>
  );
};

const KebubMenuBtn = ({
  isKebabMenuBtnClicked,
  setIsKebabMenuBtnClicked,
}: {
  isKebabMenuBtnClicked: boolean;
  setIsKebabMenuBtnClicked: Function;
}) => {
  return (
    <>
      <button
        className={`"header__kebab-menu-btn kebab-menu-btn ${
          isKebabMenuBtnClicked ? " active" : ""
        }`}
        onClick={() => setIsKebabMenuBtnClicked(!isKebabMenuBtnClicked)}
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
    </>
  );
};

export default function FileCard(props: PropsType) {
  const { data, displayMode } = props;
  const [isKebabMenuBtnClicked, setIsKebabMenuBtnClicked] =
    useState<boolean>(false);

  return displayMode === "grid" ? (
    <div className="file-card__container file-card grid-mode">
      <header className="file-card__header">
        <span>
          <h4 className="file-card__create-date">{data.createDate}</h4>
          <h4 className="file-card__title">{data.title}</h4>
        </span>

        <KebubMenuBtn
          isKebabMenuBtnClicked={isKebabMenuBtnClicked}
          setIsKebabMenuBtnClicked={setIsKebabMenuBtnClicked}
        />
      </header>

      <InfoBlock data={data} />

      <OpenFilesBtn filesLenght={data.files.length} />
    </div>
  ) : displayMode === "list" ? (
    <div className="file-card__container file-card file-card list-mode">
      <h4 className="file-card__title">{data.title}</h4>

      <InfoBlock data={data} />

      <h4 className="file-card__create-date">{data.createDate}</h4>

      <OpenFilesBtn filesLenght={data.files.length} />

      <KebubMenuBtn
        isKebabMenuBtnClicked={isKebabMenuBtnClicked}
        setIsKebabMenuBtnClicked={setIsKebabMenuBtnClicked}
      />
    </div>
  ) : (
    <></>
  );
}
