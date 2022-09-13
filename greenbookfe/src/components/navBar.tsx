import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Typography,
  Chip,
} from "@mui/material";
import GreenBookLogo from "./greenBookLogo";
import { FilterAltRounded, FilterAltOffRounded } from "@mui/icons-material";
import { Colors } from "../styles/colors";
import SearchIcon from "@mui/icons-material/Search";
import FilterOptionContainer from "./filterOptionContainer";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import SearchBar from "./searchBar";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const NavBar = ({ hideFilters }: { hideFilters: boolean }) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = React.useState(false);
  const handleFilterPress = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#FFFFFF", paddingTop: 1 }}
      >
        <Toolbar>
          <GreenBookLogo />
          {hideFilters ? null : <SearchBar />}
          {hideFilters ? null : (
            <>
              <Chip
                icon={
                  isFilterMenuOpen ? (
                    <FilterAltOffRounded style={{ color: Colors.darkGreen }} />
                  ) : (
                    <FilterAltRounded style={{ color: Colors.darkGreen }} />
                  )
                }
                label={isFilterMenuOpen ? "Close Filters" : "Open Filters"}
                onClick={handleFilterPress}
                variant="outlined"
                sx={{
                  fontFamily: FontFamilies.Montserrat,
                  borderColor: "transparent",
                }}
              />
              <Chip
                icon={<AutoGraphIcon style={{ color: Colors.darkGreen }} />}
                variant="outlined"
                component="a"
                sx={{
                  fontFamily: FontFamilies.Montserrat,
                  borderColor: "transparent",
                }}
                href="/greenbook/sectors"
                label="Graphs"
                clickable
              />
            </>
          )}
        </Toolbar>
      </AppBar>
      {isFilterMenuOpen ? <FilterOptionContainer /> : null}
    </Box>
  );
};

export default NavBar;
