import * as React from "react";
import ContentContainer from "../components/contentContainer";
import { useAppSelector } from "../state/hooks";
import LoadingScreen from "../components/loadingScreen";
import NavBar from "../components/navBar";
import { allSectorGraphData } from "../state/features/reports/reportsSlice";
import SectorsContainer from "../components/sectorsContainer";

const Sectors = () => {
  const graphData = useAppSelector(allSectorGraphData);
  return (
    <React.Fragment>
      <NavBar hideFilters={graphData.length === 0} />
      <ContentContainer backgroundFilled={false}>
        {graphData && graphData.length > 0 ? (
          <SectorsContainer />
        ) : (
          <LoadingScreen />
        )}
      </ContentContainer>
    </React.Fragment>
  );
};

export default Sectors;
