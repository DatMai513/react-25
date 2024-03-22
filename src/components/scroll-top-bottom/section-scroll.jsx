import { useRef } from "react"



export default function ScrollToSection() {

  const ref = useRef(3);

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red"
      }
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange"
      }
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow"
      }
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green"
      }
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue"
      }
    },
    {
      label: "Sixth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "violet"
      }
    },
  ]

  const handleScroll = () => {
    let position = ref.current.getBoundingClientRect().top

    window.scrollTo({
      top: position,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <h1>Scroll to a section</h1>
      <button onClick={handleScroll}>Click to scroll</button>
      {
        data.map((item, index) => <div ref={ref} style={item.style}>
          <h3>{item.label}</h3>
        </div>)
      }
    </div>
  )
}