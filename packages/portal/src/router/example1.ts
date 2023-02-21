import { AppRouter } from "@/types/Route";
import React from "react";

const examplePage = React.lazy(() => import("@/pages/example"));
const exampleCreatePage = React.lazy(() => import("@/pages/example/create"));
const exampleDetailPage = React.lazy(() => import("@/pages/example/detail"));

export const EXAMPLE1: AppRouter = {
  INDEX: {
    path: "/examples-1",
    text: "Examples 1",
    showMenu: true,
    icon: "/images/toast/warning-toast.png",
    element: examplePage,
    group: "Example",
  },
  CREATE: {
    path: "/examples-1/create",
    text: "Examples 1 create",
    showMenu: false,
    element: exampleCreatePage,
    group: "Example",
  },
  DETAIL: {
    path: "/examples-1/detail",
    text: "Examples 1 detail",
    showMenu: false,
    group: "Example",
    element: exampleDetailPage,
  },
};
const EXAMPLE1_ROUTES = Object.values(EXAMPLE1);
export default EXAMPLE1_ROUTES;
