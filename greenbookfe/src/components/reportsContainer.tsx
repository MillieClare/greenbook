import { Grid } from "@mui/material";
import ReviewCard from "./reviewCard";

import { useAppSelector } from "./../state/hooks";
import { filteredReports } from "../state/features/reports/reportsSlice";

const ReportsContainer = () => {
  const reports = useAppSelector(filteredReports);

  return (
    <Grid container spacing={4}>
      {reports.slice(0, 21).map((entry: IReport, index: number) => {
        const { companyName, country, reviewer, reviewLink, sector } = entry;
        const rating = (Math.floor(Math.random() * 11) + 1) / 2;
        return (
          <ReviewCard
            key={`Review_card_${index}`}
            company={companyName}
            country={country}
            link={reviewLink}
            reviewer={reviewer}
            rating={rating}
            sector={sector}
          />
        );
      })}
    </Grid>
  );
};

export default ReportsContainer;
