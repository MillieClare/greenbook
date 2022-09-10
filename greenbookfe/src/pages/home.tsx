import * as React from "react";
import ContentContainer from "../components/contentContainer";
import { useAppSelector } from "../state/hooks";
import { allReports } from "../state/features/reports/reportsSlice";
import ReportsContainer from "../components/reportsContainer";
import LoadingScreen from "../components/loadingScreen";

const Home = () => {
  const reports = useAppSelector(allReports);
  return (
    <React.Fragment>
      <ContentContainer backgroundFilled={false}>
        {reports && reports.length > 0 ? (
          <ReportsContainer />
        ) : (
          <LoadingScreen />
        )}
      </ContentContainer>
    </React.Fragment>
  );
};

export default Home;
