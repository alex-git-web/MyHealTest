import React, { useState } from "react";
import NavTabsForActivePanel from "./components/NavTabsForActivePanel";
import "./../../../../../src/build/css/pages/UserCabinet/sideNavMenuItems/MedicalArchive/index.css";
import ActivePanel from "./components/activePanels/MyRecords/ActivePanel";

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
      <NavTabsForActivePanel
        navTabs={navTabs}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={(value: number) => setActiveTabIndex(value)}
      />

      {activeTabIndex === 0 ? (
        <ActivePanel panelTitle={navTabs[activeTabIndex]} />
      ) : activeTabIndex === 1 ? null : activeTabIndex === 2 ? null : (
        activeTabIndex === 3 && null
      )}
    </div>
  );
}
