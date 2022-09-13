import { Analytics } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { Colors } from "../../styles/colors";
import { FontFamilies } from "../../styles/fonts/fontFamilies";

type Props = {
  data?: any;
  minimum: number;
  maximum: number;
};

const SectorGalleryRadarChart = ({ data, minimum, maximum }: Props) => {
  const [filteredData, setFilteredData] = React.useState<any>(null);
  const [chartTitle, setChartTitle] = React.useState("");

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
    title: {
      text: chartTitle,
    },
    colors: [Colors.green],
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

  return (
    <>
      {/* <Grid item xs={12} md={4} style={{ padding: 10 }}> */}
      {filteredData ? (
        <Grid item xs={12} md={4} style={{ padding: 10 }}>
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
        </Grid>
      ) : null}
      {/* </Grid> */}
    </>
  );
};

export default SectorGalleryRadarChart;
