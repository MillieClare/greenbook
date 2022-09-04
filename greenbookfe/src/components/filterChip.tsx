import { Chip, Grid, Tooltip } from "@mui/material";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import { Colors } from "../styles/colors";

type Props = {
  title: string;
  onClick?: () => void;
  selected?: boolean;
};

const FilterChip = ({ title, onClick, selected }: Props) => {
  return (
    <Tooltip
      title={
        selected ? `Remove ${title} filter` : `Filter companies by ${title}`
      }
    >
      <Grid item>
        <Chip
          label={title}
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

export default FilterChip;
