import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./../../store";
import MockData from "./../../../mockData";

import { toast } from "react-toastify";
import { getCountryString } from "../../../utilities/countryFormat";

export interface ReportsState {
  value: number;
  allReports: any[];
  filteredReports: any[];
  filterOptions: { countries?: string[]; sectors?: []; reviewers?: [] };
  filterSettings?: { field?: string; value?: string };
}

interface IFilterOption {
  [key: string]: any;
}

const OFilterOptions: IFilterOption = {
  countries: Array.from(new Set(MockData.map((report: any) => report.country))),
  sectors: Array.from(new Set(MockData.map((report: any) => report.sector))),
  reviewers: Array.from(
    new Set(MockData.map((report: any) => report.reviewer))
  ),
};

const initialState: ReportsState = {
  value: 0,
  allReports: MockData,
  filteredReports: MockData,
  filterOptions: OFilterOptions,
  filterSettings: {},
};

export const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    filterByCountry: (state, action: PayloadAction<string>) => {
      toast(`Reports from ${getCountryString(action.payload)}`);
      state.filterSettings = { field: "country", value: action.payload };
      state.filteredReports = state.allReports.filter(
        (entry) => entry.country === action.payload
      );
    },
    clearFilters: (state) => {
      state.filterSettings = {};
      state.filteredReports = state.allReports;
    },
  },
});

export const { filterByCountry, clearFilters } = reportsSlice.actions;

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
