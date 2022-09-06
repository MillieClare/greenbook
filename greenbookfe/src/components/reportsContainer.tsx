import { Grid, Pagination, Typography } from "@mui/material";
import ReviewCard from "./reviewCard";

import { useAppSelector } from "./../state/hooks";
import { filteredReports } from "../state/features/reports/reportsSlice";
import NoResultsScreen from "./noResultsScreen";
import { useState } from "react";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import { Colors } from "../styles/colors";

const resultsPerPage = 21;

const ReportsContainer = () => {
  const reports = useAppSelector(filteredReports);
  const [page, setPage] = useState(0);

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (reports.length > 0) {
    return (
      <>
        <Grid container spacing={4}>
          {reports
            .slice(resultsPerPage * page, resultsPerPage * (page + 1))
            .map((entry: IReport, index: number) => {
              const {
                companyName,
                country,
                reviewer,
                reviewLink,
                sector,
                marketInformationDate,
                marketInformationLink,
                sentimentScore,
              } = entry;
              return (
                <ReviewCard
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
        <NoResultsScreen />
      </Grid>
    );
  }
};

export default ReportsContainer;
