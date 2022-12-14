import { Grid, Pagination } from "@mui/material";
import ReviewCard from "./reviewCard";

import { useAppSelector } from "./../state/hooks";
import {
  allReportGraphData,
  filteredReports,
} from "../state/features/reports/reportsSlice";
import NoResultsScreen from "./noResultsScreen";
import { useState } from "react";

const resultsPerPage = 21;

const ReportsContainer = () => {
  const reports = useAppSelector(filteredReports);
  const reportsGraphData = useAppSelector(allReportGraphData);
  const [page, setPage] = useState(1);

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (reports.length > 0 && reportsGraphData.length > 0) {
    return (
      <>
        <Grid container spacing={4}>
          {reports
            .slice(resultsPerPage * (page - 1), resultsPerPage * page)
            .map((entry: IReport, index: number) => {
              const {
                _id,
                companyName,
                country,
                reviewer,
                reviewLink,
                sector,
                marketInformationDate,
                marketInformationLink,
              } = entry;
              const companyInfo = reportsGraphData.find(
                (entry) => entry.companyName === companyName
              );
              const sentimentScore = Object.keys(
                companyInfo.topCompanyWords
              ).filter(
                (entry) => companyInfo.topCompanyWords[entry] >= 0.8
              ).length;
              return (
                <ReviewCard
                  _id={_id}
                  key={`Review_card_${index}`}
                  company={companyName}
                  country={country}
                  reviewLink={reviewLink}
                  reviewer={reviewer}
                  marketInformationDate={marketInformationDate}
                  marketInformationLink={marketInformationLink}
                  sector={sector}
                  sentimentScore={sentimentScore}
                />
              );
            })}
          {}
        </Grid>
        {reports.length > resultsPerPage ? (
          <Grid
            container
            style={{ width: "100%", paddingTop: 15 }}
            alignContent={"center"}
            alignItems={"center"}
            justifyContent={"center"}
            justifyItems={"center"}
          >
            <Pagination
              count={Math.floor(reports.length / resultsPerPage)}
              page={page}
              onChange={handlePaginationChange}
            />
          </Grid>
        ) : null}
      </>
    );
  } else {
    return (
      <Grid container alignItems={"space-between"} justifyContent={"center"}>
        <NoResultsScreen
          message={`There doesn't seem to be any results for that search!`}
        />
      </Grid>
    );
  }
};

export default ReportsContainer;
