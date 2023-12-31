import { useEffect, useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "./utils/functions";
import { Home, SignUp, Dashboard, Error } from "./utils/components";
import "./styles/global.css";

const MainRoutes = () => {
  const [dataAuth, setDataAuth] = useState({});

  const ProtectedRoutes = ({ condition, redirectTo }) => {
    return condition ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  let user = JSON.parse(localStorage.getItem(`${dataAuth.userKey}`));

  useEffect(() => {
    user = JSON.parse(localStorage.getItem(`${dataAuth.userKey}`));
  }, []);

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
          <Route path="/" element={<Home setDataAuth={setDataAuth} />} />
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
          <Route
            path="/dashboard"
            element={<Dashboard user={user} setDataAuth={setDataAuth} />}
          />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
