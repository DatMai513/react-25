import { useRef } from "react";
import useFetch from "../use-fetch";


export default function ScrollTopBottom() {
  const bottomRef = useRef(null);
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({behavior: "smooth"})
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  if (error) {
    return (
      <div>Error occured, {error}</div>
    )
  }

  if (loading) {
    return (
      <div>Loading, please wait</div>
    )
  }

  return (
    <div>
      <h1>Scroll to Top or Bottom</h1>
      <h3>This is the top</h3>
      <button onClick={scrollToBottom}>Scroll to bottom</button>
      <ul style={{listStyle: "none"}}>
        {
          data && data.products && data.products.length 
          ? data.products.map((item) => 
            <li key={item.id}>{item.title}</li>
          )
          : null
        }
      </ul>
      <div ref={bottomRef}></div>
      <h3>This is the bottom</h3>
      <button onClick={scrollToTop}>Scroll to top</button>
    </div>
  )
}