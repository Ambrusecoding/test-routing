import { Route, Routes } from "react-router-dom";
import { NavBar } from "../NavBar";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import RegisterPage from "../pages/registerPage";
import { PrivateRoute } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <PrivateRoute>
            <Route path="dashboard" element={<DashboardPage />} />
          </PrivateRoute>
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};
