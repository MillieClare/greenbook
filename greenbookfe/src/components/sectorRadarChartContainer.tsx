// import { Grid, Pagination } from "@mui/material";
// import { useEffect, useState } from "react";
// import RadarChart from "./charts/radarChart";
// import SectorRadarChart from "./charts/sectorRadarChart";

// const maxReportsToDisplay = 4;

// type Props = {
//   type?: string;
//   order?: string;
// };

const SectorRadarChartContainer = () => {
  //   const [data, setData] = useState<any>([]);
  //   const [dataToDisplay, setDataToDisplay] = useState<any>([]);
  //   const [page, setPage] = useState(1);
  //   const [yAxis, setYAxis] = useState({ minimum: 0, maximum: 0 });
  //   const handlePaginationChange = (
  //     event: React.ChangeEvent<unknown>,
  //     value: number
  //   ) => {
  //     console.log({ value });
  //     setPage(value);
  //   };
  //   console.log(Object.keys(data).length);
  //   const getMinimumMaximum = async (targetData: any) => {
  //     console.log({ targetData });
  //     let minimum = 0;
  //     let maximum = 0;
  //     targetData.forEach((entry: any) => {
  //       let arr: number[] = Object.values(entry.topWords);
  //       // let minValue = Math.min(...arr);
  //       let maxValue = Math.max(...arr);
  //       // if (minimum > minValue) {
  //       //     minimum = minValue;
  //       // }
  //       if (maximum < maxValue) {
  //         maximum = maxValue;
  //       }
  //     });
  //     console.log({ targetData });
  //     console.log({ maximum });
  //     setYAxis({ minimum, maximum });
  //   };
  //   const sortArray = async (order: string) => {
  //     if (order === "asc") {
  //     }
  //     console.log({ data });
  //     getMinimumMaximum(data.slice(0, 3)).then(() => {
  //       console.log("ere    ");
  //       return data.slice(0, 3);
  //     });
  //   };
  //   const normaliseObject = async (targetData: any) => {
  //     return new Promise((resolve, reject) => {
  //       const range = [0, 1];
  //       let minMax = { min: 0, max: 0 };
  //       console.log(targetData);
  //       targetData.forEach((key: any, index: number) => {
  //         console.log({ index });
  //         console.log(targetData[index]);
  //         const values: number[] = Object.values(targetData[index].topWords);
  //         const min = Math.min.apply(Math, values);
  //         const max = Math.max.apply(Math, values);
  //         if (min < minMax.min) {
  //           minMax.min = min;
  //         }
  //         if (max > minMax.max) {
  //           minMax.max = max;
  //         }
  //       });
  //       console.log({ minMax });
  //       const variation = (range[1] - range[0]) / (minMax.max - minMax.min);
  //       targetData.forEach((key: any, index: number) => {
  //         Object.keys(targetData[index].topWords).forEach((el: any) => {
  //           const val = (
  //             range[0] +
  //             (targetData[index].topWords[el] - minMax.min) * variation
  //           ).toFixed(2);
  //           targetData[index].topWords[el] = +val;
  //         });
  //       });
  //       return resolve(targetData);
  //     });
  //   };
  //   const sortArray = async (order: string) => {
  //     return new Promise((resolve, reject) => {
  //       let processedData = { ...data }; //Clone variable
  //       if (order === "asc") {
  //         processedData.sort((a: any, b: any) => {
  //           let topWordsA: number[] = Object.values(a.topCompanyWords);
  //           let topWordsB: number[] = Object.values(b.topCompanyWords);
  //           let averageA =
  //             topWordsA.reduce((x: any, y: any) => x + y) / topWordsA.length;
  //           let averageB =
  //             topWordsB.reduce((x: any, y: any) => x + y) / topWordsB.length;
  //           return averageA - averageB;
  //         });
  //       } else {
  //         processedData.sort((a: any, b: any) => {
  //           let topWordsA: number[] = Object.values(a.topCompanyWords);
  //           let topWordsB: number[] = Object.values(b.topCompanyWords);
  //           let averageA =
  //             topWordsA.reduce((x: any, y: any) => x + y) / topWordsA.length;
  //           let averageB =
  //             topWordsB.reduce((x: any, y: any) => x + y) / topWordsB.length;
  //           return averageB - averageA;
  //         });
  //       }
  //       getMinimumMaximum(processedData.slice(0, 4)).then(() => {
  //         return resolve(processedData.slice(0, 4));
  //       });
  //     });
  //   };
  //   useEffect(() => {
  //     if (data.length > 0) {
  //       setDataToDisplay(
  //         data.slice(maxReportsToDisplay * (page - 1), maxReportsToDisplay * page)
  //       );
  //     }
  //   }, [page]);
  //   useEffect(() => {
  //     let tempData: any[] = [];
  //     Object.keys(apiResp).forE /
  //       ach((entry) => {
  //         //@ts-ignore
  //         if (typeof apiResp[entry] !== "string") {
  //           //@ts-ignore
  //           tempData.push({ reportName: entry, topWords: apiResp[entry] });
  //         }
  //       });
  //     normaliseObject(tempData).then((response: any) => {
  //       getMinimumMaximum(response).then(() => {
  //         setDataToDisplay(
  //           response.slice(
  //             maxReportsToDisplay * (page - 1),
  //             maxReportsToDisplay * page
  //           )
  //         );
  //         setData(response);
  //       });
  //     });
  //   }, []);
  //   useEffect(() => {
  //     if (!order) {
  //       getMinimumMaximum(data).then(() => {
  //         setDataToDisplay(
  //           data.slice(
  //             maxReportsToDisplay * (page - 1),
  //             maxReportsToDisplay * page
  //           )
  //         );
  //       });
  //     } else {
  //       if (order === "best") {
  //         sortArray("des").then((sortedArray: any) => {
  //           setDataToDisplay(sortedArray);
  //         });
  //       } else if (order === "worst") {
  //         sortArray("asc").then((sortedArray: any) => {
  //           setDataToDisplay(sortedArray);
  //         });
  //       }
  //     }
  //   }, []);
  //   return (
  //     <Grid item xs={12} md={4} style={{ padding: 10 }}>
  //       {dataToDisplay?.length > 0 ? (
  //         <>
  //           <SectorRadarChart
  //             data={dataToDisplay}
  //             minimum={yAxis.minimum}
  //             maximum={yAxis.maximum}
  //           />
  //           {data.length > maxReportsToDisplay ? (
  //             <Grid
  //               container
  //               style={{ width: "100%", paddingTop: 15 }}
  //               alignContent={"center"}
  //               alignItems={"center"}
  //               justifyContent={"center"}
  //               justifyItems={"center"}
  //             >
  //               <Pagination
  //                 count={Math.ceil(data.length / maxReportsToDisplay)}
  //                 page={page}
  //                 onChange={handlePaginationChange}
  //               />
  //             </Grid>
  //           ) : null}
  //         </>
  //       ) : null}
  //     </Grid>
  //   );
};

export default SectorRadarChartContainer;
