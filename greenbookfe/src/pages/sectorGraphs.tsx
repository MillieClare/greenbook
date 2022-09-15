import * as React from "react";
import ContentContainer from "../components/contentContainer";
// import SectorRadarChartContainer from "../components/sectorRadarChartContainer";
import { useAppSelector } from "../state/hooks";
import { allReports } from "../state/features/reports/reportsSlice";
// import LoadingScreen from "../components/loadingScreen";
import NavBar from "../components/navBar";

const SectorGraphs = () => {
  // const isGraphsLoading = useAppSelector(loading);
  const reports = useAppSelector(allReports);

  return (
    <React.Fragment>
      <NavBar hideFilters />
      {/* {isGraphsLoading ? <LoadingOverlay /> : null} */}

      <ContentContainer backgroundFilled={false}>
        {/* <SectorRadarChartContainer /> */}
      </ContentContainer>
    </React.Fragment>
  );
};

export default SectorGraphs;
