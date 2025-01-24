import React from "react";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Notification = () => {
  return (
    <Button className="bg-white rounded-full py-6">
      <Bell color="#3352CC" fill="#3352CC" />
    </Button>
  );
};
