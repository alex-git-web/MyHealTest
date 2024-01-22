import React, { useState } from "react";
import {
  ContentDisplayedElementsType,
  ContentElementsDisplayModeType,
  FileCardType,
  FilterPropsType,
  FolderCardType,
} from "../../types";
import FileCard from "./components/FileCard";
import { FileCardsDefault, FolderCardsDefault } from "../../contentDefault";
import FolderCard from "./components/FolderCard";
import { CheckIsDateInRange } from "../../../../../utils";

type PropsType = {
  filterProps: FilterPropsType;
  elementsDisplayMode: ContentElementsDisplayModeType;
  displayedElementsType: ContentDisplayedElementsType;
};

export default function ContentSection(props: PropsType) {
  const { filterProps, elementsDisplayMode, displayedElementsType } = props;

  const [filesCards, setFilesCards] =
    useState<FileCardType[]>(FileCardsDefault);

  const [foldersCards, setFoldersCards] =
    useState<FolderCardType[]>(FolderCardsDefault);

  return (
    <ul
      className={`content-section__container content-section my-records ${
        elementsDisplayMode === "grid" ? "grid-mode" : "list-mode"
      }`}
    >
      {displayedElementsType === "files" ? (
        filesCards.length ? (
          filesCards.map((item, index) => (
            <FileCard
              key={index}
              data={item}
              displayMode={elementsDisplayMode}
              displayedElementsType={displayedElementsType}
            />
          ))
        ) : (
          <div>Cписок порожній!</div>
        )
      ) : (
        displayedElementsType === "folders" &&
        (foldersCards.length ? (
          foldersCards.map((item, index) => (
            <FolderCard
              key={index}
              data={item}
              displayMode={elementsDisplayMode}
              displayedElementsType={displayedElementsType}
            />
          ))
        ) : (
          <div>Cписок порожній!</div>
        ))
      )}
    </ul>
  );
}
