import React, { useState } from "react";
import { ApSideNav } from "../components";

import { ApTopNav } from "../components/nav/TopNav";
import { LayoutContextProvider, useLayoutState } from "./context";

interface IProps {
  children: any;
}

export const ApMainLayout: React.FC<IProps> = ({ children }) => {
  const { navOpen } = useLayoutState();
  return (
    <div className="w-screen h-screen flex">
      <ApSideNav />

      <div
        className={`h-full ${navOpen ? "w-4/5" : "w-full"} overflow-y-scroll `}
      >
        <ApTopNav />
        {children}
      </div>
    </div>
  );
};
