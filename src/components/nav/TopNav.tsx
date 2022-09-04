import React from "react";
import { useLayoutState } from "../../layouts/context";

import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export const ApTopNav = () => {
  const { setNavState } = useLayoutState();
  return (
    <div className="py-4 flex justify-between  border-b-gray-200  border-b px-5">
      <div
        onClick={setNavState}
        className="h-8 w-8 flex items-center justify-center rounded cursor-pointer border-gray-400 border"
      >
        <FaBars className="text-gray-400" />
      </div>

      <div className="flex gap-2 items-center">
        <CgProfile />
        <p>Emmanuel</p>
      </div>
    </div>
  );
};
