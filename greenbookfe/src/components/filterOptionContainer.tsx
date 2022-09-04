import { FilterAltRounded } from "@mui/icons-material";
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
  addFilter,
  removeFilter,
} from "../state/features/reports/reportsSlice";
import ButtonChip from "./buttonChip";
import FilterChip from "./filterChip";

const FilterOptionContainer = () => {
  const { countries, sectors, reviewers } = useAppSelector(
    availableFilterOptions
  );
  const filterConfiguration = useAppSelector(filterSettings);
  const dispatch = useAppDispatch();

  const handleCountryClick = (country: string) => {
    if (filterConfiguration.countries.includes(country)) {
      dispatch(removeFilter({ field: "country", value: country }));
    } else {
      dispatch(addFilter({ field: "country", value: country }));
    }
  };

  const handleSectorClick = (sector: string) => {
    if (filterConfiguration.sectors.includes(sector)) {
      dispatch(removeFilter({ field: "sector", value: sector }));
    } else {
      dispatch(addFilter({ field: "sector", value: sector }));
    }
  };

  const handleReviewerClick = (reviewer: string) => {
    if (filterConfiguration.reviewers.includes(reviewer)) {
      dispatch(removeFilter({ field: "reviewer", value: reviewer }));
    } else {
      dispatch(addFilter({ field: "reviewer", value: reviewer }));
    }
  };

  const clearFilter = (mode: string) => {
    dispatch(clearFilters({ field: mode }));
  };

  return (
    <Grid container style={{ padding: 15 }}>
      {countries ? (
        <>
          <Grid
            item
            style={{ paddingLeft: 15, paddingRight: 15, width: "100%" }}
          >
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
              {filterConfiguration.countries.length > 0
                ? "Filter By Countries"
                : "Filter By Country"}
            </Typography>
          </Grid>
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
                const selected =
                  filterConfiguration.countries.includes(country);
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
        </>
      ) : null}
      {sectors ? (
        <>
          <Grid
            item
            style={{ paddingLeft: 15, paddingRight: 15, width: "100%" }}
          >
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
              {filterConfiguration.sectors.length > 0
                ? "Filter By Sectors"
                : "Filter By Sector"}
            </Typography>
          </Grid>
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
              {sectors.map((sector: string, index: number) => {
                const selected = filterConfiguration.sectors.includes(sector);
                return (
                  <FilterChip
                    key={`${sector}_chip_${index}`}
                    onClick={() => {
                      handleSectorClick(sector);
                    }}
                    title={sector}
                    selected={selected}
                  />
                );
              })}
              {filterConfiguration.sectors.length > 0 ? (
                <ButtonChip
                  tooltip={"Clear filters"}
                  label={"Clear"}
                  clear
                  onClick={() => {
                    clearFilter("sector");
                  }}
                />
              ) : null}
            </Grid>
          </Grid>
        </>
      ) : null}
      {reviewers ? (
        <>
          <Grid
            item
            style={{ paddingLeft: 15, paddingRight: 15, width: "100%" }}
          >
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
              {filterConfiguration.reviewers.length > 0
                ? "Filter By Reviewers"
                : "Filter By Reviewer"}
            </Typography>
          </Grid>
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
              {reviewers.map((reviewer: string, index: number) => {
                const selected =
                  filterConfiguration.reviewers.includes(reviewer);
                return (
                  <FilterChip
                    key={`${reviewer}_chip_${index}`}
                    onClick={() => {
                      handleReviewerClick(reviewer);
                    }}
                    title={reviewer}
                    selected={selected}
                  />
                );
              })}
              {filterConfiguration.reviewers.length > 0 ? (
                <ButtonChip
                  tooltip={"Clear filters"}
                  label={"Clear"}
                  clear
                  onClick={() => {
                    clearFilter("reviewer");
                  }}
                />
              ) : null}
            </Grid>
          </Grid>
        </>
      ) : null}
    </Grid>
  );
};

export default FilterOptionContainer;
