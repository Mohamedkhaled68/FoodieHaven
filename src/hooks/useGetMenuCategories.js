import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetMenuCategories = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["menu-categories"],
        queryFn: async () => {
            const res = await axios.get(`src/utils/menuCategories.json`);
            return res.data;
        },
    });

    return { data, error, isLoading };
};

export default useGetMenuCategories;

// http://www.themealdb.com/api/json/v1/1/categories.php
