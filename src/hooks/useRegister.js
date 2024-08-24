import { useQuery } from "@tanstack/react-query";

const useGetMenuItems = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["register"],
        queryFn: async () => {
            
        },
    });

    return { data, error, isLoading };
};

export default useGetMenuItems;
