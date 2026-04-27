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

const CATEGORIES = [
  { 
    title: "Right-size Cluster Nodes", 
    desc: "Scale down underutilized EC2 and GKE nodes based on historical usage patterns." 
  },
  { 
    title: "Terminate Orphaned Disks", 
    desc: "Identify and delete unattached EBS volumes and snapshots across regions." 
  },
  { 
    title: "S3 Lifecycle Management", 
    desc: "Migrate infrequently accessed objects to Glacier or Infrequent Access tiers." 
  },
  { 
    title: "Spot Instance Migration", 
    desc: "Move non-critical stateless workloads to Spot instances for up to 90% savings." 
  }
];

export function useSavingsData() {
  return useQuery<SavingsData>({
    queryKey: ["savings-data"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/products?limit=4");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();

      const recommendations = data.products.map((product: any, index: number) => ({
        id: product.id,
        title: CATEGORIES[index].title,
        description: CATEGORIES[index].desc,
        savings: Math.round(product.price * 12.5), // Realistic enterprise values
      }));

      const totalMonthlySavings = recommendations.reduce(
        (acc: number, rec: any) => acc + rec.savings, 
        0
      );

      return {
        totalMonthlySavings,
        recommendations,
      };
    },
    staleTime: 5 * 60 * 1000,
  });
}
