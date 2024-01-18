import React, { useState } from "react";
import ActivePanel from "./activePanels/MyRecords/MyRecordsActivePanel";

type PropsType = {
  navTabs: string[];
  activeTabIndex: number;
  setActiveTabIndex: Function;
};

export default function NavTabsForActivePanel(props: PropsType) {
  const { navTabs, activeTabIndex, setActiveTabIndex } = props;

  return (
    <section className="nav-tabs-for-active-panel__container">
      <ul className="nav-tabs-list">
        {navTabs.map((item, index) => {
          return (
            <li
              key={index}
              className={`nav-tabs-item${
                index === activeTabIndex ? " active" : ""
              }`}
              onClick={() => setActiveTabIndex(index)}
            >
              {item}
              <span className="nav-tabs-item-left-bottom-corner bottom-corner"></span>
              <span className="nav-tabs-item-right-bottom-corner bottom-corner"></span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
