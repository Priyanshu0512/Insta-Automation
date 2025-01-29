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
      // console.log("Mutation Success:", data);
      if (onSuccess) {
        onSuccess();
      }
      return toast(data?.status === 200 ? "Success" : "Error", {
        description: data.data,
      });
    },
    onError: (error) => {
      // console.error("Mutation Error:", error);
    },
    onSettled: async () => {
      // console.log("Mutation Settled");
      await client.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  console.log("Mutation Registered with Key:", mutationKey);
  // console.log(`mutate ${mutate}`); // Log mutation registration

  return { isPending, mutate };
};

export const useMutationDataState = (mutationKey: MutationKey) => {
  const data = useMutationState({
    filters: { mutationKey, status: "success" }, // Add status filter
    select: (mutation) => {
      // console.log("Mutation State:", mutation.state); // Log mutation state
      return {
        variables: mutation.state.variables,
        status: mutation.state.status,
      };
    },
  });

  // console.log("Mutation State Data for Key:", mutationKey, data); // Log the data

  const latestVariable = data[data.length - 1];
  return latestVariable;
};
