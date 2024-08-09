import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm({ createBox }) {

    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const gatherInput = (e) => {
        e.preventDefault();
        createBox({...formData, id: uuid() })
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="width">Width:</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="width"
                        id="width"
                        value={formData.width}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="height"
                        id="height"
                        value={formData.height}
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="backgroundColor"
                        id="backgroundColor"
                        value={formData.backgroundColor}
                    />
                </div>
                <button id="newBoxButton">Add</button>
            </form>
        </div>
    )
}

export default NewBoxForm;