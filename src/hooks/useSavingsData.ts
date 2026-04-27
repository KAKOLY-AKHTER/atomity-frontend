import { useQuery } from "@tanstack/react-query";

export interface SavingRecommendation {
  id: number;
  title: string;
  description: string;
  savings: number;
}

export interface SavingsData {
  totalMonthlySavings: number;
  recommendations: SavingRecommendation[];
}

export function useSavingsData() {
  return useQuery<SavingsData>({
    queryKey: ["savings-data"],
    queryFn: async () => {
      // Simulating API call but returning the exact requested premium dataset
      await new Promise((resolve) => setTimeout(resolve, 800));

      const recommendations = [
        {
          id: 1,
          title: "Right-size Cluster Nodes",
          description: "Optimize instance types based on historical CPU/RAM usage patterns.",
          savings: 125,
        },
        {
          id: 2,
          title: "Terminate Orphaned Disks",
          description: "Identify and terminate unattached volumes across all active regions.",
          savings: 250,
        },
        {
          id: 3,
          title: "S3 Lifecycle Management",
          description: "Automatically migrate infrequent data to cold storage tiers.",
          savings: 187,
        },
        {
          id: 4,
          title: "Spot Instance Migration",
          description: "Move stateless workloads to spot instances for massive discounts.",
          savings: 162,
        },
      ];

      return {
        totalMonthlySavings: 724,
        recommendations,
      };
    },
    staleTime: 5 * 60 * 1000,
  });
}
