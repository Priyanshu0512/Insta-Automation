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
      if (onSuccess) {
        onSuccess();
      }
      return toast(data?.status === 200 ? "Success" : "Error", {
        description: data.data,
      });
    },
    onError: (error) => {},
    onSettled: async () => {
      await client.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  console.log("Mutation Registered with Key:", mutationKey);

  return { isPending, mutate };
};

export const useMutationDataState = (mutationKey: MutationKey) => {
  const data = useMutationState({
    filters: { mutationKey, status: "success" },
    select: (mutation) => {
      return {
        variables: mutation.state.variables,
        status: mutation.state.status,
      };
    },
  });

  const latestVariable = data[data.length - 1];
  return latestVariable;
};
