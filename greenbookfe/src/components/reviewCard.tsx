import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Paper,
  Tooltip,
  Popover,
  Modal,
} from "@mui/material";
import CountryText from "./countryText";
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
import { useState } from "react";
import React from "react";

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  padding: 15,
  backgroundColor: Colors.light,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};

const ReviewCard = ({
  reviewLink,
  company,
  reviewer,
  country,
  sentimentScore,
  sector,
  marketInformationLink,
  marketInformationDate,
}: {
  reviewLink?: string;
  company: string;
  sector?: string;
  reviewer?: string;
  country?: string;
  sentimentScore?: number;
  marketInformationLink?: string;
  marketInformationDate?: string;
}) => {
  // const [downloadOpen, setDownloadMenuOpen] = useState(false);

  const [anchorElement, setAnchorElement] =
    React.useState<HTMLButtonElement | null>(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  // const handleClose = () => {
  //     setAnchorElement(null);
  // };

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
            onClick={handleOpen}
            style={{
              fontFamily: FontFamilies.Montserrat,
              backgroundColor: Colors.green,
              color: "#FFFFFF",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            {downloadMenuOpen ? "Select File" : "Download"}
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
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
                download
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
                download
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
            download
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
            download
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
      <Grid
        container
        spacing={2}
        style={{
          backgroundColor: "rgb(92, 219, 149,0.25)",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Grid item xs={12} lg={7}>
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
          <Item item justifyContent="flex-start" alignItems="center">
            {sentimentScore && sentimentScore === 1 ? (
              <CompanyRating rating={sentimentScore} />
            ) : null}
          </Item>
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
