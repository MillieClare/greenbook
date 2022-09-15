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
import { colors, Grid, Tooltip, Typography } from "@mui/material";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import { Colors } from "../styles/colors";
import { getCountryFlag } from "../utilities/countryFormat";

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

  const sentimentScoreText = `How positive the language of the report is. 'Positive' means the language used is favourable towards the bond, 'Negative' means it is not, and 'Neutral' means it is mixed.`;

  console.log(companyData, sectorData, wordValueData);
  return (
    <React.Fragment>
      <NavBar hideFilters={reports.length === 0} />
      <ContentContainer backgroundFilled={false}>
        {reports && reports.length > 0 && companyData._id && wordValueData ? (
          <>
            <Grid
              xs={12}
              lg={1.8}
              textAlign={"left"}
              // spacing={2}
              style={{
                backgroundColor: "rgb(92, 219, 149,0.25)",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  component="div"
                  fontFamily={FontFamilies.Montserrat}
                  sx={{
                    padding: 2,
                    marginBottom: 1,
                    marginTop: 1,
                  }}
                >
                  <u>Company Information</u>
                </Typography>
                <Typography
                  variant="caption"
                  component="div"
                  fontFamily={FontFamilies.Montserrat}
                  sx={{ padding: 2, marginBottom: 1, marginTop: 1 }}
                >
                  <b>Company:</b> {companyData.companyName}
                </Typography>
                <Typography
                  variant="caption"
                  component="div"
                  fontFamily={FontFamilies.Montserrat}
                  sx={{ padding: 2, marginBottom: 1 }}
                >
                  <b>Sector:</b> {companyData.sector}
                </Typography>
                <Typography
                  variant="caption"
                  component="div"
                  fontFamily={FontFamilies.Montserrat}
                  sx={{ padding: 2, marginBottom: 1 }}
                >
                  <b>Company Location:</b> {companyData.country}
                  {getCountryFlag(companyData.country)}
                </Typography>
                <Typography
                  variant="caption"
                  component="div"
                  fontFamily={FontFamilies.Montserrat}
                  sx={{ padding: 2, marginBottom: 1 }}
                >
                  <b>Reviewing company: </b> {companyData.reviewer}
                </Typography>
                <Typography
                  variant="caption"
                  component="div"
                  fontFamily={FontFamilies.Montserrat}
                  sx={{
                    padding: 2,
                    marginBottom: 1,
                  }}
                >
                  <Tooltip title={sentimentScoreText}>
                    <b>Sentiment score: </b>
                  </Tooltip>
                  <Typography
                    variant="caption"
                    fontFamily={FontFamilies.Montserrat}
                    sx={{
                      marginBottom: 1,
                      // color: "Positive" ? Colors.darkGreen : Colors.red,
                    }}
                  >
                    {companyData.sentimentScore !== 0
                      ? companyData.sentimentScore === 1
                        ? "Positive"
                        : "Neutral"
                      : "Negative"}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <CompanyRadarChart
              companyData={companyData}
              sectorData={sectorData}
              wordValueData={wordValueData}
            />
          </>
        ) : (
          <LoadingScreen />
        )}
      </ContentContainer>
    </React.Fragment>
  );
};

export default Company;
