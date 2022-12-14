import * as React from "react";
import ContentContainer from "../components/contentContainer";
import { useAppSelector } from "../state/hooks";
import { allReports, loading } from "../state/features/reports/reportsSlice";
import ReportsContainer from "../components/reportsContainer";
import LoadingScreen from "../components/loadingScreen";
import LoadingOverlay from "../components/loadingOverlay";

import NavBar from "../components/navBar";

const Home = () => {
  const reports = useAppSelector(allReports);
  const isReportsLoading = useAppSelector(loading);

  return (
    <React.Fragment>
      <NavBar hideFilters={reports.length === 0} />
      {isReportsLoading ? <LoadingOverlay /> : null}

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
