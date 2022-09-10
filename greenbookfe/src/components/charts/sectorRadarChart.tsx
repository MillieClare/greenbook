import { Analytics } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { Colors } from "../../styles/colors";
import { FontFamilies } from "../../styles/fonts/fontFamilies";

interface TWordCloudObject {
  x: string;
  y: number;
}

type Props = {
  // data?: { _id?: string, companyName?: string, sentimentScore?: number, topCompanyWords?: any };
  data?: any;
  minimum: number;
  maximum: number;
};

interface ChartDataObject {
  [key: string]: any;
}

const SectorRadarChart = ({ data, minimum, maximum }: Props) => {
  const [filteredData, setFilteredData] = React.useState(null);

  useEffect(() => {
    let processedData: any[] = [];
    data.forEach((entry: any) => {
      if (entry.topWords) {
        let entryData = { name: entry.reportName };
        let entryDataArray: { x: string; y: any }[] = [];
        Object.keys(entry.topWords).forEach((word: string) => {
          entryDataArray.push({
            x: word[0].toUpperCase() + word.slice(1),
            y: entry.topWords[word].toFixed(2),
          });
        });
        //@ts-ignore
        entryData.data = entryDataArray;
        processedData.push(entryData);
      }
    });
    //@ts-ignore
    setFilteredData(processedData);
  }, [data]);

  const options = {
    chart: {
      height: 350,
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.25,
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: FontFamilies.Montserrat,
          fontWeight: "bold",
          colors: [
            Colors.dark,
            Colors.dark,
            Colors.dark,
            Colors.dark,
            Colors.dark,
            Colors.dark,
          ],
        },
      },
    },
    yaxis: {
      show: false,
      tickAmount: 6,
      min: minimum,
      max: maximum,
    },
  };

  // const options = {
  //     colors: ['#FFFFFF'],
  //     chart: {
  //         toolbar: { show: false },
  //         legend: { show: false },
  //     },
  // xaxis: {
  //     labels: {
  //         show: true,
  //         style: {
  //             fontFamily: FontFamilies.Montserrat,
  //             fontWeight: 'bold',
  //             colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']
  //         }
  //     }
  // },
  //     yaxis: {
  //         show: false
  //     },
  //     plotOptions: {
  //         treemap: {
  //             enableShades: true,
  //             shadeIntensity: 1,
  //             reverseNegativeShade: false,
  //             distributed: false,
  //             useFillColorAsStroke: false,
  //         }
  //     }
  // }

  return (
    <>
      {/* <Grid item xs={12} md={4} style={{ padding: 10 }}> */}
      {filteredData ? (
        <div style={{ background: `#FFFFFF`, padding: 10, borderRadius: 10 }}>
          {" "}
          <Chart
            options={options}
            series={filteredData}
            type="radar"
            // width="100%"
            height="350"
          />
        </div>
      ) : null}
      {/* </Grid> */}
    </>
  );
};

export default SectorRadarChart;
