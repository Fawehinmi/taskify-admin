import React from "react";
import { useLayoutState } from "../../layouts/context";

export const ApTopNav = () => {
  const { setNavState } = useLayoutState();
  return (
    <div>
      <button onClick={setNavState}>CLose</button>
    </div>
  );
};
