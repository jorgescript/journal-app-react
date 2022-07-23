import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="register" element={<RegisterPage />}></Route>
      <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
    </Routes>
  );
};
