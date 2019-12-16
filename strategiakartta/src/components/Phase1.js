// Kehityskartta Phase 1 component

import React from "react"

import genTxt from "./kehityskartta-gen-txt"
import phase1TxT from "./phase1-txt"

// Component to include
import OneOption from "./OneOption"


const Phase1 = (props) => {
  
    return (
        <div>
            <h5>{genTxt[props.lang][1001]}</h5>
            <p>{genTxt[props.lang][1002]}</p>
            <p>{genTxt[props.lang][1008]}</p>
            <p>{genTxt[props.lang][1009]}</p>
            <p>{genTxt[props.lang][1010]}</p>
            
            <OneOption />

        </div>
    )
}

export default Phase1