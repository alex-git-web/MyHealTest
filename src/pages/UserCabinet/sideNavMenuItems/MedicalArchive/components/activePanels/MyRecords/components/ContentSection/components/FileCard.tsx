import React, { useState } from 'react';
import { ContentDisplayedElementsType, ContentElementsDisplayModeType, FileCardType } from '../../../types';
import { KebubMenuBtn, OpenFilesBtn } from './common';

type PropsType = {
  data: FileCardType;
  displayMode: ContentElementsDisplayModeType;
  displayedElementsType: ContentDisplayedElementsType;
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

export default function FileCard(props: PropsType) {
  const { data, displayMode, displayedElementsType } = props;
  const [isKebabMenuBtnClicked, setIsKebabMenuBtnClicked] = useState<boolean>(false);

  return displayMode === 'grid' ? (
    <li key={data.id} className="file-card__container file-card grid-mode">
      <header className="file-card__header">
        <span>
          <h4 className="file-card__create-date">{data.createDate}</h4>
          <h4 className="file-card__title">{data.title}</h4>
        </span>

        <KebubMenuBtn
          isKebabMenuBtnClicked={isKebabMenuBtnClicked}
          setIsKebabMenuBtnClicked={setIsKebabMenuBtnClicked}
          displayMode={displayMode}
          displayedElementsType={displayedElementsType}
        />
      </header>

      <InfoBlock data={data} />

      <OpenFilesBtn filesLenght={data.files.length} />
    </li>
  ) : displayMode === 'list' ? (
    <li key={data.id} className="file-card__container file-card file-card list-mode">
      <h4 className="file-card__title">{data.title}</h4>

      <InfoBlock data={data} />

      <h4 className="file-card__create-date">{data.createDate}</h4>

      <div className="end-container">
        <OpenFilesBtn filesLenght={data.files.length} />

        <KebubMenuBtn
          isKebabMenuBtnClicked={isKebabMenuBtnClicked}
          setIsKebabMenuBtnClicked={setIsKebabMenuBtnClicked}
          displayMode={displayMode}
          displayedElementsType={displayedElementsType}
        />
      </div>
    </li>
  ) : (
    <></>
  );
}
