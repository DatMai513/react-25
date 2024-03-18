import "./styles.css";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, page, limit }) {
  // State to track of the current image
  const [images, setImages] = useState([]);
  // State of the slider
  const [currentSlide, setCurrentSlide] = useState(0);
  // State of error message
  const [error, setError] = useState(null);
  // State of loading
  const [loading, setLoading] = useState(false);

  // Retrieve the array of JSON data from the url
  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      // fetch data from the link, hardcoding the link
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  // Call provided API for dummy data
  // useEffect will only run once, essentially fetching on every page load
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    return <div>Loading Data! Please Wait</div>;
  }

  if (error !== null) {
    return <div>Error occured! {error} </div>;
  }

  // Left arrow functionality
  function handlePrevious() {
    // Check if slider is all the way left
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  // Right arrow functionality
  function handleNext() {
    // Check if slider is all the way right
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {
        // Map the images
        images && images.length !== null
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                // We only wany to render 1 image at time
                // So when mapping (for loop basically)
                // Check if the current image is the right one to render, hide the rest
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-image"
                }
              />
            ))
          : null
      }

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                // The slider symbols share the same logic as the image itself
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
