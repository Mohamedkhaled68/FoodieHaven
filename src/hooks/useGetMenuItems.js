import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetMenuItems = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["menu-items"],
        queryFn: async () => {
            const res = await axios.get(`src/utils/menu.json`);
            return res.data;
        },
    });

    return { data, error, isLoading };
};

export default useGetMenuItems;
