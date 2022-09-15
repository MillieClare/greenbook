import * as React from "react";
import ContentContainer from "../components/contentContainer";
import { useAppSelector } from "../state/hooks";
import {
  allReportGraphData,
  allReports,
  allSectorGraphData,
} from "../state/features/reports/reportsSlice";
import LoadingScreen from "../components/loadingScreen";
import NavBar from "../components/navBar";
import CompanyRadarChart from "../components/charts/companyRadarChart";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Company = () => {
  const { id } = useParams();
  const reports = useAppSelector(allReports);
  const sectors = useAppSelector(allSectorGraphData);
  const normalisedValues = useAppSelector(allReportGraphData);
  const [companyData, setCompanyData] = useState<any>({});
  const [sectorData, setSectorData] = useState<any>({});
  const [wordValueData, setWordValueData] = useState<any>({});

  useEffect(() => {
    const company = reports.find((entry) => entry._id === id);
    if (company) {
      const sector = sectors.filter(
        (entry) => entry.sectorName === company.sector
      );
      const wordData = normalisedValues.filter(
        (entry) => entry.companyName === company.companyName
      );
      setCompanyData(company);
      setSectorData(sector);
      setWordValueData(wordData[0]);
    }
  }, [reports, sectors, normalisedValues]);

  return (
    <React.Fragment>
      <NavBar hideFilters={reports.length === 0} />
      <ContentContainer backgroundFilled={false}>
        {reports && reports.length > 0 && companyData._id && wordValueData ? (
          <CompanyRadarChart
            companyData={companyData}
            sectorData={sectorData}
            wordValueData={wordValueData}
          />
        ) : (
          <LoadingScreen />
        )}
      </ContentContainer>
    </React.Fragment>
  );
};

export default Company;
