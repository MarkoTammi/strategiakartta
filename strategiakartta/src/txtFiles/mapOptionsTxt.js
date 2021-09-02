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
                phase: 1,
                id: 100,
                q: "Liikevaihdon kasvattaminen",
                note : "",
                pageName : "MapTarget",
            },
            {
                phase: 1,
                id: 101,
                q: "Markkinaosuuden kasvattaminen",
                note : "",
                pageName : "MapTarget",
            },
            {
                phase: 1,
                id: 102,
                q: "Markkina-alueen laajentaminen kotimaassa",
                note : "",
                pageName : "MapTarget",
            },
            {
                phase: 1,
                id: 103,
                q: "Markkina-alueen laajentaminen ulkomailla",
                note : "",
                pageName : "MapTarget",
            },
            {
                phase: 1,
                id: 104,
                q: "Uusien asiakkaiden saaminen",
                note : "",
                pageName : "MapTarget",
            },
            {
                phase: 1,
                id: 105,
                q: "Toiminnan fokuksen terävöittäminen",
                note : "",
                pageName : "MapTarget",
            },
            {
                phase: 1,
                id: 106,
                q: "Uuden tuotteen tai palvelun julkistus",
                note : "",
                pageName : "MapTarget",
            },
            {
                phase: 1,
                id: 107,
                q: "Yrityksen omistusjärjestelyt",
                note : "",
                pageName : "MapTarget",
            },
            {
                phase: 1,
                id: 108,
                q: "Toiminnan supistaminen",
                note : "",
                pageName : "MapTarget",
            },
            {
                phase: 1,
                id: 109,
                q: "Toiminnan ulkoistaminen",
                note : "",
                pageName : "MapTarget",
            },
            {
                phase: 1,
                id: 110,
                q: "Oman työllisyyden turvaaminen",
                note : "",
                pageName : "MapTarget",
            }
        ],
        MapCustomer: [
            {
                phase: 2,
                id: 200,
                q: "Kilpailukykyinen hinta",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 201,
                q: "Toimitusajan nopeus",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 202,
                q: "Toimitusvarmuus",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 203,
                q: "Tasainen laatu",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 204,
                q: "Asiantuntemus",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 205,
                q: "Asiakkaan liiketoiminnan ymmärtäminen",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 206,
                q: "Ammattimainen myyntitoiminta",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 207,
                q: "Innovatiiviset ratkaisut",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 208,
                q: "Asiakaslähtöinen toimitussisältö",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 209,
                q: "Aktiivinen yhteydenpito",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 210,
                q: "Kumppanuus",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 211,
                q: "Joustava palvelu",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 212,
                q: "Kokonaispalvelu",
                note : "",
                pageName : "MapCustomer",
            },
            {
                phase: 2,
                id: 213,
                q: "Ympäristövastuullisuus",
                note : "",
                pageName : "MapCustomer",
            }
        ],
        MapProcess: [
            {
                phase: 3,
                id: 300,
                q: "Asiakkauuden hallinta",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 301,
                q: "Markkinointi",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 302,
                q: "Yritysbrändin vahvistaminen",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 303,
                q: "Myynti",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 304,
                q: "Tuotanto",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 305,
                q: "Alihankinta ja ostot",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 306,
                q: "Logistiikka, varasto ja jakelu",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 307,
                q: "Huoltotoiminta",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 308,
                q: "Laatujärjestelmät",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 309,
                q: "Aineettomat oikeudet (IPR)",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 310,
                q: "Yhteistyöverkostot, kumppanuudet",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 311,
                q: "Asiakaspalvelu",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 312,
                q: "Palvelu- ja/tai tuotekehitys",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 313,
                q: "Henkilöstöhallinto (työsuhde, työterveys jne)",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 314,
                q: "Henkilöstön johtaminen (tavoiteet, esimies-alaiskeskustelu jne)",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 315,
                q: "Tietohallinto",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 316,
                q: "Liiketoimintaan liittyvän tiedon hyödyntäminen",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 317,
                q: "Taloushallinto ja -raportointi",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 318,
                q: "Yritysvastuullisuus",
                note : "",
                pageName : "MapProcess",
            },
            {
                phase: 3,
                id: 319,
                q: "Ympäristövastuullisuus",
                note : "",
                pageName : "MapProcess",
            }
        ],
        MapResources: [
            {
                phase: 4,
                id: 400,
                q: "Strategiajohtaminen",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 401,
                q: "Asiakasymmärrys",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 402,
                q: "Liiketoimintaosaaminen",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 403,
                q: "Yrityskulttuuri ja -arvot",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 404,
                q: "Työyhteisön pelisäännöt",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 405,
                q: "Yrityksen ammattiosaaminen",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 406,
                q: "Kansainvälinen osaaminen",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 407,
                q: "Suorituksen johtaminen",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 408,
                q: "Toimenkuvien tarkentaminen",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 409,
                q: "Rekrytointi ja työnantajakuva",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 410,
                q: "Palkitseminen",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 411,
                q: "Urasuunnittelu",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 412,
                q: "Resurssisuunnittelu",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 413,
                q: "Henkilöstötyytyväisyys",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 414,
                q: "Tieto- ja viestintätekniikan osaaminen",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 415,
                q: "Tuotantovälineistö (koneet, järjestelmät, työkalut)",
                note : "",
                pageName : "MapResources",
            },
            {
                phase: 4,
                id: 416,
                q: "Tuotanto- ja toimitilat",
                note : "",
                pageName : "MapResources",
            }
        ]
    }
}


export default QuestionOptionsTxt