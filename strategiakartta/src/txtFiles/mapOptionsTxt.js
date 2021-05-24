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
                id: "00",
                q: "Liikevaihdon kasvattaminen",
            },
            {
                id: "01",
                q: "Markkinaosuuden kasvattaminen",
            },
            {
                id: "02",
                q: "Markkina-alueen laajentaminen kotimaassa",
            },
            {
                id: "03",
                q: "Markkina-alueen laajentaminen ulkomailla",
            },
            {
                id: "04",
                q: "Uusien asiakkaiden saaminen",
            },
            {
                id: "05",
                q: "Toiminnan fokuksen terävöittäminen",
            },
            {
                id: "06",
                q: "Uuden tuotteen tai palvelun julkistus",
            },
            {
                id: "07",
                q: "Yrityksen omistusjärjestelyt",
            },
            {
                id: "08",
                q: "Toiminnan supistaminen",
            },
            {
                id: "09",
                q: "Toiminnan ulkoistaminen",
            },
            {
                id: "10",
                q: "Oman työllisyyden turmaaminen",
            },
            {
                id: "11",
                q: "Muu, mikä?",
            }
        ],
        MapCustomer: [
            {
                id: "00",
                q: "Kilpailukykyinen hinta",
            },
            {
                id: "01",
                q: "Toimitusajan nopeus",
            },
            {
                id: "02",
                q: "Toimitusvarmuus",
            },
            {
                id: "03",
                q: "Tasainen laatu",
            },
            {
                id: "04",
                q: "Asiantuntemus",
            },
            {
                id: "05",
                q: "Asiakkaan liiketoiminnan ymmärtäminen",
            },
            {
                id: "06",
                q: "Ammattimainen myyntitoiminta",
            },
            {
                id: "07",
                q: "Innovatiiviset ratkaisut",
            },
            {
                id: "08",
                q: "Asiakaslähtöinen toimitussisältö",
            },
            {
                id: "09",
                q: "Aktiivinen yhteydenpito",
            },
            {
                id: "10",
                q: "Kumppanuus",
            },
            {
                id: "11",
                q: "Joustava palvelu",
            },
            {
                id: "12",
                q: "Kokonaispalvelu",
            },
            {
                id: "13",
                q: "Ympäristövastuullisuus",
            },
            {
                id: "14",
                q: "Muu mikä?",
            }
        ],
        MapProcess: [
            {
                id: "00",
                q: "Asiakkauuden hallinta",
            },
            {
                id: "01",
                q: "Markkinointi",
            },
            {
                id: "02",
                q: "Yritysbrändin vahvistaminen",
            },
            {
                id: "03",
                q: "Myynti",
            },
            {
                id: "04",
                q: "Tuotano",
            },
            {
                id: "05",
                q: "Alihankinta ja ostot",
            },
            {
                id: "06",
                q: "Logistiikka, varasto ja jakelu",
            },
            {
                id: "07",
                q: "Huoltotoiminta",
            },
            {
                id: "08",
                q: "Laatujärjestelmät",
            },
            {
                id: "09",
                q: "Aineettomat oikeudet (IPR)",
            },
            {
                id: "10",
                q: "Yhteistyöverkostot, kumppanuudet",
            },
            {
                id: "11",
                q: "Asiakaspalvelu",
            },
            {
                id: "12",
                q: "Palvelu- ja/tai tuotekehitys",
            },
            {
                id: "13",
                q: "Henkilöstöhallinto (työsuhde, työterveys jne)",
            },
            {
                id: "14",
                q: "Henkilöstön johtaminen (tavoiteet, esimies-alaiskeskustelu jne)",
            },
            {
                id: "15",
                q: "Tietohallinto",
            },
            {
                id: "16",
                q: "Liiketoimintaan liittyvän tiedon hyödyntäminen",
            },
            {
                id: "17",
                q: "Taloushallinto ja -raportointi",
            },
            {
                id: "18",
                q: "Yritysvastuullisuus",
            },
            {
                id: "19",
                q: "Ympäristövastuullisuus",
            },
            {
                id: "20",
                q: "Muu mikä?",
            },
        ],
        MapResources: [
            {
                id: "00",
                q: "Strategiajohtaminen",
            },
            {
                id: "01",
                q: "Asiakasymmärrys",
            },
            {
                id: "02",
                q: "Liiketoimintaosaaminen",
            },
            {
                id: "03",
                q: "Yrityskulttuuri ja -arvot",
            },
            {
                id: "04",
                q: "Työyhteisön pelisäännöt",
            },
            {
                id: "05",
                q: "Yrityksen ammattiosaaminen",
            },
            {
                id: "06",
                q: "Kansainvälinen osaaminen",
            },
            {
                id: "07",
                q: "Suorituksen johtaminen",
            },
            {
                id: "08",
                q: "Toimenkuvien tarkentaminen",
            },
            {
                id: "09",
                q: "Rekrytointi ja työnantajakuva",
            },
            {
                id: "10",
                q: "Palkitseminen",
            },
            {
                id: "11",
                q: "Urasuunnittelu",
            },
            {
                id: "12",
                q: "Resurssisuunnittelu",
            },
            {
                id: "13",
                q: "Henkilöstötyytyväisyys",
            },
            {
                id: "14",
                q: "Tieto- ja viestintätekniikan osaaminen",
            },
            {
                id: "15",
                q: "Tuotantovälineistö (koneet, järjestelmät, työkalut)",
            },
            {
                id: "16",
                q: "Tuotanto- ja toimitilat",
            },
            {
                id: "17",
                q: "Muu mikä?",
            },
        ]
    }
}


export default QuestionOptionsTxt