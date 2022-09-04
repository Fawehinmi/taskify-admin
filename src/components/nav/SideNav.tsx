import React from "react";
import { useLayoutState } from "../../layouts/context";

export const ApSideNav = () => {
  const { navOpen } = useLayoutState();
  return (
    <div>
      {navOpen && (
        <div className="logo flex">
          <img src="" alt="" />
          <p>Taskify</p>
        </div>
      )}
    </div>
  );
};
