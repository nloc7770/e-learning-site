import { AppRouter } from "@/types/Route";
import React from "react";

const examplePage = React.lazy(() => import("@/pages/example"));
const exampleCreatePage = React.lazy(() => import("@/pages/example/create"));
const exampleDetailPage = React.lazy(() => import("@/pages/example/detail"));

export const EXAMPLE: AppRouter = {
  INDEX: {
    path: "/examples",
    text: "Examples",
    showMenu: true,
    icon: "/images/toast/warning-toast.png",
    element: examplePage,
    group: "Example",
  },
  CREATE: {
    path: "/examples/create",
    text: "Examples create",
    showMenu: false,
    element: exampleCreatePage,
    group: "Example",
  },
  DETAIL: {
    path: "/examples/detail",
    text: "Examples detall",
    showMenu: false,
    group: "Example",
    element: exampleDetailPage,
  },
};
const EXAMPLE_ROUTES = Object.values(EXAMPLE);
export default EXAMPLE_ROUTES;
