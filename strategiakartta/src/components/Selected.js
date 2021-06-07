// Component to show what has been selected

import React, { useLayoutEffect } from "react"

// components


// Bootstrap component
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Container from "react-bootstrap/Container"

// text files
import mapPageTxt from "../txtFiles/mapPageTxt"

// color
import color from "../services/color"


const selected = (props) => {
    console.log("Selected component")
    let answersTemp = props.answers
    let amountPrio4 = []
    let amountPrio3 = []
    //console.log("answersTemp :", answersTemp)
    let allPrio4Phase1 = answersTemp.filter(prio4 => prio4.prio == 4 && prio4.phase == 1)
    //console.log("allPrio4Phase1 : ", allPrio4Phase1)
    amountPrio4[0] = allPrio4Phase1.length
    let allPrio4Phase2 = answersTemp.filter(prio4 => prio4.prio == 4 && prio4.phase == 2)
    amountPrio4[1] = allPrio4Phase2.length
    let allPrio4Phase3 = answersTemp.filter(prio4 => prio4.prio == 4 && prio4.phase == 3)
    amountPrio4[2] = allPrio4Phase3.length
    let allPrio4Phase4 = answersTemp.filter(prio4 => prio4.prio == 4 && prio4.phase == 4)
    amountPrio4[3] = allPrio4Phase4.length
    amountPrio4.sort((a, b) => { return b - a })
    let biggestAmountPrio4 = amountPrio4[0]
    //console.log("biggest 4 : ", biggestAmountPrio4)

    let allPrio3Phase1 = answersTemp.filter(prio4 => prio4.prio == 3 && prio4.phase == 1)
    amountPrio3[0] = allPrio3Phase1.length
    let allPrio3Phase2 = answersTemp.filter(prio4 => prio4.prio == 3 && prio4.phase == 2)
    amountPrio3[1] = allPrio3Phase2.length
    let allPrio3Phase3 = answersTemp.filter(prio4 => prio4.prio == 3 && prio4.phase == 3)
    amountPrio3[2] = allPrio3Phase3.length
    let allPrio3Phase4 = answersTemp.filter(prio4 => prio4.prio == 3 && prio4.phase == 4)
    amountPrio3[3] = allPrio3Phase4.length
    //console.log("amountPrio3", amountPrio3)
    amountPrio3.sort((a, b) => { return b - a })
    let biggestAmountPrio3 = amountPrio3[0]
    //console.log("biggest 3 : ", biggestAmountPrio3)


    const displayMapPrio4 = () => {
        console.log("dispalyMapPrio4")
        let i
        for (i = 0; parseInt(i) < parseInt(biggestAmountPrio4); i++) {
            return (
                <div>
                    <Row>
                        {/*                     {toDisplayCardOrNot(i, allPrio4Phase4, amountPrio4)}
                    {toDisplayCardOrNot(i, allPrio4Phase3, amountPrio4)} */}
                        {toDisplayCardOrNot(i, allPrio4Phase2, amountPrio4)}
                        {toDisplayCardOrNot(i, allPrio4Phase1, amountPrio4)}
                    </Row>
                </div>

            )
        }
    }

    const toDisplayCardOrNot = (i, phaseAnswers, amountPrio) => {
        console.log("toDisplayCardOrNot : ", "i : ", i, "phaseAnswers : ", phaseAnswers, "amountPrio : ", amountPrio)
        if (parseInt(amountPrio[i]) === 0) {
            console.log("Empty 1")
            displayEmpty()
        } else {
            if (i < parseInt(amountPrio[i])) {
                displayCard(i, phaseAnswers)
            } else {
                displayEmpty()
                console.log("Empty 2")

            }
        }
    }

    const displayCard = (i, phaseAnswers) => {
        console.log("displayCard")
        console.log("i : ", i)
        console.log("phaseAnswers[i].q :", phaseAnswers[i].q)
        console.log("phaseAnswers[i].note :", phaseAnswers[i].note)

        return (
            <div>
                <p>TESTI</p>
                <Col>
                    <Card style={{ width: '15rem', margin: "5px" }}>
                        <Card.Header style={{ width: '15rem', backgroundColor: color.MapResources }}>{phaseAnswers[i].q}</Card.Header>
                        <Card.Text>{phaseAnswers[i].note}</Card.Text>
                    </Card>
                </Col>
            </div>

        )
    }

    const displayEmpty = () => {
        console.log("displayEmpty")
        return (
            <div>
                <Col></Col>
            </div>
        )
    }


    return (
        <div style={{ margin: '20px' }}>
            <Row>
                <Col style={{ width: '15rem' }}>Resurssit</Col>
                <Col style={{ width: '15rem' }}>Prosessit</Col>
                <Col style={{ width: '15rem' }}>Asiakkaiden odotukset</Col>
                <Col style={{ width: '15rem' }}>Liiketoiminnan tavoitteet</Col>
            </Row>

            {displayMapPrio4()}
            <p>Paljon kehitettävää</p>
            {/*             { answersTemp.map(answer =>
            <Row key={1}>
                <Col>
                    <Card style={{ width: '15rem', margin: "5px"  }}>
                        <Card.Header style={{ width: '15rem', backgroundColor: color.MapResources }}>{answer.q}</Card.Header>
                        <Card.Text>{answer.note}</Card.Text>
                    </Card>
                </Col>
            </Row>

            )} */}


        </div>
    )
}

export default selected