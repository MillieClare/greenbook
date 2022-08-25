import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, IconButton, InputBase } from "@mui/material";
import GreenBookLogo from "./greenBookLogo";
import { FilterAltRounded } from "@mui/icons-material";
import { Colors } from "../styles/colors";
import SearchIcon from "@mui/icons-material/Search";
import FilterOptionContainer from "./filterOptionContainer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(Colors.darkGreen, 1),
  color: "#FFFFFF",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavBar = () => {
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton onClick={handleFilterPress}>
            <FilterAltRounded style={{ color: Colors.darkGreen }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {isFilterMenuOpen ? <FilterOptionContainer /> : null}
    </Box>
  );
};

export default NavBar;
