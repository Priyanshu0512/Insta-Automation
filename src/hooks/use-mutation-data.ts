import {
  MutationFunction,
  MutationKey,
  useMutation,
  useMutationState,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useMutationData = (
  mutationKey: MutationKey,
  mutationFn: MutationFunction<any, any>,
  queryKey?: string,
  onSuccess?: () => void
) => {
  const client = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data) => {
      if (onSuccess) onSuccess();
      return toast(data?.status === 200 ? "Success" : "Error", {
        description: data.data,
      });
    },
    onSettled: async () => {
      console.log(`Invalidating query with key: ${queryKey}`);
      if (queryKey) await client.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  return { isPending, mutate };
};
export const useMutationDataState = (mutationKey: MutationKey) => {
  console.log("Checking mutation state for key:", mutationKey);

  const data = useMutationState({
    filters: { mutationKey },
    select: (mutation: { state: { variables: any; status: string } }) => {
      console.log("Selected mutation state:", mutation.state);
      return {
        variables: mutation.state.variables as any,
        status: mutation.state.status,
      };
    },
  });

  console.log("Full mutation state data:", data);

  const latestVariable =
    data && data.length > 0 ? data[data.length - 1] : undefined;
  console.log("Latest Variable:", latestVariable);

  return { latestVariable };
};
