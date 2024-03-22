import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutsideTest() {
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {
        showContent ? 
        <div ref={ref}>
          <h1>Random Content</h1>
          <p>Click outside to close this</p>
        </div> 
        : <button onClick={()=>setShowContent(true)}>Show Content</button>
      }
    </div>
  )
}