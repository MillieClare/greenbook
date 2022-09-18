import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Colors } from "../../styles/colors";

const CompanyRadarChart = ({
  companyData,
  sectorData,
  wordValueData,
  mdSize = 4,
}: {
  companyData: any;
  sectorData: any;
  wordValueData: any;
  mdSize?: number;
}) => {
  const [chartCategories, setChartCategories] = useState<any>([]);
  const [processedData, setProcessedData] = useState<any>([]);

  useEffect(() => {
    const companyDataArray: any[] = [];
    const sectorDataArray: any[] = [];
    Object.keys(wordValueData.topCompanyWords).forEach((word) => {
      const companyWord = wordValueData.topCompanyWords[word];
      const sectorWord = sectorData.find((entry: any) => entry.word === word);
      companyDataArray.push(companyWord);
      sectorDataArray.push(sectorWord.normalisedScore);
    });
    const seriesData = [
      {
        name: companyData.companyName,
        data: companyDataArray,
      },
      {
        name: `Averages for ${companyData.sector}`,
        data: sectorDataArray,
      },
    ];
    setChartCategories(Object.keys(wordValueData.topCompanyWords));
    setProcessedData(seriesData);
    console.log("a");
  }, [companyData, sectorData, wordValueData]);

  const options = {
    chart: {
      height: 350,
    },
    title: {
      text: "Score vs sector average",
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.25,
    },
    markers: {
      size: 5,
      hover: {
        size: 10,
      },
    },
    xaxis: {
      categories: chartCategories,
    },
    yaxis: {
      show: false,
      tickAmount: 5,
      min: 0,
      max: 1,
    },
  };
  return (
    <>
      <Grid item xs={12} md={mdSize} style={{ padding: 10 }}>
        <div style={{ background: `#FFFFFF`, padding: 10, borderRadius: 10 }}>
          {processedData.length > 0 ? (
            <Chart
              type="radar"
              options={options}
              series={processedData}
              height="350"
            />
          ) : null}
        </div>
      </Grid>
    </>
  );
};

export default CompanyRadarChart;
