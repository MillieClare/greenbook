import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { Colors } from "../../styles/colors";
import { FontFamilies } from "../../styles/fonts/fontFamilies";

type Props = {
  data?: any;
  minimum: number;
  maximum: number;
};

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

  return (
    <>
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
    </>
  );
};

export default SectorRadarChart;
