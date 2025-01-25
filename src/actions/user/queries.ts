"use server";

import { client } from "@/lib/prisma";
import { UserPlus } from "lucide-react";

export const findUser = async (clerkId: string) => {
  const user = await client.user.findUnique({
    where: {
      id: clerkId,
    },
    include: {
      subscription: true,
      integrations: {
        select: {
          id: true,
          token: true,
          expiresAt: true,
          name: true,
        },
      },
    },
  });
  return user;
};
