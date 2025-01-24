import React from "react";
import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
type Props = {
  trigger: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  side: "left" | "right";
};

export const Sheet = ({ trigger, className, children, side }: Props) => {
  return (
    <ShadcnSheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent className="p-0" side={side}>
        {children}
      </SheetContent>
    </ShadcnSheet>
  );
};
