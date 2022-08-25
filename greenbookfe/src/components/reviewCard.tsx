import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import CountryText from "./countryText";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import { FileDownload } from "@mui/icons-material";
import { Colors } from "./../styles/colors";
import CompanyRating from "./companyRating";

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
  return (
    <Grid item xs={12} md={4}>
      <Card
        elevation={0}
        sx={{
          width: "100%",
          height: { xs: "100%", md: 125 },
          backgroundColor: "rgb(92, 219, 149,0.25)",
          borderRadius: 2.5,
          transition: "all 250ms ease-in",
        }}
      >
        <CardContent>
          <Grid
            container
            rowSpacing={1}
            direction="row"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid
              item
              xs={12}
              md={8}
              justifyContent="flex-start"
              alignItems="center"
              container
              direction="row"
              textOverflow={"ellipsis"}
              zeroMinWidth
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
              <Typography
                gutterBottom
                variant="caption"
                component="div"
                fontFamily={FontFamilies.Montserrat}
                sx={{ paddingBottom: 0, marginBottom: 0 }}
              >
                {sector}
              </Typography>
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
            <Grid
              item
              xs={12}
              md={4}
              justifyContent={{ xs: "flex-start ", md: "flex-end" }}
              alignItems="flex-start"
              container
              direction="row"
            >
              {country ? <CountryText country={country} /> : null}
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={7}
              justifyContent={{ xs: "center ", md: "flex-start" }}
              alignItems="center"
              style={{ display: "flex" }}
            >
              {rating ? <CompanyRating rating={rating} /> : null}
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              justifyContent={{ xs: "center ", md: "flex-end" }}
              alignItems="center"
              style={{ display: "flex" }}
            >
              {link ? (
                <Button
                  variant="contained"
                  endIcon={<FileDownload />}
                  disableElevation
                  style={{
                    fontFamily: FontFamilies.Montserrat,
                    backgroundColor: Colors.green,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Download
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ReviewCard;
