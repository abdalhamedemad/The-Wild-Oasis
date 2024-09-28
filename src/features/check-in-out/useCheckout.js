import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
export function useCheckout() {
  // queryClient is used to invalidate the booking query after a successful check-in
  // inorder to refetch the updated booking data
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: ({ bookingId }) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} has been checked out.`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("there was an error checking out the booking");
    },
  });
  return { checkout, isCheckingOut };
}
