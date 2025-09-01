import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/ErrorPage';
import authRoutes from "./routes/auth";
import sharedRoutes from "./routes/shared";
import { Toaster } from "sonner";

// 🔹 Fake static user (always authenticated)
const user = {
  id: 1,
  username: "admin",
  role: "admin",
  loginStatus: "authenticated"
};

// 🔹 Open routes that skip auth check
const openRoutes = [
  "/admin/users/list",
  "/settings/system-roles",
];

// 🔹 ProtectedRoute
const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  // ✅ If route is open, skip auth check
  if (openRoutes.includes(location.pathname)) {
    return children;
  }

  // 🔒 Otherwise require authentication
  if (!user || user?.loginStatus !== "authenticated") {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

// 🔹 Main App
const App = () => {
  return (
    <>
      <Toaster richColors position="top-right" expand={true} closeButton />

      <Routes>
        
        {authRoutes()}

        <Route element={<ProtectedRoute><RootLayout /></ProtectedRoute>}>

          {sharedRoutes()}

          <Route path="*" element={<ErrorPage />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;
