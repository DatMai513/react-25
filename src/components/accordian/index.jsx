import { useState } from "react";
// data.js hard codes an array of JSON
import data from "./data.js";
import "./styles.css";

export default function Accordian() {
    // State of which tab of the accordian is open
    const [selected, setSelected] = useState(null);
    // state if enable Multi-selection is enabled or not
    const [enableMulti, setEnableMulti] = useState(false);
    // State of which tabs are selected for multi
    const [multi, setMulti] = useState([]);

    // when clicked, the current title becomes selected
    function handleSingleSelection(id) {
        // if the clicked title is already selected, do nothing, else set the new id
        setSelected(id === selected ? null : id);
    }

    // if multi is enabled, add it to the state array
    function handleMultipleSelection(id) {
        let multiCopy = [...multi]; 

        // search the array for the id
        const findIndex = multiCopy.indexOf(id);
        
        // if no id is not found, add the id
        // else remove it
        if (findIndex === -1) {
            multiCopy.push(id);
        }
        else {
            multiCopy.splice(findIndex, 1);
        }

        setMulti(multiCopy);
    }

    return <div className="wrapper">
        <button onClick={()=> {
            setEnableMulti(!enableMulti);
            setMulti([]);
            setSelected(null);
        }}>Enable multi-selection</button>
        <div className="accordian">
            {
                // check if there is data 
                // note that there are 2 divs when mapped and an embedded JS func
                // the second one is the rendering the actual h3 string and is clickable
                data && data.length > 0 ? 
                    data.map((dataItem) => 
                    (<div className="item">
                        <div 
                            className="title" 
                            onClick={ enableMulti 
                                ? ()=>handleMultipleSelection(dataItem.id)
                                : ()=>handleSingleSelection(dataItem.id)
                            }>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>

                        {
                            enableMulti
                                ? multi.indexOf(dataItem.id) !== -1 && (
                                    <div className="acc-content ">{dataItem.answer}</div>
                                )
                                : selected === dataItem.id && (
                                    <div className="acc-content ">{dataItem.answer}</div>
                                )
                        }

                    </div>))
                : 
                    <div>No Data Found!</div>
            }
        </div>
    </div>;
}