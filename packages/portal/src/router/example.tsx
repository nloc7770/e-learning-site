import { AppRouter } from "@/types/Route";
import React from "react";

const ExamplePage = React.lazy(() => import("@/pages/example"));
const ExampleCreatePage = React.lazy(() => import("@/pages/example/create"));
const ExampleDetailPage = React.lazy(() => import("@/pages/example/detail"));

export const EXAMPLE: AppRouter = {
  INDEX: {
    path: "/examples",
    text: "Examples",
    showMenu: true,
    icon: "/images/toast/warning-toast.png",
    element: <ExamplePage />,
    group: "Example",
  },
  CREATE: {
    path: "/examples/create",
    text: "Examples create",
    showMenu: false,
    element: <ExampleCreatePage />,
    group: "Example",
  },
  DETAIL: {
    path: "/examples/detail",
    text: "Examples detall",
    showMenu: false,
    group: "Example",
    element: <ExampleDetailPage />,
  },
};
const EXAMPLE_ROUTES = Object.values(EXAMPLE);
export default EXAMPLE_ROUTES;
