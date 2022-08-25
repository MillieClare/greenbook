import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "../styles/colors";
import { search } from "../state/features/reports/reportsSlice";
import { useAppDispatch } from "../state/hooks";

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

const SearchBar = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const dispatch = useAppDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ searchTerm });
    setSearchTerm(event.target.value);
  };

  const handleOnFocus = React.useCallback(
    (ev?: React.FocusEvent<HTMLInputElement>) => {},
    []
  );

  const handleFocusEvent = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setSearchTerm("");
      dispatch(search(""));
    },
    [setSearchTerm]
  );

  const handleOnBlurEvent = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
      dispatch(search(event.target.value));
    },
    []
  );

  const handleOnKeyPressEvent = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        console.log("search ", searchTerm);
        dispatch(search(searchTerm));
      }
    },
    [searchTerm]
  );

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        ref={inputRef}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onFocus={handleFocusEvent}
        onBlur={handleOnBlurEvent}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyPressEvent}
        value={searchTerm}
      />
    </Search>
  );
};
export default SearchBar;
