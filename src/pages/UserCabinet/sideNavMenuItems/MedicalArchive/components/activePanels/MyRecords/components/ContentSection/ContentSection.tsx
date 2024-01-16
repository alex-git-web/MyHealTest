import React, { useState } from "react";
import FlatList from "flatlist-react";
import { ContentDisplayedElementsType, FileCardType } from "../../types";
import FileCard from "./components/FileCard";

type PropsType = {
  displayedElementsType: ContentDisplayedElementsType;
};

export default function ContentSection(props: PropsType) {
  const { displayedElementsType } = props;

  const [filesCards, setFilesCards] = useState<FileCardType[]>([
    {
      id: 1,
      createDate: "27.11.2023, 12:45",
      title: "Кров'яний тиск",
      bloodPressureType: "Систолічний (верхній)",
      bloodPressureValue: "130 мм рт.ст.",
      files: [],
    },
    {
      id: 2,
      createDate: "12.09.2023, 12:15",
      title: "Ангіна, захворювання горла",
      doctorName: "Іванюк Микола Іанович",
      doctorSpeciality: "Терапевт",
      files: ["file 1"],
    },
    {
      id: 3,
      createDate: "29.11.2023, 12:55",
      title: "Аналіз крові",
      medicalClinicTitle: "Сінево / Synevo",
      medicalClinicAddress: "м. Луцьк, пр-т Соборності, 32",
      files: ["file 1", "file 2", "file 3", "file 4"],
    },
    {
      id: 4,
      createDate: "19.11.2023, 12:00",
      title: "Кров'яний тиск",
      bloodPressureType: "Систолічний (верхній)",
      bloodPressureValue: "130 мм рт.ст.",
      files: ["file 1"],
    },
    {
      id: 5,
      createDate: "15.10.2023, 12:00",
      title: "SS-B (ANA-Screen), антитела IgG / 9329",
      medicalClinicTitle: "Сінево / Synevo",
      medicalClinicAddress: "Луцьк, пр-т Волі, 14",
      files: ["file 1", "file 2"],
    },
    {
      id: 6,
      createDate: "12.11.2023, 11:00",
      title: "Кров'яний тиск",
      bloodPressureType: "Систолічний (верхній)",
      bloodPressureValue: "130 мм рт.ст.",
      files: ["file 1", "file 1", "file 1", "file 1", "file 1"],
    },
  ]);

  return (
    <ul className="content-section__container content-section">
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
    </ul>
  );
}
