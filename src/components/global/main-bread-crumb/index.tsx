import { PAGE_ICON } from "@/constants/pages";
import React from "react";

type Props = {
  page: string;
  slug?: string;
};

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start">
      {page === "Home" && (
        <div className="flex justify-center w-full">
          <div className="radial--gradient w-4/12 py-5 lg:py-10 flex flex-col items-center ">
            <p className="text-text-secondary text-lg">Welcome Back</p>
            <h2 className="text-4xl capitalize font-medim">{slug}!</h2>
          </div>
        </div>
      )}
      <span className="radial-gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center">
        {PAGE_ICON[page.toUpperCase()]}
      </span>
    </div>
  );
};
export default MainBreadCrumb;
