import { AppRouter } from "@/types/Route";
import React from "react";

const ExamplePage = React.lazy(() => import("@/pages/example1"));
const ExampleCreatePage = React.lazy(() => import("@/pages/example1/create"));
const ExampleDetailPage = React.lazy(() => import("@/pages/example1/detail"));

export const EXAMPLE1: AppRouter = {
  INDEX: {
    path: "/examples-1",
    text: "Examples 1",
    showMenu: true,
    icon: "/images/toast/warning-toast.png",
    element: <ExamplePage />,
    group: "Example",
  },
  CREATE: {
    path: "/examples-1/create",
    text: "Examples 1 create",
    showMenu: false,
    element: <ExampleCreatePage />,
    group: "Example",
  },
  DETAIL: {
    path: "/examples-1/detail",
    text: "Examples 1 detail",
    showMenu: false,
    group: "Example",
    element: <ExampleDetailPage />,
  },
};
const EXAMPLE1_ROUTES = Object.values(EXAMPLE1);
export default EXAMPLE1_ROUTES;
