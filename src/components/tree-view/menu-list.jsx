import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {

  // data is coming in as an array of JSON, each object can be treated as a node
  // label (name)
  // to (clicking it leads to)
  // children (an array of more nodes)
  return (
    <ul className="menu-list-container">
      {
        list && list.length 
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null
      }
    </ul>
  )
}