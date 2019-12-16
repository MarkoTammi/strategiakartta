// Component for back and forward buttons


import React from "react"


const Buttons = (props) => {

    return (
        <>
        <button onClick={props.handlerBackwards}>Edellinen</button>
        <button onClick={props.handlerForward}>Seuraava</button>
        </>
    )
}

export default Buttons