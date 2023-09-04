import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import EditTransaction from "./components/EditTransactionModal";
import AddTransaction from "./components/AddTransactionModal";
import EditProfile from "./components/EditProfileModal";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/edit/:id" element={<EditTransaction />} />
        <Route path="/dashboard/add" element={<AddTransaction />} />
        <Route path="/dashboard/edit-profile" element={<EditProfile />} />
      </Routes>
    </>
  );
};

export default MainRoutes;