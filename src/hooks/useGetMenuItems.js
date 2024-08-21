import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../utils/constants/baseUrl";

const useGetMenuItems = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["menu-items"],
        queryFn: async () => {
            const res = await axios.get(
                `http://www.themealdb.com/api/json/v1/1/categories.php

`,

                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        apiKey: "d1221e4c203d471998716cd6378ae956",
                    },
                }
            );
            return res.data;
        },
    });

    return { data, error, isLoading };
};

export default useGetMenuItems;
