"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegration } from "../integrations/queries";

export const onCurrentUser = async () => {
  const user = await currentUser();
  if (!user) {
    return redirect("/sign-in");
  }
  return user;
};

export const onBoardUser = async () => {
  const user = await onCurrentUser();
  try {
    const found = await findUser(user.id);
    if (found) {
      if (found.integrations.length > 0) {
        const curr = new Date();
        const time_left =
          found.integrations[0].expiresAt?.getDate()! - curr.getTime();
        const days = Math.round(time_left / (24 * 1000 * 3600));
        if (days < 5) {
          const refresh = await refreshToken(found.integrations[0].token);
          const today = new Date();
          const expire_date = today.setDate(today.getDate() + 60);
          const update_token = await updateIntegration(
            found.integrations[0].id,
            new Date(expire_date),
            refresh.access_token
          );
          if (!update_token) {
            console.log("Update token failed");
          }
        }
      }
      return {
        status: 200,
        data: {
          firstname: found.firstname,
          lastname: found.lastname,
        },
      };
    }
    const created = await createUser(
      user.id,
      user.firstName!,
      user.lastName!,
      user.emailAddresses[0].emailAddress
    );
    return {
      status: 201,
      data: created,
    };
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
};

export const onUserInfo = async () => {
  const user = await onCurrentUser();
  try {
    const profile = findUser(user.id);
    if (profile) {
      return { status: 200, data: profile };
    }
    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};
