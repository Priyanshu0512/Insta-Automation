import { ChevronRight, PencilIcon, PencilOffIcon } from "lucide-react";
import React from "react";
import { ActivateAutomationButton } from "../../activate-automation-button";

type Props = {
  id: string;
};

export const AutomationBreadCrumb = ({ id }: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-[#181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9A9BC0 truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9A9BC0" />
        <span className="flex gap-x-3 items-center min-w-0">
          <p className="text-[#9A9BC0] truncate">
            This is the automation title.
          </p>
          <span className="cursor-pointer hover:opacity-80 duration-100 transistion flex-shrink-0 mr-4">
            <PencilIcon size={14} />
          </span>
        </span>
      </div>
      <div className="flex gap-x-5 items-center ml-auto">
        <p className="text-text-secondary/60 text-sm truncate min-w-0 hidden md:block">
          All updates are automatically synced.
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};
