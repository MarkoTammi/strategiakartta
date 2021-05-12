// General guide component

import React from "react"
import text from "../txtFiles/strategiakarttaGenGxt"
import Container from "react-bootstrap/Container"


const GenGuide = (props) => {

    return (
        <div>
        <Container>
            <h5>{text[props.version][1100]}</h5>
            <p>{text[props.version][1101]}</p>
            <p>{text[props.version][1102]}</p>
            <p>{text[props.version][1103]}</p>
            <p>{text[props.version][1104]}</p>
            <p>{text[props.version][1105]}</p>
            <p>{text[props.version][1106]}</p>
            <p>{text[props.version][1107]}</p>
            <p>{text[props.version][1108]}</p>
        </Container>
        </div>
    )

}

export default GenGuide