import React, { useState } from "react";
import SectionContent from "./components/ContentSection/ContentSection";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import {
  ContentDisplayedElementsType,
  ContentElementsDisplayModeType,
  FilterPropsType,
} from "./types";
import T from "./CustomDropdown";
import CustomDropdown from "./CustomDropdown";
import { CustomCalendarInput } from "./CustomCalendarInput";

type PropsType = {
  panelTitle: string;
};

export default function MyRecordsActivePanel(props: PropsType) {
  const { panelTitle } = props;

  const [activeCategoryTabIndex, setActiveCategoryTabIndex] =
    useState<number>(0);
  const [categoriesTabs, setCategoriesTabs] = useState<string[]>([
    "Всі записи",
    "Призначене лікування",
    "Аналізи",
    "Дослідження",
    "Висновки",
    "Інше",
  ]);
  const [filterProps, setFilterProps] = useState<FilterPropsType>({
    selectedCategory: null,
    selectedStatus: null,
    fromDate: null,
    toDate: null,
  });

  const [elementsDisplayMode, setElementsDisplayMode] =
    useState<ContentElementsDisplayModeType>("grid");
  const [displayedElementsType, setDisplayedElementsType] =
    useState<ContentDisplayedElementsType>("files");

  return (
    <div className="my-records-panel__container">
      <CustomDropdown />
      <CustomCalendarInput />

      <Header panelTitle={panelTitle} setFilterProps={setFilterProps} />

      <SubHeader
        categoriesTabs={categoriesTabs}
        activeCategoryTabIndex={activeCategoryTabIndex}
        setActiveCategoryTabIndex={setActiveCategoryTabIndex}
        elementsDisplayMode={elementsDisplayMode}
        setElementsDisplayMode={(value: ContentElementsDisplayModeType) =>
          setElementsDisplayMode(value)
        }
        displayedElementsType={displayedElementsType}
        setDisplayedElementsType={(value: ContentDisplayedElementsType) =>
          setDisplayedElementsType(value)
        }
      />

      <SectionContent
        elementsDisplayMode={elementsDisplayMode}
        displayedElementsType={displayedElementsType}
        filterProps={filterProps}
      />
    </div>
  );
}
