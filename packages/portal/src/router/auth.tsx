import { useAuth } from "@/context/auth";
import { Spin } from "antd";
import { useState } from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";
// import Menu from "@/components/layouts/menu";
// import { AnimatePresence, motion } from "framer-motion";
// import Home from "../pages/home";
// import Calendar from "../pages/calendar";
// import BookingTable from "../components/booking-list";
// import { itemVariants } from "@/services/motion";
import { useSwipeable } from "react-swipeable";
// const BookingTable = lazy(() => import('@/components/booking-list'))
// const Calendar = lazy(() => import('../pages/calendar'))
// const BookingHistory = lazy(() => import('../pages/booking-history'))
// const Home = lazy(() => import('../pages/home'))



export const PrivateRoute = () => {
  const [menu, setMenu] = useState<boolean>(false)

  let { user, loading } = useAuth();

  //   const element = useRoutes([
  //     { path: "/", element: <Home /> },
  //     { path: "/calendar", element: <Calendar /> },
  //     { path: "/booking-history", element: <BookingHistory /> },
  //     { path: "/course-booking", element: <BookingTable /> },
  //   ]);
  const location = useLocation();
  const handlers = useSwipeable({
    onSwiped: (data: any) => {
      if (data.dir === "Right") {
        setMenu(true)
      }
    }
  })
  return (
    loading ? <Spin /> :
      user ? (
        <div>
          {/* <Header /> */}
          <div className="flex w-full min-h-[calc(100vh-64px)] " {...handlers}>
            {/* //     //         <Menu className="hidden lg:block" idLayout="default-menu" />
      //     //           <AnimatePresence mode="wait" initial={false}>
      //     //             <div className="w-full bg-[#F7F7F7]">
      //     //               <motion.div
      //     //                 variants={itemVariants}
      //     //                 exit="hidden"
      //     //                 initial="hidden"
      //     //                 animate="visible"
      //     //                 className="md:px-[32px] md:py-[40px] relative z-0 w-full max-w-[1440px] mx-auto md:overflow-auto min-h-[calc(100vh-64px)]"
      //     //                 key={location.pathname}
      //     //               >
      //     //                 {React.cloneElement(element as any, { key: location.pathname })}
      //     //               </motion.div>
      //     //             </div>
      //     //           </AnimatePresence>
      //     //         </Suspense> */}
          </div>

        </div >

      ) : (
        <Navigate to="/login" />
      )
  )
};

export const PublicRouter = () => {
  let auth = useAuth();
  return !auth.isLogged ? <Outlet /> : <Navigate to="/" />;
};
