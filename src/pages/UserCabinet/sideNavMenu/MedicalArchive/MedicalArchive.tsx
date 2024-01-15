import React, { useState } from "react";
import MyRecordsPanel from "./components/activePanels/MyRecords/MyRecordsPanel";
import NavTabsForActivePanels from "./components/NavTabsForActivePanels";
import "./../../../../../src/build/css/pages/UserCabinet/sideNavMenu/MedicalArchive/index.css";

export default function MedicalArchive() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [navTabs, setNavTabs] = useState<string[]>([
    "Мої записи",
    "Історія змін",
    "Доступи",
    "Локальне сховище",
  ]);

  return (
    <div className="medical-archive__container">
      <NavTabsForActivePanels
        navTabs={navTabs}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={(value: number) => setActiveTabIndex(value)}
      />

      {activeTabIndex === 0 ? (
        <MyRecordsPanel panelTitle={navTabs[activeTabIndex]} />
      ) : activeTabIndex === 1 ? null : activeTabIndex === 2 ? null : (
        activeTabIndex === 3 && null
      )}
    </div>
  );
}
