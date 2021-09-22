import React from 'react';
import { Page, Document, View, Text, Image, StyleSheet} from '@react-pdf/renderer';

// Text file
import pdfDocumentTxt from '../txtFiles/pdfDocumentTxt';



const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        margin: 20,
    },
    footer: {
        color: '#47aeb6',
        fontSize: '13px',
        margin: 30
    },
    map: {
        margin: 10,
        padding: 10,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '10px',
        width: '790px',
    },
    titleRow: {
    },
    title: {
        width: '150px'
    },
    rowTitle: { display: "flex", flexDirection: "row", fontSize: 12 },
    columnTitle: { display: "flex", flexDirection: "column", flexGrow: 1, width: 300, textAlign: 'center' },
    dottedLine: { fontSize: 8, textAlign: 'center' },

    row: { display: "flex", flexDirection: "row", fontSize: 8, marginLeft: 10, marginTop: 10 },
    column: { display: "flex", flexDirection: "column", flexGrow: 1 },
    th: {
        fontSize: 10,
        padding: 8,
        color: "#000000",
        fontWeight: 700,
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        borderWidth: 0.5,
        borderLeftStyle: "solid",
        borderLeftWidth: 0.25,
        borderRightStyle: "solid",
        borderRightWidth: 0.25,
        borderColor: "#ffffff",
        justifyContent: "flex-start",
        width: 170,
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3
      },
      td: {
        fontSize: 10,
        padding: 4,
        backgroundColor: "#ffffff",
        color: "#000000",
        fontWeight: 400,
        display: "flex",
        flexDirection: "row",
        borderWidth: 0.5,
        borderLeftStyle: "solid",
        borderLeftWidth: 0.25,
        borderRightStyle: "solid",
        borderRightWidth: 0.25,
        borderTopStyle: "solid",
        borderTopWidth: 0.25,
        borderColor: "#000000",
        justifyContent: "flex-start",
        width: 170,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
      },
      guide: {
        backgroundColor: '#ffffff',
        margin: 40,
        fontSize : 13,
        height: 650
      },
      guideTxt: {
          marginBottom: 10
      },
      suuntiaAdd : {
          height: 650,
          fontSize: 12
      },
      suuntiaLogo: {
        width : 150,
        margin : 40
      }
})

const getRandomInt = () => {
    return Math.floor(Math.random() * 100000);
}


const toDisplayCardOrNotPDF = (oneAnswer, styleTh, backgroundColor, styleTd) => {
    if (oneAnswer.q !== undefined) {
        return (
            <div key={getRandomInt()}>
                {displayCardPDF(oneAnswer, styleTh, backgroundColor, styleTd)}
            </div>
        )
    } else {
        // Empty card
        return (
            <div key={getRandomInt()}>
                {displayEmptyCardPDF()}
            </div>
        )
    }
}

const displayCardPDF = (oneAnswer, styleTh, backgroundColor, styleTd) => {
    return (
        <View>
            <View style={[styleTh, { backgroundColor: backgroundColor }]}><Text>{oneAnswer.q}</Text></View>
            <View style={styleTd}><Text>{oneAnswer.note}</Text></View>
        </View>
    )
}

const displayEmptyCardPDF = () => {
    return (
        <View style={{width: 170}}></View>
    )
}


