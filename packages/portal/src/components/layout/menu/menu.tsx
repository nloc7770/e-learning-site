import { ROUTES } from "@/router";
import { AppRoute, GroupName } from '@/types/Route';
import { motion } from "framer-motion";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const Wrap = ({ children, ...props }: any) => {
  return <Link {...props}> {children}</Link>;
};
const Menu = ({ className, idLayout }: any) => {
  const location = useLocation();
  const navigation = useMemo(() => {
    return ROUTES.filter((route) => route.showMenu).reduce((routes, route) => {
      return {
        ...routes,
        [route.group || 'Others']: [...(routes[route.group!] || []), route]
      };
    }, {} as { [key in GroupName]: AppRoute[] });
  }, []);

  const menuItems = useMemo(() => {
    return Object.entries(navigation).map(([groupName, routes], index) => {
      return {
        groupName: groupName,
        groupKey: index + "groupName",
        children: routes.map((child) => ({ label: child.text, key: index + "link", to: child.path, icon: child.icon }))
      };
    });
  }, [navigation]);

  return (
    <div
      className={
        "h-[calc(100vh-64px)] min-w-[260px] px-4 py-7 bg-base relative z-[10] md:sticky md:top-[64px] " +
        className
      }>
      {menuItems.map(({ groupKey, groupName, children }, index) => {
        return (
          <div key={groupKey}>
            <div className="h-full relative z-1 flex items-center">
              <p className="whitespace-nowrap font-semibold	">
                {groupName}
              </p>
            </div>
            {children.map((m, index) => {
              return <Wrap to={m.to} key={index + "link"}>
                <div
                  className={
                    "px-4 py-2 mb-2 relative transition-color duration-200 " +
                    (location.pathname === m.to
                      ? " text-royal-blue"
                      : "text-white")
                  }>
                  {location.pathname === m.to && (
                    <motion.span
                      layoutId={idLayout || "menu-nav-desktop"}
                      className="absolute top-0 left-0 h-full w-full bg-light-base rounded-xl text-white"></motion.span>
                  )}
                  <div className="h-full relative z-1 flex items-center">
                    <img src={m.icon} className="w-8" alt="" />
                    <p className="ml-2 whitespace-nowrap caption-1-highlight md:headline-4">
                      {m.label}
                    </p>
                  </div>
                </div>
              </Wrap>
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
