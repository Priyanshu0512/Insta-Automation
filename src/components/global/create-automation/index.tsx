"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { AutomationDuoToneWhite } from "@/icons";
import { useCreateAutomation } from "@/hooks/use-automations";

type Props = {};

const CreateAutomation = () => {
  const { isPending, mutate } = useCreateAutomation();
  return (
    <Button
      className="lg-px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white
  rounded-full from-[#3352CC] to-[#1C2D70] font-medium"
      onClick={mutate}
    >
      <Loader state={isPending}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
