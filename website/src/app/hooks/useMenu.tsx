'use client';

import { createContext, useContext, useState } from 'react';

type Menu = {
  root: string;
  child?: string;
};

const MenuContext = createContext({
  activeMenu: { root: 'home' },
  setActiveMenu: ({ root, child }: Menu) => {},
});

export const MenuProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [activeMenu, setActiveMenu] = useState<Menu>({ root: 'home' });
  return <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>{children}</MenuContext.Provider>;
};

export const useMenu = () => useContext(MenuContext);
