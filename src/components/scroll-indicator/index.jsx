import { useEffect, useState } from "react";
import "./scroll.css";


export default function ScrollIndicator({ url }) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // What is the process of fetching from a URL?
  // define an async function that receives a url to fetch from
  const fetchData = async (getURL) => {
    // create a try catch for aysnc functions
    try {
      // fetch the data and parse it into JSON format
      setLoading(true);
      const response = await fetch(getURL);
      const data = await response.json();

      // ensure that the JSON is not empty
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }

      // error log
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
      setLoading(false);
    }
  };

  // Fecth data from the url once upon page load
  useEffect(()=> {
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => {
    // first is the absolute top (0), second is the top of the view
    // third is absolute bottom, and fourth is bottom of the view
    // console.log(
    //   document.body.scrollTop, 
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight,
    // );

    // Track the value of the top of the view
    const currentTop =  document.body.scrollTop || document.documentElement.scrollTop;
    // The "max" that top can scroll is the absolute bottom minus the view's bottom
    const totalBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight

    setScrollPercentage((currentTop/totalBottom) * 100);
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScrollPercentage)
    return () => {
      window.removeEventListener("scroll", () => {});
    }
  }, [])

  if (loading) {
    return (
      <div>Loading Please Wait</div>
    )
  }

  if (errorMessage) {
    <div>Error! {errorMessage}</div>
  }

  return (
    <div>

      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-container">
          <div 
            className="scroll-progress" 
            style={{width: `${scrollPercentage}%`}}>
          </div>
        </div>
      </div>

      <div className="data-container">
        {
          data && data.length > 0 
          ? data.map((dataItem) => 
            <p>{dataItem.title}</p>
          )  
          : null
        }
      </div>
    </div>
  )
}