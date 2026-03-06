import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layouts/Layout.jsx";
import Home from "../pages/Home.jsx";
import Network from "../pages/Network.jsx";
import Jobs from "../pages/Jobs.jsx";
import SalesNavigator from "../pages/SalesNavigator.jsx";
import Messaging from "../pages/Messaging.jsx";
import Notifications from "../pages/Notifications.jsx";
import Profile from "../pages/Profile.jsx";
import ProfileEdit from "../pages/ProfileEdit.jsx";

const UserRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "network", element: <Network /> },
        { path: "jobs", element: <Jobs /> },
        { path: "sales-navigator", element: <SalesNavigator /> },
        { path: "messaging", element: <Messaging /> },
        { path: "notifications", element: <Notifications /> },
        { path: "profile/:id?", element: <Profile /> },
        { path: "profile/edit", element: <ProfileEdit /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default UserRoutes;