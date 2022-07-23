import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* LOGIN ROUTES */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* JOURNAL ROUTES */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
