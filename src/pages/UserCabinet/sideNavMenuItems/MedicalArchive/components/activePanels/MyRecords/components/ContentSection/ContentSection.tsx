import React, { useState } from "react";
import FlatList from "flatlist-react";
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
    <ul className="content-section__container content-section">
      {displayedElementsType === "files" ? (
        <FlatList
          list={filesCards}
          renderItem={(item, index) => (
            <FileCard
              key={index}
              data={item}
              displayMode={elementsDisplayMode}
            />
          )}
          renderWhenEmpty={() => <div>Cписок порожній!</div>}
          // sortBy={["firstName", {key: "lastName", descending: true}]}
          // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
          filterBy={(item, index) => {
            const a = item.createDate.split(",")[0].split(".");
            return CheckIsDateInRange({
              fromDate: filterProps.fromDate,
              toDate: filterProps.toDate,
              date: `${a[2]}-${a[1]}-${a[0]}`, // year - month - day
            });
          }}
          displayGrid={elementsDisplayMode === "grid" && true}
          gridGap="10px"
        />
      ) : (
        <FlatList
          list={foldersCards}
          renderItem={(item, index) => (
            <FolderCard
              key={index}
              data={item}
              displayMode={elementsDisplayMode}
            />
          )}
          renderWhenEmpty={() => <div>Cписок порожній!</div>}
          // sortBy={["firstName", {key: "lastName", descending: true}]}
          // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
          displayGrid={elementsDisplayMode === "grid" && true}
          gridGap="10px"
        />
      )}
    </ul>
  );
}
