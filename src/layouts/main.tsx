import React, { useState } from "react";
import { ApSideNav } from "../components";
import { ApTopNav } from "../components/nav/TopNav";
import { LayoutContextProvider } from "./context";

interface IProps {
  children: any;
}

export const ApMainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <LayoutContextProvider>
      <div className="w-screen h-screen flex">
        <ApSideNav />
        <ApTopNav />
        <div className="h-full overflow-y-scroll">{children}</div>
      </div>
    </LayoutContextProvider>
  );
};
