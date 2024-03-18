import { useState } from "react"
import "./tabs.css";

// This component renders a tab UI, it is not responsible for data
export default function CustomTabs({ tabsContent, onChange }) {

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function  handleOnClick(index) {
    setCurrentTabIndex(index);
    onChange(index);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {
          tabsContent.map((tabItem, index) => (
          <div className={`tab-item ${currentTabIndex === index ? "active" : "inactive" }`} onClick={()=> handleOnClick(index)} key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
          ))
        }

      </div>
      <div className="content" style={{color: "red"}}>
        {
          tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  )
}