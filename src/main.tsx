import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/root.tsx";
import Theme from "./assets/theme.ts";
import { Global } from "@emotion/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={Theme()} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
