import React, { useState } from "react";
import "./App.css";
// import TabForm from "./components/TabForm";
import Tabs from "./components/Tabs";

function App() {
  const [tabs, setTabs] = useState([
    {
      label: "Tab 1",
      content: "This is my tab 1 content",
      selected: true,
    },
    {
      label: "Tab 2",
      content: "This is my tab 2 content",
      selected: false,
    },
    {
      label: "Tab 3",
      content: "This is my tab 3 content",
      selected: false,
    },
  ]);

  // const addTab = () => {
  //   const [...currTabs] = allTabs;
  //   currTabs.push(tab);
  //   setAllTabs(currTabs);
  // };

  // const changeTab = () => {
  //   const [...currTabs] = allTabs;
  //   for (let tab of currTabs) {
  //     tab.selected = false;
  //   }
  //   currTabs[i].selected = true;
  //   setAllTabs(currTabs);
  // };

  return (
    <div className="App">
      <h1 className="my-5 text-center">Tabs</h1>
      <Tabs tabs={tabs} setTabs={setTabs} />
      {/* <h1 className="my-5 text-center">Tab Form</h1>
      <TabForm tab={tab} setTab={setTab} newSubmit={addTab} /> */}
    </div>
  );
}

export default App;
