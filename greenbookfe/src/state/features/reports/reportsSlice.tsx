import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./../../store";
import MockData from "./../../../mockData";

import { toast } from "react-toastify";
import { getCountryString } from "../../../utilities/countryFormat";
import getAllCompanies from "../../requests/getAllCompanies";

import { fetchAllCompanies } from "./reportsAPI";

export interface ReportsState {
  value: number;
  allReports: IReport[];
  filteredReports: IReport[];
  filterOptions: { countries?: string[]; sectors?: []; reviewers?: [] };
  filterSettings: {
    countries: string[];
    sectors: string[];
    reviewers: string[];
  };
  loading: boolean;
  status?: string;
}

interface IFilterOption {
  [key: string]: any;
}

const initialState: ReportsState = {
  value: 0,
  loading: false,
  allReports: [],
  filteredReports: [],
  filterOptions: { countries: [], sectors: [], reviewers: [] },
  filterSettings: { countries: [], sectors: [], reviewers: [] },
};

export const getAllCompaniesAsync = createAsyncThunk(
  "reports/fetchAllCompanies",
  async () => {
    const response = await fetchAllCompanies();
    // The value we return becomes the `fulfilled` action payload
    return response.companies;
  }
);

export const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    filterByCountry: (state, action: PayloadAction<string>) => {
      toast(`Reports from ${getCountryString(action.payload)}`);
      // state.filterSettings = { field: 'country', value: action.payload }
      state.filteredReports = state.allReports.filter(
        (entry) => entry.country === action.payload
      );
    },
    clearFilters: (state, action: PayloadAction<object>) => {
      const { field } = action.payload as { field: string };

      let filteredData = state.allReports;
      let filterVariables = state.filterSettings;

      const { countries, sectors, reviewers } = state.filterSettings;
      if (!state.loading) {
        state.loading = true;
        switch (field) {
          case "country":
            filterVariables.countries = [];
            if (sectors.length > 0 && reviewers.length > 0) {
              filteredData = filteredData.filter(
                (entry) =>
                  filterVariables.sectors.includes(entry.sector as string) &&
                  filterVariables.reviewers.includes(entry.reviewer as string)
              );
            } else if (sectors.length > 0 && reviewers.length === 0) {
              filteredData = filteredData.filter((entry) =>
                filterVariables.sectors.includes(entry.sector as string)
              );
            } else if (sectors.length === 0 && reviewers.length > 0) {
              filteredData = filteredData.filter((entry) =>
                filterVariables.reviewers.includes(entry.reviewer as string)
              );
            }
            break;
          case "sector":
            filterVariables.sectors = [];
            if (countries.length > 0 && reviewers.length > 0) {
              filteredData = filteredData.filter(
                (entry) =>
                  filterVariables.countries.includes(entry.country as string) &&
                  filterVariables.reviewers.includes(entry.reviewer as string)
              );
            } else if (countries.length > 0 && reviewers.length === 0) {
              filteredData = filteredData.filter((entry) =>
                filterVariables.countries.includes(entry.country as string)
              );
            } else if (countries.length === 0 && reviewers.length > 0) {
              filteredData = filteredData.filter((entry) =>
                filterVariables.reviewers.includes(entry.reviewer as string)
              );
            }
            break;
          case "reviewer":
            filterVariables.reviewers = [];
            if (countries.length > 0 && sectors.length > 0) {
              filteredData = filteredData.filter(
                (entry) =>
                  filterVariables.countries.includes(entry.country as string) &&
                  filterVariables.sectors.includes(entry.sector as string)
              );
            } else if (countries.length > 0 && sectors.length === 0) {
              filteredData = filteredData.filter((entry) =>
                filterVariables.countries.includes(entry.country as string)
              );
            } else if (countries.length === 0 && sectors.length > 0) {
              filteredData = filteredData.filter((entry) =>
                filterVariables.sectors.includes(entry.sector as string)
              );
            }
            break;
          default:
            break;
        }

        state.filterSettings = filterVariables;
        state.filteredReports = filteredData;
        state.loading = false;
      }
    },
    search: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const searchResults = state.allReports.filter((entry) =>
        entry.companyName.match(payload.toUpperCase())
      );
      state.filterSettings = { countries: [], sectors: [], reviewers: [] };
      state.filteredReports = searchResults;
    },
    addFilter: (state, action: PayloadAction<object>) => {
      const filterVariables = state.filterSettings;
      const { field, value } = action.payload as {
        field: string;
        value: string;
      };

      if (!state.loading) {
        state.loading = true;

        switch (field) {
          case "country":
            filterVariables.countries.push(value);
            break;
          case "sector":
            filterVariables.sectors.push(value);
            break;
          case "reviewer":
            filterVariables.reviewers.push(value);
            break;
          default:
            break;
        }
        let filteredData = state.allReports;

        if (filterVariables.countries.length > 0) {
          filteredData = filteredData.filter((entry) =>
            filterVariables.countries.includes(entry.country as string)
          );
        }
        if (filterVariables.sectors.length > 0) {
          filteredData = filteredData.filter((entry) =>
            filterVariables.sectors.includes(entry.sector as string)
          );
        }
        if (filterVariables.reviewers.length > 0) {
          filteredData = filteredData.filter((entry) =>
            filterVariables.reviewers.includes(entry.reviewer as string)
          );
        }

        state.filteredReports = filteredData;
        state.loading = false;
      }
    },
    removeFilter: (state, action: PayloadAction<object>) => {
      const filterVariables = state.filterSettings;
      const { field, value } = action.payload as {
        field: string;
        value: string;
      };

      if (!state.loading) {
        state.loading = true;

        switch (field) {
          case "country":
            filterVariables.countries = filterVariables.countries.filter(
              (entry) => entry !== value
            );
            break;
          case "sector":
            filterVariables.sectors = filterVariables.sectors.filter(
              (entry) => entry !== value
            );
            break;
          case "reviewer":
            filterVariables.reviewers = filterVariables.reviewers.filter(
              (entry) => entry !== value
            );
            break;
          default:
            break;
        }

        let filteredData = state.allReports;

        if (filterVariables.countries.length > 0) {
          filteredData = filteredData.filter((entry) =>
            filterVariables.countries.includes(entry.country as string)
          );
        }
        if (filterVariables.sectors.length > 0) {
          filteredData = filteredData.filter((entry) =>
            filterVariables.sectors.includes(entry.sector as string)
          );
        }
        if (filterVariables.reviewers.length > 0) {
          filteredData = filteredData.filter((entry) =>
            filterVariables.reviewers.includes(entry.reviewer as string)
          );
        }

        state.filterSettings = filterVariables;
        state.filteredReports = filteredData;
        state.loading = false;
      }
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getAllCompaniesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCompaniesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.allReports = action.payload;
        const filterOptions = {
          countries: Array.from(
            new Set(action.payload.map((report: any) => report.country.trim()))
          ) as [],
          sectors: Array.from(
            new Set(action.payload.map((report: any) => report.sector.trim()))
          ) as [],
          reviewers: Array.from(
            new Set(action.payload.map((report: any) => report.reviewer.trim()))
          ) as [],
        };
        console.log(filterOptions.countries);
        state.filterOptions = filterOptions;
        state.filteredReports = action.payload;
      })
      .addCase(getAllCompaniesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  filterByCountry,
  clearFilters,
  search,
  addFilter,
  removeFilter,
} = reportsSlice.actions;

export const loading = (state: RootState) => state.reports.loading;
export const allReports = (state: RootState) => state.reports.allReports;
export const filteredReports = (state: RootState) =>
  state.reports.filteredReports;
export const availableFilterOptions = (state: RootState) =>
  state.reports.filterOptions;
export const filterOptions = (state: RootState) => state.reports.filterOptions;
export const filterSettings = (state: RootState) =>
  state.reports.filterSettings;

export const setCountryFilter =
  (country: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(filterByCountry(country));
  };

export default reportsSlice.reducer;
