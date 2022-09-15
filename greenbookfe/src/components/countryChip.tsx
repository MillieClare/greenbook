import { Chip, Grid, Tooltip } from "@mui/material";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import { Colors } from "../styles/colors";
import { countryList } from "../utilities/countryList";
import Emoji from "./emoji";

type Props = {
  country: string;
  onClick?: () => void;
  selected?: boolean;
};

const CountryChip = ({ country, onClick, selected }: Props) => {
  const countryFlag =
    countryList.find((entry) => entry.name === country)?.flag || "🏳️‍🌈";

  return (
    <Tooltip
      title={
        selected
          ? `Remove ${country} filter`
          : `Filter by companies from ${country}`
      }
    >
      <Grid item>
        <Chip
          avatar={
            <div style={{ paddingLeft: 5 }}>
              <Emoji emoji={countryFlag} />
            </div>
          }
          label={country}
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
