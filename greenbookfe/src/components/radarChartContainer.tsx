import { Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import RadarChart from "./charts/radarChart";

// const data = [{
//     "_id": "631240a48146e9e7c05400e4",
//     "companyName": "ABANCA",
//     "sentimentScore": 1,
//     "topCompanyWords": {
//         "energy": 5,
//         "environmental": 10,
//         "management": 15,
//         "party": 20,
//         "buildings": 25,
//         "sustainability": 30
//     }
// }, {
//     "_id": "631240a48146e9e7c05400e4",
//     "companyName": "BABANCA",
//     "sentimentScore": 1,
//     "topCompanyWords": {
//         "energy": 48,
//         "environmental": 24,
//         "management": 32,
//         "party": 16,
//         "buildings": 8,
//         "sustainability": 40
//     }
// }, {
//     "_id": "631240a48146e9e7c05400e4",
//     "companyName": "CABANCA",
//     "sentimentScore": 1,
//     "topCompanyWords": {
//         "energy": 6,
//         "environmental": 18,
//         "management": 30,
//         "party": 36,
//         "buildings": 0,
//         "sustainability": 12
//     }
// }, {
//     "_id": "631240a48146e9e7c05400e4",
//     "companyName": "DABANCA",
//     "sentimentScore": 1,
//     "topCompanyWords": {
//         "energy": 51,
//         "environmental": 32.5378277861242,
//         "management": 15.73553116878063,
//         "party": 35.37153650105044,
//         "buildings": 1.1823215567939547,
//         "sustainability": 29.487406431175053
//     }
// }, {
//     "_id": "631240a48146e9e7c05400e4",
//     "companyName": "BABANCA",
//     "sentimentScore": 1,
//     "topCompanyWords": {
//         "energy": 48,
//         "environmental": 24,
//         "management": 32,
//         "party": 16,
//         "buildings": 8,
//         "sustainability": 40
//     }
// }, {
//     "_id": "631240a48146e9e7c05400e4",
//     "companyName": "CABANCA",
//     "sentimentScore": 1,
//     "topCompanyWords": {
//         "energy": 6,
//         "environmental": 18,
//         "management": 30,
//         "party": 36,
//         "buildings": 0,
//         "sustainability": 12
//     }
// }, {
//     "_id": "631240a48146e9e7c05400e4",
//     "companyName": "DABANCA",
//     "sentimentScore": 1,
//     "topCompanyWords": {
//         "energy": 51,
//         "environmental": 32.5378277861242,
//         "management": 15.73553116878063,
//         "party": 35.37153650105044,
//         "buildings": 1.1823215567939547,
//         "sustainability": 29.487406431175053
//     }
// }]

const data = [
  {
    "Financial Institution": "Financial Institution",
    "ABANCACorporacinBancariaS.txt": {
      energy: 51,
      environmental: 32.5378277861242,
      management: 15.73553116878063,
      party: 35.37153650105044,
      buildings: 1.1823215567939547,
      sustainability: 29.487406431175053,
    },
    "ABN_AMRO_2015_External_review_report.txt": {
      energy: 89,
      environmental: 34.57144202275696,
      management: 7.867765584390315,
      party: 7.737523609604784,
      buildings: 141.87858681527456,
      sustainability: 39.655477614338864,
    },
    "ABN_AMRO_2016_External Review report.txt": {
      energy: 116,
      environmental: 39.655477614338864,
      management: 13.768589772683052,
      party: 8.84288412526261,
      buildings: 105.22661855466197,
      sustainability: 37.621863377706106,
    },
    "AfricaFinanceCorporation.txt": {
      energy: 21,
      environmental: 19.319335248011242,
      management: 10.818177678536683,
      party: 7.737523609604784,
      buildings: 0,
      sustainability: 17.28572101137848,
    },
    "AssicurazioniGenerali.txt": {
      energy: 62,
      environmental: 46.77312744255353,
      management: 36.388415827805204,
      party: 28.739373407103486,
      buildings: 22.46410957908514,
      sustainability: 17.28572101137848,
    },
    "BancoAtlntida.txt": {
      energy: 35,
      environmental: 30.504213549491435,
      management: 16.71900186682942,
      party: 21.0018497974987,
      buildings: 2.3646431135879094,
      sustainability: 11.184878301480193,
    },
    "Bancolombia(2018).txt": {
      energy: 1,
      environmental: 0,
      management: 17.70247256487821,
      party: 0,
      buildings: 0,
      sustainability: 1.0168071183163812,
    },
    "BankinterS.txt": {
      energy: 66,
      environmental: 33.554634904440576,
      management: 20.652884659024576,
      party: 36.47689701670827,
      buildings: 31.922682033436775,
      sustainability: 18.30252812969486,
    },
    "BankofChina(2018).txt": {
      energy: 3,
      environmental: 4.067228473265525,
      management: 7.867765584390315,
      party: 0,
      buildings: 1.1823215567939547,
      sustainability: 4.067228473265525,
    },
    "BankofthePhilippineIslands.txt": {
      energy: 58,
      environmental: 30.504213549491435,
      management: 31.47106233756126,
      party: 33.16081546973479,
      buildings: 22.46410957908514,
      sustainability: 17.28572101137848,
    },
    "BarclaysPLC.txt": {
      energy: 10,
      environmental: 7.1176498282146685,
      management: 10.818177678536683,
      party: 6.632163093946958,
      buildings: 10.640894011145592,
      sustainability: 0,
    },
    "BKSBankAG(2021).txt": {
      energy: 0,
      environmental: 0,
      management: 8.851236282439105,
      party: 8.84288412526261,
      buildings: 0,
      sustainability: 2.0336142366327623,
    },
    "BNPParibas(2019).txt": {
      energy: 22,
      environmental: 25.42017795790953,
      management: 12.785119074634261,
      party: 4.421442062631305,
      buildings: 4.729286227175819,
      sustainability: 23.386563721276765,
    },
    "Bpifrance.txt": {
      energy: 39,
      environmental: 33.554634904440576,
      management: 12.785119074634261,
      party: 2.2107210313156527,
      buildings: 2.3646431135879094,
      sustainability: 3.0504213549491435,
    },
    "BrageFinansAS.txt": {
      energy: 13,
      environmental: 29.487406431175053,
      management: 11.801648376585472,
      party: 2.2107210313156527,
      buildings: 0,
      sustainability: 9.15126406484743,
    },
    "CanadianImperialBankofCommerce.txt": {
      energy: 59,
      environmental: 77.27734099204497,
      management: 50.15700560048826,
      party: 44.21442062631306,
      buildings: 26.011074249467004,
      sustainability: 12.201685419796574,
    },
    "ChinaEverbrightBank.txt": {
      energy: 60,
      environmental: 37.621863377706106,
      management: 38.355357223902786,
      party: 30.950094438419136,
      buildings: 24.82875269267305,
      sustainability: 13.218492538112955,
    },
    "CNPAssurance.txt": {
      energy: 39,
      environmental: 53.890777270768204,
      management: 39.33882792195158,
      party: 9.948244640920437,
      buildings: 33.10500359023073,
      sustainability: 12.201685419796574,
    },
    "ConnecticutGreenBank(2020).txt": {
      energy: 59,
      environmental: 8.13445694653105,
      management: 2.950412094146368,
      party: 18.791128766183046,
      buildings: 14.187858681527455,
      sustainability: 0,
    },
    "ConnecticutGreenBank(Series2019-1).txt": {
      energy: 9,
      environmental: 3.0504213549491435,
      management: 1.9669413960975788,
      party: 2.2107210313156527,
      buildings: 0,
      sustainability: 1.0168071183163812,
    },
    "CrditAgricolenextbank(Suisse)SA.txt": {
      energy: 21,
      environmental: 35.58824914107334,
      management: 30.48759163951247,
      party: 11.053605156578264,
      buildings: 11.823215567939547,
      sustainability: 20.33614236632762,
    },
    "DeutscheBankAG.txt": {
      energy: 47,
      environmental: 32.5378277861242,
      management: 16.71900186682942,
      party: 6.632163093946958,
      buildings: 11.823215567939547,
      sustainability: 36.60505625938972,
    },
    "DeutscheHypothekenbankAG(2020).txt": {
      energy: 25,
      environmental: 18.30252812969486,
      management: 10.818177678536683,
      party: 4.421442062631305,
      buildings: 72.12161496443123,
      sustainability: 56.94119862571735,
    },
    "DeutscheKreditbank(DKB)(2020).txt": {
      energy: 17,
      environmental: 57.95800574403373,
      management: 8.851236282439105,
      party: 5.526802578289132,
      buildings: 0,
      sustainability: 49.823548797502674,
    },
    "GroupamaGroup.txt": {
      energy: 42,
      environmental: 37.621863377706106,
      management: 41.30576931804915,
      party: 38.68761804802392,
      buildings: 33.10500359023073,
      sustainability: 15.252106774745718,
    },
    "hummgrouplimited(exFlexigroup).txt": {
      energy: 5,
      environmental: 1.0168071183163812,
      management: 6.884294886341526,
      party: 0,
      buildings: 0,
      sustainability: 2.0336142366327623,
    },
    "IndustrialandCommercialBankofChina.txt": {
      energy: 26,
      environmental: 49.823548797502674,
      management: 16.71900186682942,
      party: 4.421442062631305,
      buildings: 0,
      sustainability: 2.0336142366327623,
    },
    "IntesaSanpaolo.txt": {
      energy: 49,
      environmental: 31.521020667807814,
      management: 34.42147443170763,
      party: 7.737523609604784,
      buildings: 5.911607783969774,
      sustainability: 15.252106774745718,
    },
    "KenedixOfficeInvestmentCorporation(2019).txt": {
      energy: 40,
      environmental: 67.10926980888115,
      management: 61.95865397707373,
      party: 5.526802578289132,
      buildings: 28.37571736305491,
      sustainability: 17.28572101137848,
    },
    "LandshypotekBankAB.txt": {
      energy: 17,
      environmental: 27.45379219454229,
      management: 23.603296753170945,
      party: 2.2107210313156527,
      buildings: 8.276250897557683,
      sustainability: 25.42017795790953,
    },
    "LeasePlan.txt": {
      energy: 8,
      environmental: 27.45379219454229,
      management: 10.818177678536683,
      party: 24.31793134447218,
      buildings: 1.1823215567939547,
      sustainability: 22.369756602960386,
    },
    "Manulife.txt": {
      energy: 57,
      environmental: 30.504213549491435,
      management: 37.371886525853995,
      party: 7.737523609604784,
      buildings: 15.37018023832141,
      sustainability: 21.352949484644004,
    },
    "MitsubishiUFJLeaseandFinance.txt": {
      energy: 65,
      environmental: 48.806741679186295,
      management: 30.48759163951247,
      party: 21.0018497974987,
      buildings: 1.1823215567939547,
      sustainability: 9.15126406484743,
    },
    "MitsubishiUFJTrustandBankingCorporation.txt": {
      energy: 35,
      environmental: 71.17649828214668,
      management: 29.504120941463682,
      party: 5.526802578289132,
      buildings: 16.552501795115365,
      sustainability: 4.067228473265525,
    },
    "MizuhoFinancialGroupInc.txt": {
      energy: 82,
      environmental: 76.26053387372859,
      management: 26.553708847317314,
      party: 55.268025782891314,
      buildings: 49.6575053853461,
      sustainability: 16.2689138930621,
    },
    "NORDLBLuxembourgS.txt": {
      energy: 63,
      environmental: 34.57144202275696,
      management: 15.73553116878063,
      party: 28.739373407103486,
      buildings: 1.1823215567939547,
      sustainability: 30.504213549491435,
    },
    "NRW.txt": {
      energy: 44,
      environmental: 83.37818370194326,
      management: 15.73553116878063,
      party: 7.737523609604784,
      buildings: 20.09946646549723,
      sustainability: 35.58824914107334,
    },
    "OntarioTeachersPensionPlanBoard.txt": {
      energy: 51,
      environmental: 27.45379219454229,
      management: 19.66941396097579,
      party: 2.2107210313156527,
      buildings: 11.823215567939547,
      sustainability: 5.084035591581905,
    },
    "OPFinancialGroup.txt": {
      energy: 51,
      environmental: 22.369756602960386,
      management: 32.45453303561005,
      party: 30.950094438419136,
      buildings: 31.922682033436775,
      sustainability: 14.235299656429337,
    },
    "ORIXCorporation.txt": {
      energy: 83,
      environmental: 57.95800574403373,
      management: 30.48759163951247,
      party: 38.68761804802392,
      buildings: 50.83982694214005,
      sustainability: 45.75632032423715,
    },
    "OrixJREITInc.txt": {
      energy: 26,
      environmental: 34.57144202275696,
      management: 44.256181412195524,
      party: 5.526802578289132,
      buildings: 23.646431135879094,
      sustainability: 12.201685419796574,
    },
    "RaiffeisenBankCzechRepublic.txt": {
      energy: 52,
      environmental: 28.470599312858674,
      management: 21.636355357073366,
      party: 9.948244640920437,
      buildings: 33.10500359023073,
      sustainability: 53.890777270768204,
    },
    "RaiffeisenBankRomania.txt": {
      energy: 95,
      environmental: 49.823548797502674,
      management: 32.45453303561005,
      party: 47.530502173286536,
      buildings: 29.558038919848865,
      sustainability: 29.487406431175053,
    },
    "RaiffeisenBankSupra-national.txt": {
      energy: 73,
      environmental: 36.60505625938972,
      management: 30.48759163951247,
      party: 29.84473392276131,
      buildings: 31.922682033436775,
      sustainability: 22.369756602960386,
    },
    "Scotiabank.txt": {
      energy: 58,
      environmental: 65.0756555722484,
      management: 35.40494512975642,
      party: 43.10906011065523,
      buildings: 26.011074249467004,
      sustainability: 19.319335248011242,
    },
    "SparbankenSkne.txt": {
      energy: 67,
      environmental: 23.386563721276765,
      management: 11.801648376585472,
      party: 0,
      buildings: 27.19339580626096,
      sustainability: 38.638670496022485,
    },
    "SparbankenVstraMlardalen.txt": {
      energy: 19,
      environmental: 12.201685419796574,
      management: 4.917353490243947,
      party: 6.632163093946958,
      buildings: 7.093929340763728,
      sustainability: 7.1176498282146685,
    },
    "SparebankenSognogFjordane.txt": {
      energy: 9,
      environmental: 30.504213549491435,
      management: 11.801648376585472,
      party: 0,
      buildings: 1.1823215567939547,
      sustainability: 4.067228473265525,
    },
    "SumitomoMitsuiFinancialGroupInc(2018).txt": {
      energy: 87,
      environmental: 78.29414811036135,
      management: 24.586767451219735,
      party: 30.950094438419136,
      buildings: 26.011074249467004,
      sustainability: 11.184878301480193,
    },
    "SumitomoMitsuiTrustBank(2018).txt": {
      energy: 16,
      environmental: 39.655477614338864,
      management: 37.371886525853995,
      party: 5.526802578289132,
      buildings: 1.1823215567939547,
      sustainability: 8.13445694653105,
    },
    "SumitomoMitsuiTrustBank(2021).txt": {
      energy: 100,
      environmental: 55.92439150740096,
      management: 35.40494512975642,
      party: 53.057304751575664,
      buildings: 40.19893293099446,
      sustainability: 29.487406431175053,
    },
    "SunndalSparebanken.txt": {
      energy: 18,
      environmental: 39.655477614338864,
      management: 8.851236282439105,
      party: 1.1053605156578263,
      buildings: 0,
      sustainability: 2.0336142366327623,
    },
    "SwedbankAB.txt": {
      energy: 26,
      environmental: 13.218492538112955,
      management: 23.603296753170945,
      party: 0,
      buildings: 7.093929340763728,
      sustainability: 7.1176498282146685,
    },
    "SwissLife.txt": {
      energy: 35,
      environmental: 32.5378277861242,
      management: 25.570238149268523,
      party: 23.212570828814354,
      buildings: 35.46964670381864,
      sustainability: 11.184878301480193,
    },
    "TatraBanka.txt": {
      energy: 90,
      environmental: 47.789934560869916,
      management: 39.33882792195158,
      party: 47.530502173286536,
      buildings: 40.19893293099446,
      sustainability: 19.319335248011242,
    },
    "ToyotaFinanceCorporation(2020).txt": {
      energy: 13,
      environmental: 209.46226637317451,
      management: 31.47106233756126,
      party: 6.632163093946958,
      buildings: 1.1823215567939547,
      sustainability: 9.15126406484743,
    },
    "UBIBanca.txt": {
      energy: 8,
      environmental: 50.84035591581906,
      management: 7.867765584390315,
      party: 6.632163093946958,
      buildings: 0,
      sustainability: 23.386563721276765,
    },
    "UBS.txt": {
      energy: 21,
      environmental: 35.58824914107334,
      management: 15.73553116878063,
      party: 36.47689701670827,
      buildings: 23.646431135879094,
      sustainability: 18.30252812969486,
    },
    "VarbergsSparbank.txt": {
      energy: 53,
      environmental: 30.504213549491435,
      management: 8.851236282439105,
      party: 1.1053605156578263,
      buildings: 41.38125448778841,
      sustainability: 17.28572101137848,
    },
    "VolvofinansBankAB(2019).txt": {
      energy: 3,
      environmental: 24.403370839593148,
      management: 7.867765584390315,
      party: 0,
      buildings: 0,
      sustainability: 8.13445694653105,
    },
  },
];

const maxReportsToDisplay = 4;

type Props = {
  type?: string;
};

const RadarChartContainer = ({ type }: Props) => {
  const [dataToDisplay, setDataToDisplay] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [yAxis, setYAxis] = useState({ minimum: 0, maximum: 0 });

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    console.log({ value });
    setPage(value);
  };

  console.log(data.length);

  const getMinimumMaximum = async (targetData: any) => {
    let minimum = 0;
    let maximum = 0;
    targetData.forEach((entry: any) => {
      let arr: number[] = Object.values(entry.topCompanyWords);
      // let minValue = Math.min(...arr);
      let maxValue = Math.max(...arr);
      // if (minimum > minValue) {
      //     minimum = minValue;
      // }
      if (maximum < maxValue) {
        maximum = maxValue;
      }
    });
    console.log({ targetData });
    console.log({ maximum });

    setYAxis({ minimum, maximum });
  };

  // const sortArray = async (order: string) => {
  //     if (order === 'asc') {
  //     }
  //     console.log({ data })
  //     getMinimumMaximum(data.slice(0, 3)).then(() => {
  //         console.log('ere    ')
  //         return data.slice(0, 3)
  //     })
  // }

  const range = [0, 1];

  const normaliseObject = (data: any) => {
    let minMax = { min: 0, max: 0 };
    Object.keys(data).forEach((key) => {
      const values: number[] = Object.values(data[key]);
      const min = Math.min.apply(Math, values);
      const max = Math.max.apply(Math, values);
      if (min < minMax.min) {
        minMax.min = min;
      }

      if (max > minMax.max) {
        minMax.max = max;
      }
    });
    const variation = (range[1] - range[0]) / (minMax.max - minMax.min);
  };

  const sortArray = async (order: string) => {
    return new Promise((resolve, reject) => {
      let processedData = [...data]; //Clone variable
      if (order === "asc") {
        processedData.sort((a: any, b: any) => {
          let topWordsA: number[] = Object.values(a.topCompanyWords);
          let topWordsB: number[] = Object.values(b.topCompanyWords);
          let averageA =
            topWordsA.reduce((x: any, y: any) => x + y) / topWordsA.length;
          let averageB =
            topWordsB.reduce((x: any, y: any) => x + y) / topWordsB.length;
          return averageA - averageB;
        });
      } else {
        processedData.sort((a: any, b: any) => {
          let topWordsA: number[] = Object.values(a.topCompanyWords);
          let topWordsB: number[] = Object.values(b.topCompanyWords);
          let averageA =
            topWordsA.reduce((x: any, y: any) => x + y) / topWordsA.length;
          let averageB =
            topWordsB.reduce((x: any, y: any) => x + y) / topWordsB.length;
          return averageB - averageA;
        });
      }
      getMinimumMaximum(processedData.slice(0, 4)).then(() => {
        return resolve(processedData.slice(0, 4));
      });
    });
  };

  useEffect(() => {
    setDataToDisplay(
      data.slice(maxReportsToDisplay * (page - 1), maxReportsToDisplay * page)
    );
  }, [page]);

  useEffect(() => {
    if (!type) {
      getMinimumMaximum(data).then(() => {
        setDataToDisplay(
          data.slice(
            maxReportsToDisplay * (page - 1),
            maxReportsToDisplay * page
          )
        );
      });
    } else {
      if (type === "best") {
        sortArray("des").then((sortedArray: any) => {
          setDataToDisplay(sortedArray);
        });
      } else if (type === "worst") {
        sortArray("asc").then((sortedArray: any) => {
          setDataToDisplay(sortedArray);
        });
      }
    }
  }, []);

  return (
    <Grid item xs={12} md={4} style={{ padding: 10 }}>
      {dataToDisplay?.length > 0 ? (
        <>
          <RadarChart
            data={dataToDisplay}
            minimum={yAxis.minimum}
            maximum={yAxis.maximum}
          />

          {!type && data.length > maxReportsToDisplay ? (
            <Grid
              container
              style={{ width: "100%", paddingTop: 15 }}
              alignContent={"center"}
              alignItems={"center"}
              justifyContent={"center"}
              justifyItems={"center"}
            >
              <Pagination
                count={Math.ceil(data.length / maxReportsToDisplay)}
                page={page}
                onChange={handlePaginationChange}
              />
            </Grid>
          ) : null}
        </>
      ) : null}
    </Grid>
  );
};

export default RadarChartContainer;
