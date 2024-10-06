import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";
export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUploading } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User Updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred. Please try again." + error.message);
    },
  });

  return { updateUser, isUploading };
}
