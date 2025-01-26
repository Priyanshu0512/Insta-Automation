"use server";

import { client } from "@/lib/prisma";

export const updateIntegration = async (
  id: string,
  expire: Date,
  token: string
) => {
  return await client.integrations.update({
    where: {
      id,
    },
    data: {
      token,
      expiresAt: expire,
    },
  });
};
