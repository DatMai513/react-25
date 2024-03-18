import { useEffect, useState } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState('#000000');

    // randomly pick a number in the range of [0 - max]
    function randomColorUtil(max) {
        return Math.floor(Math.random() * max);
    }

    function randomHexColor() {
        // A hex color consists of a # followed by 6 random hex digits
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtil(hex.length)];
        }

        setColor(hexColor);
    }

    function randomRGBColor() {
        // a RGB color consists of 3 digits that range [0-256]
        const r = randomColorUtil(256);
        const g = randomColorUtil(256);
        const b = randomColorUtil(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    useEffect(()=> {
        if (typeOfColor === "rgb") {
            randomRGBColor();
        }
        else {
            randomHexColor();
        }
    }, [typeOfColor]);


    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color
        }}>


            <button onClick={()=>{setTypeOfColor("hex")}}>HEX Color</button>
            <button onClick={()=>{setTypeOfColor("rgb")}}>RGB Color</button>
            <button onClick={
                typeOfColor === "hex" 
                ? randomHexColor
                : randomRGBColor
            }>Generate Random Color</button>

            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "60px",
                marginTop: "50px",
                flexDirection  :'column',
                gap :'20px'
            }}>

                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}