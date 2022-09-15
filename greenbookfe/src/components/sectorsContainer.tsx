import { Grid } from "@mui/material";

import { useAppSelector } from "./../state/hooks";
import { allSectorGraphData } from "../state/features/reports/reportsSlice";
import NoResultsScreen from "./noResultsScreen";
import { useEffect, useState } from "react";
import SectorGalleryRadarChart from "./charts/sectorGalleryRadarChart";
import SectorFilterDropdown from "./sectorFilterDropDown";
import LoadingOverlay from "./loadingOverlay";
import SectorWordFrequencyChart from "./charts/sectorWordFrequencyChart";

const SectorsContainer = () => {
  const sectors = useAppSelector(allSectorGraphData);
  const [busy, setBusy] = useState(false);
  const [processedSectors, setProcessedSectors] = useState<any>([]);
  const [listOfTopWords, setListOfTopWords] = useState<any>([]);
  const [filteredWords, setFilteredWords] = useState<any>([]);

  useEffect(() => {
    const sectorNames = Array.from(
      new Set(sectors.map((entry: any) => entry.sectorName))
    ) as string[];
    const topWords = Array.from(
      new Set(
        sectors.map(
          (entry: any) => entry.word[0].toUpperCase() + entry.word.slice(1)
        )
      )
    ) as string[];
    setListOfTopWords(topWords.sort());
    if (filteredWords.length === 0) {
      let tempProcessedSectors: any[] = [];
      sectorNames.forEach((entry) => {
        let values = sectors.filter((item) => item.sectorName === entry);
        let object: any = { _sector: entry };
        values.forEach((value) => {
          let word = value.word[0].toUpperCase() + value.word.slice(1);
          object[word] = value.normalisedScore;
        });
        tempProcessedSectors.push(object);
      });
      setProcessedSectors(tempProcessedSectors);
    } else {
      let tempProcessedSectors: any[] = [];
      setBusy(true);
      sectorNames.forEach((entry) => {
        let values = sectors.filter((item) => item.sectorName === entry);
        let lowercaseFilteredWords = filteredWords.map((word: any) => {
          return word.toLowerCase();
        });
        let containsValue = values.filter((item) =>
          lowercaseFilteredWords.includes(item.word)
        );
        if (containsValue.length === filteredWords.length) {
          let object: any = { _sector: entry };
          values.forEach((value) => {
            let word = value.word[0].toUpperCase() + value.word.slice(1);
            object[word] = value.normalisedScore;
          });
          tempProcessedSectors.push(object);
        }
      });
      setProcessedSectors(tempProcessedSectors);
      setBusy(false);
    }
  }, [filteredWords, sectors]);

  if (processedSectors.length > 0) {
    return (
      <>
        {busy ? <LoadingOverlay /> : null}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} margin={"auto"} style={{ padding: 10 }}>
            <SectorFilterDropdown
              words={listOfTopWords}
              filteredWords={filteredWords}
              onChange={(value) => {
                setFilteredWords(value);
                // console.log(filteredWords);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            margin={"auto"}
            style={{ padding: 10, marginBottom: 30 }}
          >
            <SectorWordFrequencyChart data={processedSectors} />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {processedSectors.map((entry: any, index: number) => {
            return (
              <SectorGalleryRadarChart
                maximum={1}
                minimum={0}
                data={entry}
                key={`sector_radar_chart_${index}`}
              />
            );
          })}
        </Grid>
      </>
    );
  } else {
    if (filteredWords.length > 0) {
      return (
        <>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={4}
              margin={"auto"}
              style={{ padding: 10, marginBottom: 20 }}
            >
              <SectorFilterDropdown
                words={listOfTopWords}
                filteredWords={filteredWords}
                onChange={(value) => {
                  setFilteredWords(value);
                  // console.log(filteredWords);
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems={"space-between"}
            justifyContent={"center"}
          >
            <NoResultsScreen
              message={`There doesn't seem to be any results containing all those keywords`}
              loading={false}
            />
          </Grid>
        </>
      );
    } else {
      return (
        <Grid container alignItems={"space-between"} justifyContent={"center"}>
          <NoResultsScreen
            message={`There doesn't seem to be any results for that search!`}
          />
        </Grid>
      );
    }
  }
};

export default SectorsContainer;
