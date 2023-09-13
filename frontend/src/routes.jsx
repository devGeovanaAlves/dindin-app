import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import EditTransaction from "./components/EditTransactionModal";
import AddTransaction from "./components/AddTransactionModal";
import EditProfile from "./components/EditProfileModal";
import { useEffect, useState } from "react";

const MainRoutes = () => {
  const [dataAuth, setDataAuth] = useState({});

  const handleDataAuth = (childObj) => {
    setDataAuth(childObj);
  };

  const isAuthenticated = ({ userPass, formPass }) => {
    return userPass && formPass && userPass === formPass ? true : false;
  };

  const ProtectedRoutes = ({ condition, redirectTo }) => {
    return condition ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  return (
    <>
      <Routes>
        <Route
          element={
            <ProtectedRoutes
              condition={!isAuthenticated(dataAuth)}
              redirectTo={"/dashboard"}
            />
          }
        >
          <Route path="/" element={<Home handleDataAuth={handleDataAuth} />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route
          element={
            <ProtectedRoutes
              condition={isAuthenticated(dataAuth)}
              redirectTo={"/"}
            />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/edit/:id" element={<EditTransaction />} />
          <Route path="/dashboard/add" element={<AddTransaction />} />
          <Route path="/dashboard/edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
