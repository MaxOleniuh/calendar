import React from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import Event from "../pages/Event";
import Login from "../pages/Login";

const AppRouter = () => {
  const auth = false;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
        <Route path="*" Component={Event} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
        <Route path="*" Component={Login} />
    </Routes>
  );
};

export default AppRouter;
