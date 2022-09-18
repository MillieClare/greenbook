import {
  Typography,
  Grid,
  Button,
  Tooltip,
  Modal,
  Card,
  Box,
  CardHeader,
} from "@mui/material";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import {
  FileDownload,
  FileDownloadOff,
  PictureAsPdf,
} from "@mui/icons-material";
import { Colors } from "./../styles/colors";
import CompanyRating from "./companyRating";
import { styled } from "@mui/material/styles";
import { getCountryFlag } from "../utilities/countryFormat";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../state/hooks";
import {
  filteredReports,
  allReportGraphData,
  allSectorGraphData,
  allReports,
} from "../state/features/reports/reportsSlice";
import CompanyRadarChart from "./charts/companyRadarChart";
import { CardContent } from "@mui/joy";

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const scoreText = `A score from 1-6. One leaf for every word that this company has a score over 0.8.`;

const ReviewCard = ({
  _id,
  reviewLink,
  company,
  reviewer,
  country,
  sentimentScore,
  sector,
  marketInformationLink,
  marketInformationDate,
}: {
  _id: string;
  reviewLink?: string;
  company: string;
  sector?: string;
  reviewer?: string;
  country?: string;
  sentimentScore?: number;
  marketInformationLink?: string;
  marketInformationDate?: string;
}) => {
  const navigate = useNavigate();

  const reports = useAppSelector(allReports);
  const sectors = useAppSelector(allSectorGraphData);
  const normalisedValues = useAppSelector(allReportGraphData);

  const [anchorElement, setAnchorElement] =
    React.useState<HTMLButtonElement | null>(null);

  const [downloadOptionsOpen, setDownloadOptionsOpen] = React.useState(false);
  const [chartOpen, setChartOpen] = React.useState(false);
  const handleDownloadOptionsOpen = () => setDownloadOptionsOpen(true);
  const handleDownloadOptionsClose = () => setDownloadOptionsOpen(false);
  const handleChartOpen = () => {
    console.log({ companyData });
    console.log({ sectorData });
    console.log({ wordValueData });
    setChartOpen(true);
  };
  const handleChartClose = () => setChartOpen(false);

  const [companyData, setCompanyData] = useState<any>(null);
  const [sectorData, setSectorData] = useState<any>(null);
  const [wordValueData, setWordValueData] = useState<any>(null);

  useEffect(() => {
    if (reports && sectors && normalisedValues) {
      const companyEntry = reports.find(
        (entry) => entry.companyName === company
      );
      if (companyEntry) {
        const sectorEntry = sectors.filter(
          (entry) => entry.sectorName === sector
        );
        const wordDataEntry = normalisedValues.filter(
          (entry) => entry.companyName === company
        );
        setCompanyData(companyEntry);
        setSectorData(sectorEntry);
        setWordValueData(wordDataEntry[0]);
      }
    }
  }, [company, reports, sectors, normalisedValues]);

  const handleDownloadButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElement(event.currentTarget);
  };

  const handleMarketInfoClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElement(event.currentTarget);
  };

  const handleReviewClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const downloadMenuOpen = Boolean(anchorElement);
  const id = downloadMenuOpen ? "download-file-popover" : undefined;

  const renderDownloadButton = () => {
    if (marketInformationLink && reviewLink) {
      return (
        <>
          <Button
            variant="contained"
            endIcon={<FileDownload />}
            disableElevation
            fullWidth
            onClick={handleDownloadOptionsOpen}
            style={{
              fontFamily: FontFamilies.Montserrat,
              backgroundColor: Colors.green,
              color: "#FFFFFF",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Choose file
          </Button>

          <Modal
            open={downloadOptionsOpen}
            onClose={handleDownloadOptionsClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {/* <div style={{ padding: 10, borderRadius: 10 }}> */}
            <div id={"download-modal"}>
              <a
                style={{ width: "100%" }}
                href={reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                <Button
                  variant="contained"
                  endIcon={<PictureAsPdf />}
                  disableElevation
                  fullWidth
                  onClick={handleReviewClick}
                  style={{
                    fontFamily: FontFamilies.Montserrat,
                    backgroundColor: Colors.green,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    margin: 0,
                    marginBottom: 10,
                  }}
                >
                  Review
                </Button>
              </a>
              <a
                style={{ width: "100%" }}
                href={marketInformationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                <Button
                  variant="contained"
                  endIcon={<PictureAsPdf />}
                  disableElevation
                  fullWidth
                  onClick={handleMarketInfoClick}
                  style={{
                    fontFamily: FontFamilies.Montserrat,
                    backgroundColor: Colors.green,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    margin: 0,
                  }}
                >
                  {`Market Information`}
                </Button>
              </a>
            </div>
          </Modal>
        </>
      );
    } else if (marketInformationLink) {
      return (
        <>
          <a
            style={{ width: "100%" }}
            href={marketInformationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            <Button
              variant="contained"
              endIcon={<FileDownload />}
              disableElevation
              fullWidth
              onClick={handleMarketInfoClick}
              style={{
                fontFamily: FontFamilies.Montserrat,
                backgroundColor: Colors.green,
                color: "#FFFFFF",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              {"Download"}
            </Button>
          </a>
        </>
      );
    } else if (reviewLink) {
      return (
        <>
          <a
            style={{ width: "100%" }}
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            <Button
              variant="contained"
              endIcon={<FileDownload />}
              disableElevation
              fullWidth
              onClick={handleReviewClick}
              style={{
                fontFamily: FontFamilies.Montserrat,
                backgroundColor: Colors.green,
                color: "#FFFFFF",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              {"Download"}
            </Button>
          </a>
        </>
      );
    }
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      style={{ borderRadius: 10, overflow: "hidden" }}
    >
      {companyData && sectorData && wordValueData ? (
        <Modal
          open={chartOpen}
          onClose={handleChartClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card id={"company-info-modal"}>
            <CardHeader
              title={company}
              titleTypographyProps={{
                align: "center",
                fontFamily: FontFamilies.Montserrat,
                color: "#FFFFFF",
              }}
              subheader={sector}
              subheaderTypographyProps={{
                align: "center",
                fontFamily: FontFamilies.Montserrat,
                color: "#FFFFFF",
              }}
              sx={{
                backgroundColor: Colors.darkGreen,
              }}
              action={
                <Tooltip title={country as string}>
                  <div style={{ marginRight: 10 }}>
                    {getCountryFlag(country)}
                  </div>
                </Tooltip>
              }
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <ul style={{ paddingInlineStart: 0 }}>
                  <Tooltip title={scoreText}>
                    <Item item justifyContent="flex-start" alignItems="center">
                      {sentimentScore !== undefined ? (
                        <CompanyRating rating={sentimentScore} />
                      ) : null}
                    </Item>
                  </Tooltip>
                  <Typography
                    component="li"
                    align="center"
                    variant="caption"
                    fontFamily={FontFamilies.Montserrat}
                    sx={{ paddingBottom: 0, marginBottom: 0, display: "flex" }}
                  >
                    {`Reviewed by ${reviewer}`}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    fontWeight={"bold"}
                    fontFamily={FontFamilies.Montserrat}
                  >
                    <span>Overall Sentiment Score: </span>
                    <Typography
                      variant="caption"
                      fontFamily={FontFamilies.Montserrat}
                      fontStyle={"italic"}
                      sx={{
                        marginBottom: 1,
                        // textDecoration:'underline'
                        color:
                          sentimentScore === 0
                            ? Colors.red
                            : sentimentScore === 1
                            ? Colors.darkGreen
                            : Colors.dark,
                      }}
                    >
                      {sentimentScore === 0
                        ? "Negative"
                        : sentimentScore === 1
                        ? "Positive"
                        : "Neutral"}
                    </Typography>
                  </Typography>
                </ul>
              </Box>
              <CompanyRadarChart
                companyData={companyData}
                sectorData={sectorData}
                wordValueData={wordValueData}
                mdSize={12}
              />
            </CardContent>
          </Card>
        </Modal>
      ) : null}
      <Grid
        container
        spacing={2}
        style={{
          backgroundColor: "rgb(92, 219, 149,0.25)",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Grid
          item
          xs={12}
          lg={7}
          onClick={handleChartOpen}
          className="report-card"
        >
          <Item
            style={{ height: 80 }}
            item
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography
              textOverflow={"ellipsis"}
              noWrap
              gutterBottom
              variant="body1"
              component="div"
              fontFamily={FontFamilies.Montserrat}
              sx={{ paddingBottom: 0, marginBottom: 0, fontWeight: "400" }}
            >
              {company}
            </Typography>
            <Grid container direction="row">
              <Grid
                item
                display={{ xs: "start", sm: "start", md: "start", lg: "none" }}
              >
                <Tooltip title={country as string}>
                  <div style={{ paddingRight: 10 }}>
                    {getCountryFlag(country)}
                  </div>
                </Tooltip>
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="caption"
                    component="div"
                    fontFamily={FontFamilies.Montserrat}
                    sx={{ paddingBottom: 0, marginBottom: 0 }}
                  >
                    {sector}
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                gutterBottom
                variant="caption"
                component="div"
                fontFamily={FontFamilies.Montserrat}
                sx={{ paddingBottom: 0, marginBottom: 0 }}
              >
                {reviewer}
              </Typography>
            </Grid>
          </Item>
        </Grid>
        <Grid
          item
          xs={0}
          lg={5}
          style={{ height: 80 }}
          display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
          alignContent={"flex-end"}
        >
          <Item
            style={{ height: 80, width: "100%" }}
            item
            display={"flex"}
            justifyContent="flex-end"
            alignItems="flex-start"
            textAlign={"right"}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignContent="flex-end"
              alignItems="flex-start"
              textAlign={"right"}
            >
              <div style={{ paddingRight: 10 }}>{getCountryFlag(country)}</div>
              <Typography
                variant="caption"
                component="div"
                fontFamily={FontFamilies.Montserrat}
                sx={{ paddingBottom: 0, marginBottom: 0 }}
              >
                {country}
              </Typography>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Tooltip title={scoreText}>
            <Item item justifyContent="flex-start" alignItems="center">
              {sentimentScore !== undefined ? (
                <CompanyRating rating={sentimentScore} />
              ) : null}
            </Item>
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          display={"flex"}
          alignContent={"center"}
          alignItems={"center"}
          style={{ padding: 16 }}
        >
          {reviewLink ? (
            renderDownloadButton()
          ) : (
            <Button
              variant="contained"
              endIcon={<FileDownloadOff />}
              disableElevation
              disabled={true}
              fullWidth
              style={{
                fontFamily: FontFamilies.Montserrat,
                backgroundColor: Colors.darkGreen,
                color: "#FFFFFF",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              Unavailable
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReviewCard;
