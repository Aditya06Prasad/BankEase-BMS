import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Transfer from "../pages/Transfer";
import Accounts from "../pages/Accounts";
import Transactions from "../pages/Transactions";
import Settings from "../pages/Settings";

const AppRoutes = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard setIsAuthenticated={setIsAuthenticated} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/accounts"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Accounts setIsAuthenticated={setIsAuthenticated} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transfer"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Transfer setIsAuthenticated={setIsAuthenticated} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transactions"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Transactions setIsAuthenticated={setIsAuthenticated} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Settings setIsAuthenticated={setIsAuthenticated} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
