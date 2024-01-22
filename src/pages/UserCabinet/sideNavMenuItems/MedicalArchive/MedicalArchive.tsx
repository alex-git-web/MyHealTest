import React, { useState } from "react";
import NavTabsForActivePanel from "./components/NavTabsForActivePanel";
import MyRecordsActivePanel from "./components/activePanels/MyRecords/MyRecordsActivePanel";
import LocalStorageActivePanel from "./components/activePanels/LocalStorage/LocalStorageActivePanel";

const MedicalArchive = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [navTabs, setNavTabs] = useState<string[]>([
    "Мої записи",
    "Історія змін",
    "Доступи",
    "Локальне сховище",
  ]);

  return (
    <div className="medical-archive__container">
      <NavTabsForActivePanel
        navTabs={navTabs}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={(value: number) => setActiveTabIndex(value)}
      />

      {activeTabIndex === 0 ? (
        <MyRecordsActivePanel panelTitle={navTabs[activeTabIndex]} />
      ) : activeTabIndex === 1 ? null : activeTabIndex === 2 ? null : (
        activeTabIndex === 3 && (
          <LocalStorageActivePanel panelTitle={navTabs[activeTabIndex]} />
        )
      )}
    </div>
  );
};

export default MedicalArchive;
