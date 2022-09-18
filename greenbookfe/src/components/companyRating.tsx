import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import { Rating } from "@mui/material";
import React from "react";
import { Colors } from "../styles/colors";

const CompanyRating = ({ rating }: { rating: number }) => {
  return (
    <Rating
      name="text-feedback"
      value={rating + 1}
      readOnly
      precision={1}
      max={6}
      icon={
        <EnergySavingsLeafIcon
          style={{ color: Colors.darkGreen }}
          fontSize="inherit"
        />
      }
      emptyIcon={
        <EnergySavingsLeafIcon
          style={{ color: "#FFFFFF", opacity: 0 }}
          fontSize="inherit"
        />
      }
    />
  );
};

export default CompanyRating;
