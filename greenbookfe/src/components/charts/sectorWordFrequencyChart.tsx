import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { Colors } from "../../styles/colors";

type Props = {
  data?: any;
};

const SectorWordFrequencyChart = ({ data }: Props) => {
  const [filteredData, setFilteredData] = React.useState<any>(null);
  const [topWords, setTopWords] = React.useState<any>([]);
  useEffect(() => {
    let wordCountData: any = {};

    data.forEach((sector: any) => {
      Object.keys(sector).forEach((word: any) => {
        wordCountData[word] = 0;
      });
    });

    data.forEach((sector: any) => {
      Object.keys(sector).forEach((key: any) => {
        if (key in wordCountData) {
          wordCountData[key] += 1;
        }
      });
    });
    delete wordCountData._sector;

    let values: any = [];
    let keys: any = [];
    Object.keys(wordCountData).forEach((key: any) => {
      values.push(wordCountData[key]);
      keys.push(key);
    });
    values.sort((a: any, b: any) => b - a);

    setTopWords(keys);
    setFilteredData([{ name: "Top words Frequency", data: values }]);
  }, [data]);

  const options = {
    chart: {
      height: 350,
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 1,
    },
    title: {
      text: "Top words Frequency",
    },
    colors: [Colors.green],
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: topWords,
      tickPlacement: "on",
    },
  };

  return (
    <>
      {/* <Grid item xs={12} md={4} style={{ padding: 10 }}> */}
      {filteredData ? (
        <Grid item xs={12} style={{ padding: 10 }}>
          <div style={{ background: `#FFFFFF`, padding: 10, borderRadius: 10 }}>
            {" "}
            <Chart
              options={options}
              series={filteredData}
              type="bar"
              // width="100%"
              height="350"
            />
          </div>
        </Grid>
      ) : null}
      {/* </Grid> */}
    </>
  );
};

export default SectorWordFrequencyChart;
