import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Paper,
  Tooltip,
  Popover,
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

const ReviewCard = ({
  link,
  company,
  reviewer,
  country,
  rating,
  sector,
}: {
  link?: string;
  company: string;
  sector?: string;
  reviewer?: string;
  country?: string;
  rating?: number;
}) => {
  const [downloadOpen, setDownloadMenuOpen] = useState(false);

  const [anchorElement, setAnchorElement] =
    React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const downloadMenuOpen = Boolean(anchorElement);
  const id = downloadMenuOpen ? "download-file-popover" : undefined;

  const renderDownloadButton = () => {
    return (
      <>
        <Button
          variant="contained"
          endIcon={<FileDownload />}
          disableElevation
          fullWidth
          onClick={handleClick}
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
        <Popover
          id={id}
          open={downloadMenuOpen}
          anchorEl={anchorElement}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          style={{ width: anchorElement?.clientWidth }}
          elevation={0}
        >
          <div style={{ padding: 10, borderRadius: 10 }}>
            <Button
              variant="contained"
              endIcon={<PictureAsPdf />}
              disableElevation
              fullWidth
              onClick={handleClick}
              style={{
                fontFamily: FontFamilies.Montserrat,
                backgroundColor: Colors.green,
                color: "#FFFFFF",
                fontWeight: "bold",
                margin: 0,
                marginBottom: 10,
              }}
            >
              1st April 2020
            </Button>
            <Button
              variant="contained"
              endIcon={<PictureAsPdf />}
              disableElevation
              fullWidth
              onClick={handleClick}
              style={{
                fontFamily: FontFamilies.Montserrat,
                backgroundColor: Colors.green,
                color: "#FFFFFF",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              1st January 2022
            </Button>
          </div>
        </Popover>
      </>
    );
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
            {rating ? <CompanyRating rating={rating} /> : null}
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
          {link ? (
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
