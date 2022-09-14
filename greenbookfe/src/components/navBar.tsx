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
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";

const NavBar = ({ hideFilters }: { hideFilters: boolean }) => {
  const [graphMenuAnchorEl, setGraphMenuAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const graphMenuOpen = Boolean(graphMenuAnchorEl);
  const handleGraphMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setGraphMenuAnchorEl(event.currentTarget);
  };
  const handleGraphMenuClose = () => {
    setGraphMenuAnchorEl(null);
  };
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
                // component="a"
                sx={{
                  fontFamily: FontFamilies.Montserrat,
                  borderColor: "transparent",
                }}
                // href="/greenbook/sectors"
                onClick={handleGraphMenuClick}
                label="Graphs"
                clickable
              />
              <Menu
                anchorEl={graphMenuAnchorEl}
                id="account-menu"
                open={graphMenuOpen}
                onClose={handleGraphMenuClose}
                onClick={handleGraphMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem component={Link} to="/greenbook/companies">
                  <ListItemIcon>
                    <GroupWorkIcon
                      fontSize="medium"
                      style={{ color: Colors.darkGreen }}
                    />
                  </ListItemIcon>
                  Companies
                </MenuItem>
                <MenuItem component={Link} to="/greenbook/sectors">
                  <ListItemIcon>
                    <WorkIcon
                      fontSize="medium"
                      style={{ color: Colors.darkGreen }}
                    />
                  </ListItemIcon>
                  Sectors
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
      {isFilterMenuOpen ? <FilterOptionContainer /> : null}
    </Box>
  );
};

export default NavBar;
