import { AppRouter } from "@/types/Route";
import React from "react";

const otherPage = React.lazy(() => import("@/pages/other"));
const otherCreatePage = React.lazy(() => import("@/pages/other/create"));
const otherDetailPage = React.lazy(() => import("@/pages/other/detail"));

export const OTHER: AppRouter = {
  INDEX: {
    path: "/others-1",
    text: "Other 1",
    showMenu: true,
    icon: "/images/toast/warning-toast.png",
    element: otherPage,
    group: "Others",
  },
  CREATE: {
    path: "/others-1/create",
    text: "Other 1 create",
    showMenu: false,
    element: otherCreatePage,
    group: "Others",
  },
  DETAIL: {
    path: "/others-1/detail",
    text: "Other 1 detail",
    showMenu: false,
    group: "Others",
    element: otherDetailPage,
  },
};
const OTHER_ROUTES = Object.values(OTHER);
export default OTHER_ROUTES;
