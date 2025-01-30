import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { ActiveAutomation } from "@/icons/active-automation";

type Props = {};

export const ActivateAutomationButton = () => {
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-2 ">
      <Loader state={false}>
        <ActiveAutomation />
        <p className="lg:inline hidden">
          Activate
          {/* {data?.data?.active ? "Disable" : "Activate"} */}
        </p>
      </Loader>
    </Button>
  );
};
