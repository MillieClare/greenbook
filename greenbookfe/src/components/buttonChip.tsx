import { Chip, Grid, Tooltip } from "@mui/material";
// import { FontFamilies } from "../../styles/fonts/fontFamilies";
import { FontFamilies } from "../styles/fonts/fontFamilies";

type Props = {
  label: string;
  tooltip: string;
  onClick?: () => void;
  clear?: boolean;
};

const ButtonChip = ({ label, onClick, tooltip, clear }: Props) => {
  return (
    <Tooltip title={tooltip}>
      <Grid item>
        {clear ? (
          <Chip
            label={label}
            onDelete={onClick}
            sx={{ fontFamily: FontFamilies.Montserrat }}
          />
        ) : (
          <Chip
            label={label}
            onClick={onClick}
            sx={{ fontFamily: FontFamilies.Montserrat }}
          />
        )}
      </Grid>
    </Tooltip>
  );
};

export default ButtonChip;
