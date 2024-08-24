import React from "react";
import useGetMenuItems from "../hooks/useGetMenuItems";
import MealCard from "../components/MealCard";
import { Loading } from "../components";

const Menu = () => {
    const { data, isLoading } = useGetMenuItems();
    return (
        <>
            <h1 className="text-4xl text-center text-accent font-anton tracking-widest font-bold py-8">
                Menu
            </h1>

            {!isLoading ? (
                data?.map((cate) => {
                    return (
                        <div
                            key={cate.category}
                            className="border-y border-slate-400 py-4 "
                        >
                            <h1 className="text-center text-2xl font-anton">
                                {cate.category}
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-5 || py-[2rem]">
                                {cate.meals.map((meal) => {
                                    return (
                                        <MealCard key={meal.id} meal={meal} />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Menu;
