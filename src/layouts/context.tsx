import React, { createContext, useState } from "react";

interface ILayoutState {
  navOpen: boolean;
  setNavState: () => void;
}

const LayoutContext = createContext<ILayoutState>({
  navOpen: true,
  setNavState() {},
});

export const useLayoutState = () => {
  const context = React.useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }
  return context;
};

interface IProps {
  children: React.ReactNode;
}

export const LayoutContextProvider: React.FC<IProps> = ({ children }) => {
  const [navOpen, setnavOpen] = useState(true);

  const setNavState = () => {
    setnavOpen(!navOpen);
    console.log(navOpen);
  };

  return (
    <LayoutContext.Provider value={{ navOpen, setNavState }}>
      {children}
    </LayoutContext.Provider>
  );
};
