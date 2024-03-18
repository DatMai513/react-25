import { useState } from "react";
import {FaStar} from "react-icons/fa";
import "./styles.css";

// by default the number of stars will be 5, but can be passed a different parameter
export default function StarSlider({noOfStars = 5}) {

    // A state to track is how many star are highlighted
    const [rating, setRating] = useState(0);
    // Another state is which star is hovered over
    const [hover, setHover] = useState(0);

    // Change the amount of stars highlighted
    function handleClick(index) {
        setRating(index);
    }

    // Mouse hover entering star border
    function handleMouseEnter(index) {
        setHover(index); 
    }

    // Mouse hover leaving star border
    function handleMouseLeave(index) {

        // when the mouse leaves, it should default to current highlight
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;

                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onClick={()=> handleClick(index)}
                        onMouseMove={()=> handleMouseEnter(index)}
                        onMouseLeave={()=> handleMouseLeave(index) }
                    />
                );
        })}
        </div>
    )
}