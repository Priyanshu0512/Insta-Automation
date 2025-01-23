import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const layout = ({ children, params }: Props) => {
  return <div className="flex justify-center">{children}</div>;
};

export default layout;
