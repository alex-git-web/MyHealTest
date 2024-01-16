import React, { useState } from "react";
import FlatList from "flatlist-react";
import {
  ContentDisplayedElementsType,
  FileCardType,
  FolderCardType,
} from "../../types";
import FileCard from "./components/FileCard";
import { FileCardsDefault, FolderCardsDefault } from "../../contentDefault";
import FolderCard from "./components/FolderCard";

type PropsType = {
  displayedElementsType: ContentDisplayedElementsType;
};

export default function ContentSection(props: PropsType) {
  const { displayedElementsType } = props;

  const [filesCards, setFilesCards] =
    useState<FileCardType[]>(FileCardsDefault);

  const [foldersCards, setFoldersCards] =
    useState<FolderCardType[]>(FolderCardsDefault);

  return (
    <ul className="content-section__container content-section">
      {displayedElementsType === "files" ? (
        <FlatList
          list={filesCards}
          renderItem={(item, index) => <FileCard key={index} data={item} />}
          renderWhenEmpty={() => <div>Cписок порожній!</div>}
          // sortBy={["firstName", {key: "lastName", descending: true}]}
          // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
          displayGrid
          gridGap="10px"
          rowGap="10px"
          displayRow
        />
      ) : (
        <FlatList
          list={foldersCards}
          renderItem={(item, index) => <FolderCard key={index} data={item} />}
          renderWhenEmpty={() => <div>Cписок порожній!</div>}
          // sortBy={["firstName", {key: "lastName", descending: true}]}
          // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
          displayGrid
          gridGap="10px"
          rowGap="10px"
          displayRow
        />
      )}
    </ul>
  );
}
