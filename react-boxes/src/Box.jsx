import React from "react";

function Box({ id, handleRemove, height=5, width=5, backgroundColor="red" }) {

    const remove = () => handleRemove(id);

    return (
        <div>
            <div
                style={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor
                }}
            />
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box