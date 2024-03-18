import { useState } from "react"
import MenuList from "./menu-list"


export default function MenuItem({ item }) {

  // data is coming in as an array of JSON, each object can be treated as a node
  // label (name)
  // to (clicking it leads to)
  // children (an array of more nodes)

  // Track which parents have been expanded or not
  const [expandedItem, setExpandedItem] = useState({});

  const handleExpand = (currentItem) => {
    console.log(expandedItem);
    setExpandedItem({
      ...expandedItem,
      [currentItem] : !expandedItem[currentItem]
    })
    console.log(expandedItem);
  }

  return (
    <li>
      <div style={{display: "flex", gap: "20px"}}>
        <p>{item.label}</p>
        {
          item && item.children && item.children.length
          ? <span onClick={()=>handleExpand(item.label)}>
              {
                expandedItem[item.label] ? "-" : "+"
              }
            </span>
          : null
        }
      </div>
      {
        // Check if the current item has children, if it does recursively render the list component
        item && item.children && item.children.length > 0 && expandedItem[item.label]
        ? (<MenuList list={item.children}/>)
        : null 
      }
    </li>
  )
}