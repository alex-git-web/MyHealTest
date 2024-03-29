import React, { useState } from "react";
import Header from "./components/Header/Header";
import ContentSection from "./components/ContentSection/ContentSection";
import HelpInfoModal from "./components/HelpInfoModal/HelpInfoModal";

type PropsType = {
  panelTitle: string;
};
export default function LocalStorageActivePanel(props: PropsType) {
  const { panelTitle } = props;
  const [isShowHelp, setIsShowHelp] = useState<boolean>(false);

  return (
    <div className="local-storage-panel__container">
      <Header
        panelTitle={panelTitle}
        isShowHelp={isShowHelp}
        setIsShowHelp={setIsShowHelp}
      />

      <ContentSection />

      {isShowHelp && <HelpInfoModal closeModal={() => setIsShowHelp(false)} />}
    </div>
  );
}
