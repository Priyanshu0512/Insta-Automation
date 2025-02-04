import { useAutomationPosts } from "@/hooks/use-automations";
import { useQueryAutomationPosts } from "@/hooks/use-queries";
import React from "react";
import TriggerButton from "../trigger-button";
import { InstagramPostProp } from "@/types/posts.types";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ostring } from "zod";
import Loader from "../../loader";

type Props = {
  id: string;
};

export const PostButton = ({ id }: Props) => {
  const { data } = useQueryAutomationPosts();
  const { isPending, mutate, onSelectPost, posts } = useAutomationPosts(id);

  return (
    <TriggerButton label="Attach a Post.">
      {data?.status === 200 ? (
        <div className="flex flex-col gap-y-3 w-full">
          <div className="flex flex-wrap w-full gap-3">
            {data.data.data.map((post: InstagramPostProp) => (
              <div
                className="relative w-4/12 aspect-square rounded-lg cursor-pointer overflow-hidden"
                key={post.id}
                onClick={() => {
                  onSelectPost({
                    postid: post.id,
                    media: post.media_url,
                    caption: post.caption,
                    mediaType: post.media_type,
                  });
                }}
              >
                {posts.find((p) => p.postid === post.id) && (
                  <CheckCircle
                    fill="white"
                    stroke="black"
                    className="absolute top-1/2 left-1/2 transfomr -translate-x-1/2 -translate-y-1/2 z-50"
                  />
                )}
                <Image
                  fill
                  sizes="100vw"
                  src={post.media_url}
                  alt="post image"
                  className={
                    cn(
                      "hover:opacity-75 transistion duration-100",
                      posts.find((p) => p.postid === post.id)
                    ) && "opacity-75"
                  }
                />
              </div>
            ))}
          </div>
          <Button
            onClick={mutate}
            disabled={posts.length === 0}
            className="bg-gradient-to-br w-full from-[#3352CC] font-medium text-white to-[#1C2D70]"
          >
            <Loader state={isPending}>Attach a Post.</Loader>
          </Button>
        </div>
      ) : (
        <p className="text-text-secondary text-center">No Posts found.</p>
      )}
    </TriggerButton>
  );
};
