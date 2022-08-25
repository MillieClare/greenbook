import { Chip, Grid, Tooltip } from "@mui/material";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import { Colors } from "../styles/colors";
import { getCountryString } from "../utilities/countryFormat";

type Props = {
  country: string;
  onClick?: () => void;
  selected?: boolean;
};

const CountryChip = ({ country, onClick, selected }: Props) => {
  const countryString = getCountryString(country);
  return (
    <Tooltip
      title={
        selected
          ? `Clear ${countryString} filter`
          : `Filter by companies from ${countryString}`
      }
    >
      <Grid item>
        <Chip
          label={countryString}
          onClick={onClick}
          variant="outlined"
          sx={[
            { fontFamily: FontFamilies.Montserrat },
            selected
              ? {
                  borderColor: Colors.green,
                  backgroundColor: "rgb(92, 219, 149,0.25)",
                }
              : {},
          ]}
        />
      </Grid>
    </Tooltip>
  );
};

export default CountryChip;
