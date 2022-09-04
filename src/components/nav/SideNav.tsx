import React from "react";
import { useLayoutState } from "../../layouts/context";

export const ApSideNav = () => {
  const { navOpen } = useLayoutState();
  return (
    <>{navOpen && <div className="w-1/5 border-r-zinc-200 border-r"></div>}</>
  );
};
