import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import Login from "../views/login";
import ErrorView from "../views/error-view";

const ArticleList = lazy(() => import("../views/article-list"));
const ArticleDetail = lazy(() => import("../views/article-detail"));
const Dashboard = lazy();

export const routeList = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorView />,
  },

  {
    path: "/user/login",
    element: <Login />,
    errorElement: <ErrorView />,
  },

  {
    path: ":username/article/list",
    element: <ArticleList />,
    errorElement: <ErrorView />,
  },

  {
    path: ":username/article/detail/:articleId",
    element: <ArticleDetail />,
    errorElement: <ErrorView />,
  },
  {
    path: "/dashboard",
    element: <ArticleDetail />,
    errorElement: <ErrorView />,
  },
];

const router = createBrowserRouter(routeList);

export default router;
