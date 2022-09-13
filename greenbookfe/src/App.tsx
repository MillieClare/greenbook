import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/navBar";
import ContentContainer from "./components/contentContainer";
import ReportsContainer from "./components/reportsContainer";
import { useAppSelector } from "./state/hooks";
import { allReports, loading } from "./state/features/reports/reportsSlice";
import LoadingScreen from "./components/loadingScreen";
import LoadingOverlay from "./components/loadingOverlay";
import RadarChart from "./components/charts/radarChart";
import RadarChartContainer from "./components/radarChartContainer";
import SectorRadarChartContainer from "./components/sectorRadarChartContainer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sectors from "./pages/sectors";

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

export default function App() {
  // const reports = useAppSelector(allReports);
  const isReportsLoading = useAppSelector(loading);

  return (
    <ThemeProvider theme={theme}>
      {/* <NavBar hideFilters={reports.length === 0} /> */}
      {isReportsLoading ? <LoadingOverlay /> : null}
      <Router>
        <Routes>
          <Route path="/greenbook" element={<Home />}></Route>
          <Route path="/greenbook/sectors" element={<Sectors />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
        />
      </Router>
    </ThemeProvider>
  );
}
