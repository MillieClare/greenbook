import { Grid, Pagination, Typography } from "@mui/material";
import ReviewCard from "./reviewCard";

import { useAppSelector } from "./../state/hooks";
import { allSectorGraphData } from "../state/features/reports/reportsSlice";
import NoResultsScreen from "./noResultsScreen";
import { useEffect, useState } from "react";
import SectorGalleryRadarChart from "./charts/sectorGalleryRadarChart";

const SectorsContainer = () => {
  const sectors = useAppSelector(allSectorGraphData);
  const [processedSectors, setProcessedSectors] = useState<any>([]);

  useEffect(() => {
    console.log({ sectors });

    const sectorNames = Array.from(
      new Set(sectors.map((entry: any) => entry.sectorName))
    ) as string[];
    let tempProcessedSectors: any[] = [];
    sectorNames.forEach((entry) => {
      let values = sectors.filter((item) => item.sectorName === entry);
      let object: any = { ["_sector"]: entry };
      values.forEach((value) => {
        object[value.word] = value.averageValue;
      });
      tempProcessedSectors.push(object);
    });
    setProcessedSectors(tempProcessedSectors);
  }, []);

  if (processedSectors.length > 0) {
    return (
      <>
        <Grid container spacing={4}>
          {processedSectors.map((entry: any, index: number) => {
            return (
              <SectorGalleryRadarChart maximum={1} minimum={0} data={entry} />
            );
          })}
        </Grid>
      </>
    );
  } else {
    return (
      <Grid container alignItems={"space-between"} justifyContent={"center"}>
        <NoResultsScreen />
      </Grid>
    );
  }
};

export default SectorsContainer;
