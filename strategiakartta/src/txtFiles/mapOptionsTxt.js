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
                id: "100",
                q: "Liikevaihdon kasvattaminen",
                note : ""
            },
            {
                phase: "1",
                id: "101",
                q: "Markkinaosuuden kasvattaminen",
                note : ""
            },
            {
                phase: "1",
                id: "102",
                q: "Markkina-alueen laajentaminen kotimaassa",
                note : ""
            },
            {
                phase: "1",
                id: "103",
                q: "Markkina-alueen laajentaminen ulkomailla",
                note : ""
            },
            {
                phase: "1",
                id: "104",
                q: "Uusien asiakkaiden saaminen",
                note : ""
            },
            {
                phase: "1",
                id: "105",
                q: "Toiminnan fokuksen terävöittäminen",
                note : ""
            },
            {
                phase: "1",
                id: "106",
                q: "Uuden tuotteen tai palvelun julkistus",
                note : ""
            },
            {
                phase: "1",
                id: "107",
                q: "Yrityksen omistusjärjestelyt",
                note : ""
            },
            {
                phase: "1",
                id: "108",
                q: "Toiminnan supistaminen",
                note : ""
            },
            {
                phase: "1",
                id: "109",
                q: "Toiminnan ulkoistaminen",
                note : ""
            },
            {
                phase: "1",
                id: "110",
                q: "Oman työllisyyden turvaaminen",
                note : ""
            }
        ],
        MapCustomer: [
            {
                phase: "2",
                id: "200",
                q: "Kilpailukykyinen hinta",
                note : ""
            },
            {
                phase: "2",
                id: "201",
                q: "Toimitusajan nopeus",
                note : ""
            },
            {
                phase: "2",
                id: "202",
                q: "Toimitusvarmuus",
                note : ""
            },
            {
                phase: "2",
                id: "203",
                q: "Tasainen laatu",
                note : ""
            },
            {
                phase: "2",
                id: "204",
                q: "Asiantuntemus",
                note : ""
            },
            {
                phase: "2",
                id: "205",
                q: "Asiakkaan liiketoiminnan ymmärtäminen",
                note : ""
            },
            {
                phase: "2",
                id: "206",
                q: "Ammattimainen myyntitoiminta",
                note : ""
            },
            {
                phase: "2",
                id: "207",
                q: "Innovatiiviset ratkaisut",
                note : ""
            },
            {
                phase: "2",
                id: "208",
                q: "Asiakaslähtöinen toimitussisältö",
                note : ""
            },
            {
                phase: "2",
                id: "209",
                q: "Aktiivinen yhteydenpito",
                note : ""
            },
            {
                phase: "2",
                id: "210",
                q: "Kumppanuus",
                note : ""
            },
            {
                phase: "2",
                id: "211",
                q: "Joustava palvelu",
                note : ""
            },
            {
                phase: "2",
                id: "212",
                q: "Kokonaispalvelu",
                note : ""
            },
            {
                phase: "2",
                id: "213",
                q: "Ympäristövastuullisuus",
                note : ""
            }
        ],
        MapProcess: [
            {
                phase: "3",
                id: "300",
                q: "Asiakkauuden hallinta",
                note : ""
            },
            {
                phase: "3",
                id: "301",
                q: "Markkinointi",
                note : ""
            },
            {
                phase: "3",
                id: "302",
                q: "Yritysbrändin vahvistaminen",
                note : ""
            },
            {
                phase: "3",
                id: "303",
                q: "Myynti",
                note : ""
            },
            {
                phase: "3",
                id: "304",
                q: "Tuotanto",
                note : ""
            },
            {
                phase: "3",
                id: "305",
                q: "Alihankinta ja ostot",
                note : ""
            },
            {
                phase: "3",
                id: "306",
                q: "Logistiikka, varasto ja jakelu",
                note : ""
            },
            {
                phase: "3",
                id: "307",
                q: "Huoltotoiminta",
                note : ""
            },
            {
                phase: "3",
                id: "308",
                q: "Laatujärjestelmät",
                note : ""
            },
            {
                phase: "3",
                id: "309",
                q: "Aineettomat oikeudet (IPR)",
                note : ""
            },
            {
                phase: "3",
                id: "310",
                q: "Yhteistyöverkostot, kumppanuudet",
                note : ""
            },
            {
                phase: "3",
                id: "311",
                q: "Asiakaspalvelu",
                note : ""
            },
            {
                phase: "3",
                id: "312",
                q: "Palvelu- ja/tai tuotekehitys",
                note : ""
            },
            {
                phase: "3",
                id: "313",
                q: "Henkilöstöhallinto (työsuhde, työterveys jne)",
                note : ""
            },
            {
                phase: "3",
                id: "314",
                q: "Henkilöstön johtaminen (tavoiteet, esimies-alaiskeskustelu jne)",
                note : ""
            },
            {
                phase: "3",
                id: "315",
                q: "Tietohallinto",
                note : ""
            },
            {
                phase: "3",
                id: "316",
                q: "Liiketoimintaan liittyvän tiedon hyödyntäminen",
                note : ""
            },
            {
                phase: "3",
                id: "317",
                q: "Taloushallinto ja -raportointi",
                note : ""
            },
            {
                phase: "3",
                id: "318",
                q: "Yritysvastuullisuus",
                note : ""
            },
            {
                phase: "3",
                id: "319",
                q: "Ympäristövastuullisuus",
                note : ""
            }
        ],
        MapResources: [
            {
                phase: "4",
                id: "400",
                q: "Strategiajohtaminen",
                note : ""
            },
            {
                phase: "4",
                id: "401",
                q: "Asiakasymmärrys",
                note : ""
            },
            {
                phase: "4",
                id: "402",
                q: "Liiketoimintaosaaminen",
                note : ""
            },
            {
                phase: "4",
                id: "403",
                q: "Yrityskulttuuri ja -arvot",
                note : ""
            },
            {
                phase: "4",
                id: "404",
                q: "Työyhteisön pelisäännöt",
                note : ""
            },
            {
                phase: "4",
                id: "405",
                q: "Yrityksen ammattiosaaminen",
                note : ""
            },
            {
                phase: "4",
                id: "406",
                q: "Kansainvälinen osaaminen",
                note : ""
            },
            {
                phase: "4",
                id: "407",
                q: "Suorituksen johtaminen",
                note : ""
            },
            {
                phase: "4",
                id: "408",
                q: "Toimenkuvien tarkentaminen",
                note : ""
            },
            {
                phase: "4",
                id: "409",
                q: "Rekrytointi ja työnantajakuva",
                note : ""
            },
            {
                phase: "4",
                id: "410",
                q: "Palkitseminen",
                note : ""
            },
            {
                phase: "4",
                id: "411",
                q: "Urasuunnittelu",
                note : ""
            },
            {
                phase: "4",
                id: "412",
                q: "Resurssisuunnittelu",
                note : ""
            },
            {
                phase: "4",
                id: "413",
                q: "Henkilöstötyytyväisyys",
                note : ""
            },
            {
                phase: "4",
                id: "414",
                q: "Tieto- ja viestintätekniikan osaaminen",
                note : ""
            },
            {
                phase: "4",
                id: "415",
                q: "Tuotantovälineistö (koneet, järjestelmät, työkalut)",
                note : ""
            },
            {
                phase: "4",
                id: "416",
                q: "Tuotanto- ja toimitilat",
                note : ""
            }
        ]
    }
}


export default QuestionOptionsTxt