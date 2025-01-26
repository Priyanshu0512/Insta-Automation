import { createAutomations } from "@/actions/automations";
import { useMutationData } from "./use-mutation-data";

export const useCreateAutomation = () => {
  const { isPending, mutate } = useMutationData(
    ["create-automation"], // Mutation key
    () => createAutomations(), // Mutation function
    "user-automations" // Query key for invalidation
  );

  return { isPending, mutate };
};
