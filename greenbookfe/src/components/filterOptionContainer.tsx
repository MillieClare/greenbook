// import { FilterAltRounded } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Colors } from "../styles/colors";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import CountryChip from "./countryChip";

import { useAppSelector, useAppDispatch } from "./../state/hooks";
import {
  availableFilterOptions,
  filterSettings,
  filterByCountry,
  clearFilters,
} from "../state/features/reports/reportsSlice";

const FilterOptionContainer = () => {
  const { countries } = useAppSelector(availableFilterOptions);
  const filterConfiguration = useAppSelector(filterSettings);
  const dispatch = useAppDispatch();

  const handleCountryClick = (country: string) => {
    console.log({ country });
    if (
      filterByCountry.filterConfiguration?.field === "country" &&
      filterConfiguration.value === country
    ) {
      dispatch(clearFilters());
    } else {
      dispatch(filterByCountry(country));
    }
  };

  return (
    <Grid container style={{ padding: 15 }}>
      <Grid item style={{ paddingLeft: 15, paddingRight: 15, width: "100%" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          fontFamily={FontFamilies.Barlow}
          color={Colors.dark}
          sx={{
            paddingBottom: 0,
            alignItems: "center",
            display: "flex",
            color: Colors.darkGreen,
          }}
        >
          {/* <FilterAltRounded style={{ color: Colors.darkGreen }} /> */}
          {"Filter By Country"}
        </Typography>
      </Grid>
      {countries ? (
        <Grid
          item
          style={{
            marginBottom: 15,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 15,
          }}
        >
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            rowSpacing={1}
            spacing={1}
          >
            {countries.map((country: string, index: number) => {
              const selected =
                filterConfiguration?.field === "country" &&
                filterConfiguration?.value === country;
              return (
                <CountryChip
                  key={`${country}_chip_${index}`}
                  onClick={() => {
                    handleCountryClick(country);
                  }}
                  country={country}
                  selected={selected}
                />
              );
            })}
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default FilterOptionContainer;
