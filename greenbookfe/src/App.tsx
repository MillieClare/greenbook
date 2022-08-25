import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/navBar";
import ContentContainer from "./components/contentContainer";
import ReportsContainer from "./components/reportsContainer";
import { useAppSelector } from "./state/hooks";
import { allReports } from "./state/features/reports/reportsSlice";
import LoadingScreen from "./components/loadingScreen";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ABD699",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

function App() {
  const reports = useAppSelector(allReports);

  return (
    <ThemeProvider theme={theme}>
      <NavBar hideFilters={reports.length === 0} />
      <ContentContainer backgroundFilled={false}>
        {reports && reports.length > 0 ? (
          <ReportsContainer />
        ) : (
          <LoadingScreen />
        )}
      </ContentContainer>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
      />
    </ThemeProvider>
  );
}

export default App;
