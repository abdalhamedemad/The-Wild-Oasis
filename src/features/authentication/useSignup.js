import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        `Account successfully created! Please verify your email address.`
      );
    },
    onError: (error) => {
      console.error("Failed to create account: ", error);
      toast.error("Failed to create account: ");
    },
  });

  return { signup, isLoading };
}
