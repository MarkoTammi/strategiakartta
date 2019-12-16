// General guide component

import React from "react"
import genText from "./kehityskartta-gen-txt"


const GenGuide = (props) => {

    return (
        <div>
            <h5>{genText[props.lang][1100]}</h5>
            <p>{genText[props.lang][1101]}</p>
            <p>{genText[props.lang][1102]}</p>
            <p>{genText[props.lang][1103]}</p>
            <p>{genText[props.lang][1104]}</p>
            <p>{genText[props.lang][1105]}</p>
            <p>{genText[props.lang][1106]}</p>
            <p>{genText[props.lang][1107]}</p>
            <p>{genText[props.lang][1108]}</p>
        </div>
    )

}

export default GenGuide