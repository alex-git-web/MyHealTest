import React, { useState } from "react";
import ActivePanel from "./ActivePanel";

type PropsType = {
  navTabs: string[];
  activeTabIndex: number;
  setActiveTabIndex: Function;
};

export default function NavTabs(props: PropsType) {
  const { navTabs, activeTabIndex, setActiveTabIndex } = props;

  return (
    <section className="nav-tabs__container">
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
