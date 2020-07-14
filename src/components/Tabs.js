import React from "react";
import styles from "./TabComponent.module.css";

const Tabs = (props) => {
  const { tabs, setTabs } = props;

  const changeTab = (e, i) => {
    const [...currTabs] = tabs;

    for (let tab of currTabs) {
      tab.selected = false;
    }
    currTabs[i].selected = true;
    console.log(currTabs[i]);
    setTabs(currTabs);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={(e) => changeTab(e, i)}
              className={
                tab.selected
                  ? "btn btn-primary col-sm-3 m-1"
                  : "col-sm-3 m-1 btn btn-secondary"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className={styles.boxStyle}>
            {tabs.map((tab, i) =>
              tab.selected == true ? (
                <p key={i} className="text-center">
                  {tab.content}
                </p>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
