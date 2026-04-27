import { QueryClient } from "@tanstack/react-query";

let client: QueryClient | null = null;

export function getQueryClient() {
  if (client) return client;
  client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,     // 5 minutes
        gcTime: 10 * 60 * 1000,       // 10 minutes
        retry: 2,
        refetchOnWindowFocus: false,
      },
    },
  });
  return client;
}
