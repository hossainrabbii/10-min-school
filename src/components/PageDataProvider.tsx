"use client";

import { PageDataContext } from "@/app/context/PageDataContext";

export default function PageDataProvider({
  children,
  pageData,
}: {
  children: React.ReactNode;
  pageData: any;
}) {
  return (
    <PageDataContext.Provider value={pageData}>
      {children}
    </PageDataContext.Provider>
  );
}
