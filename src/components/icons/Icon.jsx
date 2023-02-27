import React from 'react'

const Icon = (props) => {
    return (
        <span className={"material-symbols-outlined " + props.className} onClick={(e)=>props.onClick?props.onClick(e):''}>
            {props.name}
        </span>
    )
}

export default Icon