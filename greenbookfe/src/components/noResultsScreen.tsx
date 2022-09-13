import { Typography, Grid } from "@mui/material";
import { FontFamilies } from "../styles/fonts/fontFamilies";
import { Colors } from "./../styles/colors";
import { useLottie } from "lottie-react";
import loadingAnimation from "./../assets/animations/loadingAnimation.json";
import emptyAnimation from "./../assets/animations/emptyAnimation.json";

const LoadingAnimation = () => {
  const config = {
    animationData: loadingAnimation,
    loop: true,
  };

  const { View } = useLottie(config);

  return <>{View}</>;
};

const EmptyAnimation = () => {
  const config = {
    animationData: emptyAnimation,
    loop: true,
    style: { height: 350 },
  };

  const { View } = useLottie(config);

  return <>{View}</>;
};

const NoResultsScreen = ({
  message,
  loading = true,
}: {
  message: string;
  loading?: boolean;
}) => {
  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      <Grid item xs={12} md={12} justifyContent={"center"} alignSelf={"center"}>
        {loading ? <LoadingAnimation /> : <EmptyAnimation />}
        <Typography
          variant="h6"
          textAlign={"center"}
          fontFamily={FontFamilies.Montserrat}
          fontWeight={"bold"}
          color={Colors.darkGreen}
        >
          Hmmm
        </Typography>
        <Typography
          variant="body1"
          textAlign={"center"}
          fontStyle={"italic"}
          fontFamily={FontFamilies.Barlow}
          color={Colors.darkGreen}
        >
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NoResultsScreen;
