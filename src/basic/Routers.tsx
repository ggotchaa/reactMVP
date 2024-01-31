import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

import IdleLayout from "../layouts/IdleLayout";
import SchoolLayout from "../layouts/SchoolLayout";
import AdminLayout from "../layouts/AdminLayout";

import SchoolProfile from "../pages/Profile/SchoolProfile";
import HomePage from "../pages/Home/HomePage";
import AuthPage from "../pages/Auth/AuthPage";
import SchoolList from "../pages/SchoolList/SchoolList";
import SchoolDeclarations from "../pages/SchoolDeclarations/SchoolDeclarations";
import SchoolDeclarationCreate from "../pages/SchoolDeclarationCreate/SchoolDeclarationCreate";
import React from "react";

const ProtectedRoute: React.FC<{
  isAllowed: boolean;
  redirectPath?: string;
}> = ({ isAllowed, redirectPath = "/" }) => {
  const location = useLocation();

  if (!isAllowed)
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  else return <Outlet />;
};

const Routers: React.FC = () => {
  const {
    state: { isAuthorized, userRoles },
  } = useGlobalContext();

  const isSchool = isAuthorized && userRoles.includes("school");
  const isSuperAdmin = isAuthorized && userRoles.includes("super_admin");

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/auth/*" element={<IdleLayout />}>
        <Route index element={<AuthPage state={undefined} />} />
        <Route path="sign-in" element={<AuthPage state="login" />} />
        <Route path="sign-up" element={<AuthPage state="register" />} />
        <Route
          path="restore-password"
          element={<AuthPage state="passrecovery" />}
        />

        <Route
          element={
            <ProtectedRoute
              isAllowed={isAuthorized}
              redirectPath="/auth/sign-in"
            />
          }
        >
          <Route
            path="update-password"
            element={<AuthPage state="uppassword" />}
          />
        </Route>

        <Route path="*" element={<Navigate to="sign-in" replace />} />
      </Route>

      <Route 
      element={<ProtectedRoute isAllowed={isSchool} 
      redirectPath="/" />}>
        <Route path="/school/*" element={<SchoolLayout />}>
          <Route path="profile" element={<SchoolProfile />} />
          <Route path="schools" element={<SchoolList />} />
          <Route path="declarations" element={<SchoolDeclarations />} />
          <Route
            path="declarations/create"
            element={<SchoolDeclarationCreate />}
          />
          <Route path="notifications" element={<SchoolProfile />} />
          <Route path="financing" element={<SchoolProfile />} />
        </Route>
      </Route> 

      <Route
        element={<ProtectedRoute isAllowed={isSuperAdmin} redirectPath="/" />}
      >
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="declarations" element={<SchoolProfile />} />
          <Route path="management" />
          <Route path="users" />
          <Route path="roles" />
          <Route path="guide" />
          <Route path="settings" />

          <Route path="*" element={<Navigate to="profile" replace />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routers;
