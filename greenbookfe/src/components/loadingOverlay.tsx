import { useLottie } from "lottie-react";
import animation from "./../assets/animations/loadingSpinner.json";

const Animation = () => {
  const config = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(config);

  return <>{View}</>;
};

const LoadingOverlay = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        position: "fixed",
        backgroundColor: "#FFFFFF80",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100vh",
        overflowY: "scroll",
      }}
    >
      <Animation />
    </div>
  );
};

export default LoadingOverlay;
