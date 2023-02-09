import React from 'react'
import "./MainButton.css"

function MainButton(props) {
    return (
        <button type="submit">
            <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label">{props.name}</span>
        </button>
    )
}

export default MainButton