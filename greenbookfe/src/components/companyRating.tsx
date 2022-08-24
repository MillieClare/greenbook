import React from "react";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import { Rating } from "@mui/material";
import { Colors } from "../styles/colors";

const CompanyRating = ({ rating }: { rating: number }) => {
  return (
    <Rating
      name="text-feedback"
      value={rating}
      readOnly
      precision={0.5}
      icon={
        <EnergySavingsLeafIcon
          style={{ color: Colors.green }}
          fontSize="inherit"
        />
      }
      emptyIcon={
        <EnergySavingsLeafIcon
          style={{ color: Colors.green, opacity: 0.55 }}
          fontSize="inherit"
        />
      }
    />
  );
};

export default CompanyRating;