// Build document component
const PDFDocument = (props) => {

    const today = () => {
        const d = new Date();
        const n = d.toLocaleDateString();
        return n
    }

    let answersTemp = props.answers
    let userTemp = props.user
    
    // Arrange all prio 4 answers
    let amountPrio4 = []
    let allPrio4Phase1 = answersTemp.filter(prio4 => parseInt(prio4.prio) === 4 && parseInt(prio4.phase) === 1)
    amountPrio4[0] = allPrio4Phase1.length
    let allPrio4Phase2 = answersTemp.filter(prio4 => parseInt(prio4.prio) === 4 && parseInt(prio4.phase) === 2)
    amountPrio4[1] = allPrio4Phase2.length
    let allPrio4Phase3 = answersTemp.filter(prio4 => parseInt(prio4.prio) === 4 && parseInt(prio4.phase) === 3)
    amountPrio4[2] = allPrio4Phase3.length
    let allPrio4Phase4 = answersTemp.filter(prio4 => parseInt(prio4.prio) === 4 && parseInt(prio4.phase) === 4)
    amountPrio4[3] = allPrio4Phase4.length
    amountPrio4.sort((a, b) => { return b - a })
    let biggestAmountPrio4 = amountPrio4[0]

    let allPrio4 = []
    for (let i = 0; i < biggestAmountPrio4; i++) {
        allPrio4.push([])
        if (allPrio4Phase4[i] !== undefined) {
            allPrio4[i].push(allPrio4Phase4[i])
            } else {
            allPrio4[i].push({})
        }
        if (allPrio4Phase3[i] !== undefined) {
            allPrio4[i].push(allPrio4Phase3[i])
            } else {
            allPrio4[i].push({})
        }
        if (allPrio4Phase2[i] !== undefined) {
            allPrio4[i].push(allPrio4Phase2[i])
            } else {
            allPrio4[i].push({})
        }
        if (allPrio4Phase1[i] !== undefined) {
            allPrio4[i].push(allPrio4Phase1[i])
            } else {
            allPrio4[i].push({})
        }
    }
    // END - Arrange all prio 4 answers

    // Arrange all prio 3 answers
    let amountPrio3 = []
    let allPrio3Phase1 = answersTemp.filter(prio4 => parseInt(prio4.prio) === 3 && parseInt(prio4.phase) === 1)
    amountPrio3[0] = allPrio3Phase1.length
    let allPrio3Phase2 = answersTemp.filter(prio4 => parseInt(prio4.prio) === 3 && parseInt(prio4.phase) === 2)
    amountPrio3[1] = allPrio3Phase2.length
    let allPrio3Phase3 = answersTemp.filter(prio4 => parseInt(prio4.prio) === 3 && parseInt(prio4.phase) === 3)
    amountPrio3[2] = allPrio3Phase3.length
    let allPrio3Phase4 = answersTemp.filter(prio4 => parseInt(prio4.prio) === 3 && parseInt(prio4.phase) === 4)
    amountPrio3[3] = allPrio3Phase4.length
    amountPrio3.sort((a, b) => { return b - a })
    let biggestAmountPrio3 = amountPrio3[0]

    let allPrio3 = []
    for (let i = 0; i < biggestAmountPrio3; i++) {
        allPrio3.push([])
        if (allPrio3Phase4[i] !== undefined) {
            allPrio3[i].push(allPrio3Phase4[i])
        } else {
            allPrio3[i].push({})
        }
        if (allPrio3Phase3[i] !== undefined) {
            allPrio3[i].push(allPrio3Phase3[i])
        } else {
            allPrio3[i].push({})
        }
        if (allPrio3Phase2[i] !== undefined) {
            allPrio3[i].push(allPrio3Phase2[i])
        } else {
            allPrio3[i].push({})
        }
        if (allPrio3Phase1[i] !== undefined) {
            allPrio3[i].push(allPrio3Phase1[i])
        } else {
            allPrio3[i].push({})
        }
    }
    // END - Arrange all prio 3 answers

    return (
        <Document>

            {/* START map page */}
            <Page size="A4" orientation='landscape' style={styles.page}>
                <View style={styles.map} >
                    <View style={styles.rowTitle}>
                        <View style={styles.columnTitle}><Text >{pdfDocumentTxt[props.version][1001]}</Text></View>
                        <View style={styles.columnTitle}><Text >{pdfDocumentTxt[props.version][1002]}</Text></View>
                        <View style={styles.columnTitle}><Text>{pdfDocumentTxt[props.version][1003]}</Text></View>
                        <View style={styles.columnTitle}><Text>{pdfDocumentTxt[props.version][1004]}</Text></View>
                    </View>
                    <Text style={{ textAlign: 'center' }}>--------------------------------------------------------------------------------------------------------------------------</Text>

                    {/* START Prio4*/}
                    <View>
                        {allPrio4.map((oneRowAnswers) =>
                            <div key={getRandomInt()}>
                                <View style={styles.row}>
                                    <View style={styles.column}>
                                        {toDisplayCardOrNotPDF(oneRowAnswers[0], styles.th, '#4081f7', styles.td)}
                                    </View>
                                    <View style={styles.column}>
                                        {toDisplayCardOrNotPDF(oneRowAnswers[1], styles.th, '#2fe19d', styles.td)}
                                    </View>
                                    <View style={styles.column}>
                                        {toDisplayCardOrNotPDF(oneRowAnswers[2], styles.th, '#e1b92f', styles.td)}
                                    </View>
                                    <View style={styles.column}>
                                        {toDisplayCardOrNotPDF(oneRowAnswers[3], styles.th, '#f77433', styles.td)}
                                    </View>
                                </View>
                            </div>
                        )}
                    </View>
                    {/* END Prio4*/}

                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 10, marginTop: 15 }}>{pdfDocumentTxt[props.version][1005]}</Text>
                        <Text style={styles.dottedLine}>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>
                    </View>

                    {/* START Prio3*/}
                    <View>
                        {allPrio3.map((oneRowAnswers) =>
                            <div key={getRandomInt()}>
                                <View style={styles.row}>
                                    <View style={styles.column}>
                                        {toDisplayCardOrNotPDF(oneRowAnswers[0], styles.th, '#77abf7', styles.td)}
                                    </View>
                                    <View style={styles.column}>
                                        {toDisplayCardOrNotPDF(oneRowAnswers[1], styles.th, '#6be7b8', styles.td)}
                                    </View>
                                    <View style={styles.column}>
                                        {toDisplayCardOrNotPDF(oneRowAnswers[2], styles.th, '#e7cb6b', styles.td)}
                                    </View>
                                    <View style={styles.column}>
                                        {toDisplayCardOrNotPDF(oneRowAnswers[3], styles.th, '#f79b6d', styles.td)}
                                    </View>
                                </View>
                            </div>
                        )}
                    </View>
                    {/* END Prio3*/}

                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 10, marginTop: 15 }}>{pdfDocumentTxt[props.version][1006]}</Text>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 12, marginLeft: 20 }}>{userTemp.organization}  /  {userTemp.username}  /  {today()}</Text>
                </View>

                <View >
                    <Text style={styles.footer}>{pdfDocumentTxt[props.version][1007]}</Text>
                </View>
            </Page>

            {/* START guide page */}
            <Page>
                <View style={styles.guide} >
                    <Text style={{fontSize: 20, textAlign: 'center', marginBottom:30, marginTop:50}}>{pdfDocumentTxt[props.version][1041]}</Text>
                    <Text style={styles.guideTxt}>{pdfDocumentTxt[props.version][1031]}</Text>
                    <Text>{pdfDocumentTxt[props.version][1032]}</Text>
                    <Text>{pdfDocumentTxt[props.version][1033]}</Text>
                    <Text>{pdfDocumentTxt[props.version][1034]}</Text>
                    <Text>{pdfDocumentTxt[props.version][1035]}</Text>
                    <Text style={styles.guideTxt}>{pdfDocumentTxt[props.version][1036]}</Text>
                    <Text style={styles.guideTxt}>{pdfDocumentTxt[props.version][1037]}</Text>
                    <Text style={styles.guideTxt}>{pdfDocumentTxt[props.version][1038]}</Text>
                    <Text style={styles.guideTxt}>{pdfDocumentTxt[props.version][1040]}</Text>
                </View>
                <View >
                    <Text style={[styles.footer,{marginTop : 40} ]}>{pdfDocumentTxt[props.version][1007]}</Text>
                </View>
            </Page>

            {/* START Suuntia add page */}
            <Page style={styles.page}>
                <View style={styles.suuntiaAdd}>
                    <Image style={styles.suuntiaLogo} src={window.location.origin + '/suuntia_logo_500px.jpg'}></Image>
                    <View style={{margin:40}}>
                        <Text style={{fontSize: 20, textAlign: 'center', marginBottom:10, marginTop:30}}>JOHTAMISEN JA KEHITTÄMISEN</Text>
                        <Text style={{fontSize: 20, textAlign: 'center', marginBottom:30, marginTop:10}}>DIGITAALINEN TYÖYMPÄRISTÖ</Text>
                        <Text style={styles.guideTxt}>{pdfDocumentTxt[props.version][1050]}</Text>
                        <Text style={styles.guideTxt}>{pdfDocumentTxt[props.version][1051]}</Text>
                        <Text style={styles.guideTxt}>{pdfDocumentTxt[props.version][1052]}</Text>
                        <Text style={styles.guideTxt}>{pdfDocumentTxt[props.version][1053]}</Text>
                    </View>
                </View>
                <View >
                    <Text style={styles.footer}>{pdfDocumentTxt[props.version][1007]}</Text>
                </View>
            </Page>
        </Document>
    )
}

export default PDFDocument
