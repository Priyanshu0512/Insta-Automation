import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";
import React from "react";

type Props = {
  state: boolean;
  className?: String;
  color?: string;
  children: React.ReactNode;
};

const Loader = ({ state, className, color, children }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
};

export default Loader;
