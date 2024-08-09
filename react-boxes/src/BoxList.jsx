import React, { useState } from "react";
import Box from './Box.jsx';
import NewBoxForm from './NewBoxForm.jsx';

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    // Add new box on form submission
    const add = boxObj => {
        setBoxes(boxes => [...boxes, boxObj])
    }
    
    // Remove function
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const boxComponents = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            height={box.height}
            width={box.width}
            backgroundColor={box.backgroundColor}
            handleRemove={remove}
        />
    ))

    return (
        <div>
            <NewBoxForm createBox={add}/>
            {boxComponents}
        </div>
    )
}

export default BoxList