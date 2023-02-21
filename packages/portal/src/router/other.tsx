import { AppRouter } from "@/types/Route";
import React from "react";

const OtherPage = React.lazy(() => import("@/pages/other"));
const OtherCreatePage = React.lazy(() => import("@/pages/other/create"));
const OtherDetailPage = React.lazy(() => import("@/pages/other/detail"));

export const OTHER: AppRouter = {
  INDEX: {
    path: "/others-1",
    text: "Other 1",
    showMenu: true,
    icon: "/images/toast/warning-toast.png",
    element: <OtherPage />,
    group: "Others",
  },
  CREATE: {
    path: "/others-1/create",
    text: "Other 1 create",
    showMenu: false,
    element: <OtherCreatePage />,
    group: "Others",
  },
  DETAIL: {
    path: "/others-1/detail",
    text: "Other 1 detail",
    showMenu: false,
    group: "Others",
    element: <OtherDetailPage />,
  },
};
const OTHER_ROUTES = Object.values(OTHER);
export default OTHER_ROUTES;
