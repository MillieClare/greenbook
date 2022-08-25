import { FilterAltRounded } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Colors } from "../styles/colors";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import CountryChip from "./countryChip";

import { useAppSelector, useAppDispatch } from "./../state/hooks";
import {
  availableFilterOptions,
  filterSettings,
  // filterByCountry,
  clearFilters,
  addFilter,
  removeFilter,
} from "../state/features/reports/reportsSlice";
import ButtonChip from "./buttonChip";

const FilterOptionContainer = () => {
  const { countries } = useAppSelector(availableFilterOptions);
  const filterConfiguration = useAppSelector(filterSettings);
  const dispatch = useAppDispatch();

  const handleCountryClick = (country: string) => {
    if (filterConfiguration.countries.includes(country)) {
      dispatch(removeFilter({ field: "country", value: country }));
    } else {
      dispatch(addFilter({ field: "country", value: country }));
    }
  };

  const clearFilter = (mode: string) => {
    if (mode === "country") {
      dispatch(clearFilters());
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
          <FilterAltRounded style={{ color: Colors.darkGreen }} />
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
              // const selected = filterConfiguration?.field === 'country' && filterConfiguration?.value === country;
              const selected = filterConfiguration.countries.includes(country);
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
            {filterConfiguration.countries.length > 0 ? (
              <ButtonChip
                tooltip={"Clear filters"}
                label={"Clear"}
                clear
                onClick={() => {
                  clearFilter("country");
                }}
              />
            ) : null}
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default FilterOptionContainer;
