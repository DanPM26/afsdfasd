import React from "react";

const ColorInput = ({colorValue}) => {
    return(
        <input type="color" onChange={(e) => colorValue(e.target.value)}></input>
    )
}

export default ColorInput