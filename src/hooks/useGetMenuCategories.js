import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetMenuCategories = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["menu-items"],
        queryFn: async () => {
            const res = await axios.get(
                `http://www.themealdb.com/api/json/v1/1/categories.php`
            );
            return res.data;
        },
    });

    return { data, error, isLoading };
};

export default useGetMenuCategories;
