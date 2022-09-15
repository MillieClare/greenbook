import { Typography, Grid } from "@mui/material";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import { Colors } from "./../styles/colors";
import { useEffect } from "react";

import { useAppDispatch } from "./../state/hooks";
import {
  getAllCompaniesAsync,
  getAllReportGraphDataAsync,
  getAllSectorGraphDataAsync,
} from "../state/features/reports/reportsSlice";

import { useLottie } from "lottie-react";
import animation from "./../assets/animations/loadingAnimation.json";

const Animation = () => {
  const config = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(config);

  return <>{View}</>;
};

const LoadingScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCompaniesAsync());
    dispatch(getAllSectorGraphDataAsync());
    dispatch(getAllReportGraphDataAsync());
  }, []);

  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      <Grid item xs={12} md={12} justifyContent={"center"} alignSelf={"center"}>
        <Animation />
        <Typography
          variant="h6"
          textAlign={"center"}
          fontFamily={FontFamilies.Montserrat}
          fontWeight={"bold"}
          color={Colors.darkGreen}
        >
          Loading
        </Typography>
        <Typography
          variant="body1"
          textAlign={"center"}
          fontStyle={"italic"}
          fontFamily={FontFamilies.Barlow}
          color={Colors.darkGreen}
        >
          Hang tight, it'll only be a moment
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoadingScreen;
