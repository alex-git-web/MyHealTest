import React, { useState } from "react";
import "./../../../../../src/build/css/pages/UserCabinet/blocks/MedicalArchive/index.css";
import NavTabs from "./components/NavTabs";
import ActivePanel from "./components/ActivePanel";

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
      <NavTabs
        navTabs={navTabs}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={(value: number) => setActiveTabIndex(value)}
      />

      <ActivePanel navTabs={navTabs} activeTabIndex={activeTabIndex} />
    </div>
  );
}
