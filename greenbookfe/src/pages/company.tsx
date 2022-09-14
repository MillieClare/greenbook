import * as React from "react";
import ContentContainer from "../components/contentContainer";
import { useAppSelector } from "../state/hooks";
import { allReports } from "../state/features/reports/reportsSlice";
import ReportsContainer from "../components/reportsContainer";
import LoadingScreen from "../components/loadingScreen";
import NavBar from "../components/navBar";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Typography,
  Chip,
} from "@mui/material";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import CompanyContainer from "../components/companyContainer";

const Company = () => {
  const { id } = useParams();
  const reports = useAppSelector(allReports);
  const [companyData, setCompanyData] = useState<any>({});
  console.log({ id });

  useEffect(() => {
    console.log({ reports });
    const company = reports.find((entry) => entry._id === id);
    console.log(company);
    if (company) {
      setCompanyData(company);
    }
  }, [reports]);

  return (
    <React.Fragment>
      <NavBar hideFilters={reports.length === 0} />
      <ContentContainer backgroundFilled={false}>
        {reports && reports.length > 0 && companyData._id ? (
          // <CompanyContainer data={companyData} />
          <Typography>testtest</Typography>
        ) : (
          <LoadingScreen />
        )}
      </ContentContainer>
    </React.Fragment>
  );
};

export default Company;
