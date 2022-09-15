import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "./state/hooks";
import { loading } from "./state/features/reports/reportsSlice";
import LoadingOverlay from "./components/loadingOverlay";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sectors from "./pages/sectors";
import Company from "./pages/company";

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
  const isReportsLoading = useAppSelector(loading);

  return (
    <ThemeProvider theme={theme}>
      {isReportsLoading ? <LoadingOverlay /> : null}
      <Router>
        <Routes>
          <Route path="/greenbook" element={<Home />}></Route>
          <Route path="/greenbook/company/" element={<Home />}></Route>
          <Route path="/greenbook/company/:id" element={<Company />}></Route>
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
