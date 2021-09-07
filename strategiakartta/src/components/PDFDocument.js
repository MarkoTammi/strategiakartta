import React from 'react';
import { Page, Document, View, Text, Image, StyleSheet, Canvas } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        margin: 20
    },
    footer: {
        color: '#47aeb6',
        fontSize: '12px',
        margin: 20
    },
    map: {
        margin: 10,
        padding: 10,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '10px',
        width: '790px'
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
        padding: 8,
        color: "#000000",
        fontWeight: 700,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
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
      }
})

const getRandomInt = () => {
    return Math.floor(Math.random() * 100000);
}

// Build document here
const PDFDocument = (props) => {
    console.log('PDFDocument')

    return (
        <Document>
            <Page size="A4" orientation='landscape' style={styles.page}>
                <View style={styles.map} >
                    <View style={styles.rowTitle}>
                        <View style={styles.columnTitle}><Text >Henkilöstön osaamisen ja muiden resurssien kehitystarpeet</Text></View>
                        <View style={styles.columnTitle}><Text >Toiminnan ja prosessien kehitystarpeet</Text></View>
                        <View style={styles.columnTitle}><Text>Asiakkaiden odotukset</Text></View>
                        <View style={styles.columnTitle}><Text>Toiminnan tavoitteet</Text></View>
                    </View>
                    <Text style={{ textAlign: 'center' }}>--------------------------------------------------------------------------------------------------------------------------</Text>
                    <View>
                         <View style={styles.row}>
                            <View style={styles.column}>
                                <View style={[styles.th, {backgroundColor: "#4081f7"}]}><Text>Header</Text></View>
                                <View style={styles.td}><Text>Content</Text></View>
                            </View>
                            <View style={styles.column}>
                                <View style={[styles.th, {backgroundColor: "#2fe19d"}]}><Text>Header</Text></View>
                                <View style={styles.td}><Text>Content</Text></View>
                            </View>
                            <View style={styles.column}>
                                <View style={[styles.th, {backgroundColor: "#e1b92f"}]}><Text>Header</Text></View>
                                <View style={styles.td}><Text>Content</Text></View>
                            </View>
                            <View style={styles.column}>
                                <View style={[styles.th, {backgroundColor: "#f77433"}]}><Text>Header</Text></View>
                                <View style={styles.td}><Text>Content</Text></View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 12, marginTop: 15 }}>Paljon kehitettävää</Text>
                        <Text style={styles.dottedLine}>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>
                    </View>
                    <Text style={{ fontSize: 12, marginTop: 25 }}>Tähän Melko paljon kehitettävää kohteet</Text>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 12 }}>Melko paljon kehitettävää</Text>
                    </View>
                </View>

                <View >
                    <Text style={styles.footer}>Suuntia - strategisen johtamisen ja kehittämisen digitaalinen työympäristö</Text>
                </View>
            </Page>

            <Page style={styles.page}>
                <View >
                    <Text>
                        Tähän ohjeet
                    </Text>
                </View>
                <View >
                    <Text style={styles.footer}>Suuntia - strategisen johtamisen ja kehittämisen digitaalinen työympäristö</Text>
                </View>
            </Page>
            <Page style={styles.page}>
                <View >
                    <Text>
                        Tähän Suuntia mainos
                    </Text>
                </View>
                <View >
                    <Text style={styles.footer}>Suuntia - strategisen johtamisen ja kehittämisen digitaalinen työympäristö</Text>
                </View>
            </Page>
        </Document>
    )
}

export default PDFDocument
