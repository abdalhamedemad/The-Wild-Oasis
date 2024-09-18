import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  // queryFn must be a function that returns a promise or an async function
  const { isLoading, data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, settings };
}
