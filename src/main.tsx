import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import "./styles/reset.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>加载中...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
