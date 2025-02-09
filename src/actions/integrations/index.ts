"use server";

import { redirect } from "next/navigation";

type Props = {
  strategy: "INSTAGRAM" | "CRM";
};

export const onOAuthInstagram = ({ strategy }: Props) => {
  if (strategy === "INSTAGRAM")
    redirect(process.env.INSTAGRAM_EMBEDDED_OAUTH_URL as string);
};
