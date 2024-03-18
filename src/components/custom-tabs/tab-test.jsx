// A main component that will test out the modular custom tab component
import CustomTabs from "./tabs";

function RandomComponent() {
  return (
    <h1>Some random content</h1>
  )
}


export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is Tab 1</div>
    },
    {
      label: "Tab 2",
      content: <div>This is Tab 2</div>
    },
    {
      label: "Tab 3",
      content: <RandomComponent/>
    },
  ]

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  }

  return (
    <CustomTabs tabsContent={tabs} onChange={handleChange}/>
  )
}