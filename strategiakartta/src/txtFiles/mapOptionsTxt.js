// Questions for phases

// 10 - private company
// 1 - Target
// 2 - Customer
// 3 - Process
// 4 - People and resources

const QuestionOptionsTxt = {
    10: {
        MapTarget: [
            {
                phase: "1",
                id: "00",
                q: "Liikevaihdon kasvattaminen",
                note : ""
            },
            {
                phase: "1",
                id: "01",
                q: "Markkinaosuuden kasvattaminen",
                note : ""
            },
            {
                phase: "1",
                id: "02",
                q: "Markkina-alueen laajentaminen kotimaassa",
                note : ""
            },
            {
                phase: "1",
                id: "03",
                q: "Markkina-alueen laajentaminen ulkomailla",
                note : ""
            },
            {
                phase: "1",
                id: "04",
                q: "Uusien asiakkaiden saaminen",
                note : ""
            },
            {
                phase: "1",
                id: "05",
                q: "Toiminnan fokuksen terävöittäminen",
                note : ""
            },
            {
                phase: "1",
                id: "06",
                q: "Uuden tuotteen tai palvelun julkistus",
                note : ""
            },
            {
                phase: "1",
                id: "07",
                q: "Yrityksen omistusjärjestelyt",
                note : ""
            },
            {
                phase: "1",
                id: "08",
                q: "Toiminnan supistaminen",
                note : ""
            },
            {
                phase: "1",
                id: "09",
                q: "Toiminnan ulkoistaminen",
                note : ""
            },
            {
                phase: "1",
                id: "10",
                q: "Oman työllisyyden turmaaminen",
                note : ""
            },
            {
                phase: "1",
                id: "11",
                q: "Muu, mikä?",
                note : ""
            }
        ],
        MapCustomer: [
            {
                phase: "2",
                id: "00",
                q: "Kilpailukykyinen hinta",
                note : ""
            },
            {
                phase: "2",
                id: "01",
                q: "Toimitusajan nopeus",
                note : ""
            },
            {
                phase: "2",
                id: "02",
                q: "Toimitusvarmuus",
                note : ""
            },
            {
                phase: "2",
                id: "03",
                q: "Tasainen laatu",
                note : ""
            },
            {
                phase: "2",
                id: "04",
                q: "Asiantuntemus",
                note : ""
            },
            {
                phase: "2",
                id: "05",
                q: "Asiakkaan liiketoiminnan ymmärtäminen",
                note : ""
            },
            {
                phase: "2",
                id: "06",
                q: "Ammattimainen myyntitoiminta",
                note : ""
            },
            {
                phase: "2",
                id: "07",
                q: "Innovatiiviset ratkaisut",
                note : ""
            },
            {
                phase: "2",
                id: "08",
                q: "Asiakaslähtöinen toimitussisältö",
                note : ""
            },
            {
                phase: "2",
                id: "09",
                q: "Aktiivinen yhteydenpito",
                note : ""
            },
            {
                phase: "2",
                id: "10",
                q: "Kumppanuus",
                note : ""
            },
            {
                phase: "2",
                id: "11",
                q: "Joustava palvelu",
                note : ""
            },
            {
                phase: "2",
                id: "12",
                q: "Kokonaispalvelu",
                note : ""
            },
            {
                phase: "2",
                id: "13",
                q: "Ympäristövastuullisuus",
                note : ""
            },
            {
                phase: "2",
                id: "14",
                q: "Muu mikä?",
                note : ""
            }
        ],
        MapProcess: [
            {
                phase: "3",
                id: "00",
                q: "Asiakkauuden hallinta",
                note : ""
            },
            {
                phase: "3",
                id: "01",
                q: "Markkinointi",
                note : ""
            },
            {
                phase: "3",
                id: "02",
                q: "Yritysbrändin vahvistaminen",
                note : ""
            },
            {
                phase: "3",
                id: "03",
                q: "Myynti",
                note : ""
            },
            {
                phase: "3",
                id: "04",
                q: "Tuotano",
                note : ""
            },
            {
                phase: "3",
                id: "05",
                q: "Alihankinta ja ostot",
                note : ""
            },
            {
                phase: "3",
                id: "06",
                q: "Logistiikka, varasto ja jakelu",
                note : ""
            },
            {
                phase: "3",
                id: "07",
                q: "Huoltotoiminta",
                note : ""
            },
            {
                phase: "3",
                id: "08",
                q: "Laatujärjestelmät",
                note : ""
            },
            {
                phase: "3",
                id: "09",
                q: "Aineettomat oikeudet (IPR)",
                note : ""
            },
            {
                phase: "3",
                id: "10",
                q: "Yhteistyöverkostot, kumppanuudet",
                note : ""
            },
            {
                phase: "3",
                id: "11",
                q: "Asiakaspalvelu",
                note : ""
            },
            {
                phase: "3",
                id: "12",
                q: "Palvelu- ja/tai tuotekehitys",
                note : ""
            },
            {
                phase: "3",
                id: "13",
                q: "Henkilöstöhallinto (työsuhde, työterveys jne)",
                note : ""
            },
            {
                phase: "3",
                id: "14",
                q: "Henkilöstön johtaminen (tavoiteet, esimies-alaiskeskustelu jne)",
                note : ""
            },
            {
                phase: "3",
                id: "15",
                q: "Tietohallinto",
                note : ""
            },
            {
                phase: "3",
                id: "16",
                q: "Liiketoimintaan liittyvän tiedon hyödyntäminen",
                note : ""
            },
            {
                phase: "3",
                id: "17",
                q: "Taloushallinto ja -raportointi",
                note : ""
            },
            {
                phase: "3",
                id: "18",
                q: "Yritysvastuullisuus",
                note : ""
            },
            {
                phase: "3",
                id: "19",
                q: "Ympäristövastuullisuus",
                note : ""
            },
            {
                phase: "3",
                id: "20",
                q: "Muu mikä?",
                note : ""
            },
        ],
        MapResources: [
            {
                phase: "4",
                id: "00",
                q: "Strategiajohtaminen",
                note : ""
            },
            {
                phase: "4",
                id: "01",
                q: "Asiakasymmärrys",
                note : ""
            },
            {
                phase: "4",
                id: "02",
                q: "Liiketoimintaosaaminen",
                note : ""
            },
            {
                phase: "4",
                id: "03",
                q: "Yrityskulttuuri ja -arvot",
                note : ""
            },
            {
                phase: "4",
                id: "04",
                q: "Työyhteisön pelisäännöt",
                note : ""
            },
            {
                phase: "4",
                id: "05",
                q: "Yrityksen ammattiosaaminen",
                note : ""
            },
            {
                phase: "4",
                id: "06",
                q: "Kansainvälinen osaaminen",
                note : ""
            },
            {
                phase: "4",
                id: "07",
                q: "Suorituksen johtaminen",
                note : ""
            },
            {
                phase: "4",
                id: "08",
                q: "Toimenkuvien tarkentaminen",
                note : ""
            },
            {
                phase: "4",
                id: "09",
                q: "Rekrytointi ja työnantajakuva",
                note : ""
            },
            {
                phase: "4",
                id: "10",
                q: "Palkitseminen",
                note : ""
            },
            {
                phase: "4",
                id: "11",
                q: "Urasuunnittelu",
                note : ""
            },
            {
                phase: "4",
                id: "12",
                q: "Resurssisuunnittelu",
                note : ""
            },
            {
                phase: "4",
                id: "13",
                q: "Henkilöstötyytyväisyys",
                note : ""
            },
            {
                phase: "4",
                id: "14",
                q: "Tieto- ja viestintätekniikan osaaminen",
                note : ""
            },
            {
                phase: "4",
                id: "15",
                q: "Tuotantovälineistö (koneet, järjestelmät, työkalut)",
                note : ""
            },
            {
                phase: "4",
                id: "16",
                q: "Tuotanto- ja toimitilat",
                note : ""
            },
            {
                phase: "4",
                id: "17",
                q: "Muu mikä?",
                note : ""
            },
        ]
    }
}


export default QuestionOptionsTxt