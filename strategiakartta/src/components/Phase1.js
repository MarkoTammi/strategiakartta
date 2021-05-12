// Kehityskartta Phase 1 component

import React from "react"

// components
import HeroElement from "../components/HeroElement"

// Bootstrap component
import Container from "react-bootstrap/Container"

// text files
import phase1Txt from "../txtFiles/phase1Txt"
import optionsPhase1Txt from "../txtFiles/optionsPhase1Txt"

// Component to include
import OneOption from "./OneOption"


const Phase1 = (props) => {

    return (
        <div>

            <HeroElement
                headerTxt={phase1Txt[props.version][1001]}
                subHeaderTxt={phase1Txt[props.version][1002]} />

            <Container>

                <p>{phase1Txt[props.version][1003]}</p>
                <p>{phase1Txt[props.version][1004]}</p>
                <p>{phase1Txt[props.version][1005]}</p>

                

            </Container>

        </div>
    )
}

export default Phase1