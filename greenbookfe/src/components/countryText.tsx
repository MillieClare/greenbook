import { Grid, Typography } from "@mui/material";
import { getCountryFlag } from "../utilities/countryFormat";

const CountryText = ({ country }: { country: string }) => {
  return (
    <Grid container justifyContent={"flex-end"} alignContent={"center"}>
      {getCountryFlag(country)}
      <Typography textOverflow={"ellipsis"} style={{ marginLeft: 5 }}>
        {country}
      </Typography>
    </Grid>
  );
};

export default CountryText;
