import { useQuery } from "@tanstack/react-query";

const useHook = () => {
  const {data,isLoading,refetch} = useQuery({
    queryKey:["jobs"],
    queryFn:async () =>{
        const res = await fetch("http://localhost:5000/jobs");
        const data = await res.json();
        return data;
    }
  })
}

export default useHook