import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "100%",
      maxWidth: 500,
    },
  },
};

const SectorFilterDropdown = ({
  words,
  filteredWords,
  onChange,
}: {
  words: string[];
  filteredWords: string[];
  onChange: (targetWords: any) => any;
}) => {
  const theme = useTheme();

  const getStyles = (word: string, theme: Theme) => {
    return {
      fontWeight:
        filteredWords.indexOf(word) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightBold,
    };
  };

  const handleChange = (event: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = event;

    let targetWords = typeof value === "string" ? value.split(",") : value;
    onChange(targetWords);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "100%", maxWidth: 500 }}>
        <InputLabel id="chip-filter-words-label">
          Filter by top words
        </InputLabel>
        <Select
          labelId="chip-filter-words-label"
          id="chip-filter-words"
          multiple
          value={filteredWords}
          onChange={handleChange}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label="Filter by top words"
            />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {words.map((word) => (
            <MenuItem key={word} value={word} style={getStyles(word, theme)}>
              {word}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SectorFilterDropdown;
