"use client";

import { createContext, useContext } from "react";

export const PageDataContext = createContext<any>(null);

export const usePageData = () => {
  const context = useContext(PageDataContext);
  if (!context) {
    throw new Error("usePageData must be used within a PageDataProvider");
  }
  return context;
};
