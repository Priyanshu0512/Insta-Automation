import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center">
      Layout
      {children}
    </div>
  );
};

export default Layout;
