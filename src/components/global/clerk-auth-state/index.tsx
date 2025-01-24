import React from "react";
import {
  SignedIn,
  SignedOut,
  ClerkLoading,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { User } from "lucide-react";
import Loader from "../loader";
import { Button } from "@/components/ui/button";

const ClerkAuthState = () => {
  return (
    <>
      <ClerkLoading>
        <Loader state>
          <></>
        </Loader>
      </ClerkLoading>
      <SignedOut>
        <SignInButton>
          <Button
            className="rounded-xl
          bg-[#252525]
          text-white
          hover-bg-[#252525]/70"
          >
            <User />
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <UserButton.UserProfileLink
            url={"/dashboard"}
            label="Dashboard"
            labelIcon={<User size={16} />}
          />
        </UserButton>
      </SignedIn>
    </>
  );
};

export default ClerkAuthState;
