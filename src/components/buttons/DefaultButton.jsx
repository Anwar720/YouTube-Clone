import React from 'react'

const DefaultButton = (props) => {
    return (
        <button className={"default-btn " + props.className} onClick={()=>props.activateFilter(props.name)}>
            {props.name}
        </button>
    )
}

export default DefaultButton