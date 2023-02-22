import Header from "@/components/layout/header";
import Menu from "@/components/layout/menu/menu";
import { useAuth } from "@/context/auth";
import { ROUTES } from "@/router";
import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, Suspense, useMemo } from "react";
import { Navigate, Outlet, useLocation, useRoutes } from "react-router-dom";

export const PrivateRoute = () => {
  const location = useLocation();

  let { user, loading } = useAuth();
  const navigation = useMemo(() => {
    return ROUTES.map(({ element, path }, index) => {
      return {
        element, path
      };
    });
  }, [location.pathname]);
  const element = useRoutes(navigation);
  const Loader = () => {
    return <div className="w-screen h-screen flex items-center justify-center">Loading...</div>
  }
  return (
    user ? (
      <Fragment>
        <Header />
        <div className="flex w-full min-h-[calc(100vh-64px)] ">
          <Menu className="hidden lg:block" idLayout="default-menu" />
          <Suspense fallback={<Loader />}>
            <AnimatePresence mode="wait" initial={false}>
              <div className="w-full bg-[#F7F7F7]">
                <motion.div
                  className="md:px-[32px] md:py-[40px] relative z-0 w-full max-w-[1440px] mx-auto md:overflow-auto min-h-[calc(100vh-64px)]"
                  key={location.pathname}
                >
                  {React.cloneElement(element as any, { key: location.pathname })}
                </motion.div>
              </div>
            </AnimatePresence>
          </Suspense>

        </div>
      </Fragment >
    ) : (
      <Navigate to="/login" />
    )
  )
};

export const PublicRouter = () => {
  let auth = useAuth();
  return !auth.user ? <Outlet /> : <Navigate to="/examples" />;
};
