import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const useJobs = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const {data }= await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useJobs;
