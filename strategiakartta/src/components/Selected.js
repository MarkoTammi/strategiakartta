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
    //console.log("Selected component")
    let answersTemp = props.answers
    let amountPrio4 = []

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

    let allPrio4 = []
    for (let i = 0; i < biggestAmountPrio4; i++) {
        allPrio4.push([])
        if (allPrio4Phase4[i] != undefined) {
            //console.log("TRUE 2")
            allPrio4[i].push(allPrio4Phase4[i])
        } else {
            //console.log("FALSE 2")
            allPrio4[i].push({})
        }
        if (allPrio4Phase3[i] != undefined) {
            //console.log("TRUE 2")
            allPrio4[i].push(allPrio4Phase3[i])
        } else {
            //console.log("FALSE 2")
            allPrio4[i].push({})
        }
        if (allPrio4Phase2[i] != undefined) {
            //console.log("TRUE 2")
            allPrio4[i].push(allPrio4Phase2[i])
        } else {
            //console.log("FALSE 2")
            allPrio4[i].push({})
        }
        if (allPrio4Phase1[i] != undefined) {
            //console.log("TRUE 1")
            allPrio4[i].push(allPrio4Phase1[i])
        } else {
            //console.log("FALSE 1")
            allPrio4[i].push({})
        }
    }
    console.log("allPrio4", allPrio4)
    //console.log("biggest 4 : ", biggestAmountPrio4)

    let amountPrio3 = []
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


    const displayMapRow = (oneRowAnswers) => {
        console.log("displayMapRow : ", oneRowAnswers)
        return (
     <>
                <Col>
                    {toDisplayCardOrNot(oneRowAnswers[0])}
                </Col>
                <Col>
                    {toDisplayCardOrNot(oneRowAnswers[1])}
                </Col>
                <Col>
                    {toDisplayCardOrNot(oneRowAnswers[2])}
                </Col>
                <Col>
                    {toDisplayCardOrNot(oneRowAnswers[3])}
                </Col>
       </> 
        )
    }

    const toDisplayCardOrNot = (oneAnswer) => {
        console.log("toDisplayCardOrNot : ", oneAnswer)
        if (oneAnswer.q != undefined) {
            console.log("CARD")
            return (
                <div key={getRandomInt()}>
                    {displayCard(oneAnswer)}
                </div>
            )
        } else {
            console.log("EMPTY")
            return (
                <div key={getRandomInt()}>
                    {displayEmpty()}
                </div>
            )
        }
    }

    const displayCard = (oneAnswer) => {
        //console.log("displayCard")
        //console.log("oneAnswer.q :", oneAnswer.q)
        //console.log("oneAnswer.note :", oneAnswer.note)
        //console.log("oneAnswer.phase", oneAnswer.phase)
        const style = {
            backgroundColor: `${color[oneAnswer.phase]}`
        }

        return (
            // <div style={{width : "200px"}}>
            <div>

                <Card style={{ margin: "5px" }}>
                    <Card.Header style={style}>{oneAnswer.q}</Card.Header>
                    <Card.Text>{oneAnswer.note}</Card.Text>
                </Card>
            </div>

        )
    }

    const displayEmpty = () => {
        console.log("displayEmpty")
        return (
            <div>
            </div>
        )
    }

    const getRandomInt = () => {
        return Math.floor(Math.random() * 100000);
    }

    return (
        <div style={{margin: '20px, 0, 20px', border: '1px solid grey', borderRadius: '5px', padding: '20px' }}>
            <Row style={{borderBottom: '1px dashed', marginBottom: '20px'}}>
                <Col className="text-center"><h5>{mapPageTxt[props.version]["MapGen"][1023]}</h5></Col>
                <Col className="text-center"><h5>{mapPageTxt[props.version]["MapGen"][1022]}</h5></Col>
                <Col className="text-center"><h5>{mapPageTxt[props.version]["MapGen"][1021]}</h5></Col>
                <Col className="text-center"><h5>{mapPageTxt[props.version]["MapGen"][1020]}</h5></Col>
            </Row>

            {allPrio4.map((oneRowAnswers) =>
                <Row key={getRandomInt()}>
                    {displayMapRow(oneRowAnswers)}
                </Row>
            )}
            <p style={{textAlign:'center', borderBottom: '1px dashed'}}>Paljon kehitettävää</p>

            <p style={{textAlign:'center', borderBottom: '1px dashed'}}>Melko paljon kehitettävää</p>

        </div>
    )
}

export default selected
