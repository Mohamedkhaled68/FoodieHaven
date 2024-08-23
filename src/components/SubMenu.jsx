import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import useGetMenuCategories from "../hooks/useGetMenuCategories";

const SubMenu = () => {
    const { data: m, error, isLoading } = useGetMenuCategories();
    return (
        <>
            <div className="py-[2rem] || border-b  border-slate-400">
                <h1 className="text-3xl || font-signika font-semibold || mb-5">
                    Explore our Menu
                </h1>
                <p className="text-lg || font-zain font-semibold || w-[70%] || mb-5">
                    Choose from a diverse menu featuring a delectable array of
                    dishes crafted with the finest ingredients to satisfy your
                    cravings and elevate your dining experience, one delicious
                    meal at a time!
                </p>
                {isLoading ? (
                    <h1>Loading ...</h1>
                ) : (
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        breakpoints={{
                            200: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            400: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            600: {
                                slidesPerView: 4,
                                spaceBetween: 18,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 10,
                            },
                        }}
                        className="mySwiper || flex items-center justify-around || cursor-grab"
                    >
                        {m?.categories.map((meal) => (
                            <SwiperSlide key={meal.idCategory}>
                                <div className="max-w-[170px] max-h-[170px] p-1 bouncing-element p-5 border border-accent rounded-full flex flex-col items-center gap-1 group hover:bg-accent duration-300 ease-in-out my-3">
                                    <div className="w-[100%] relative">
                                        <img
                                            className="max-w-[100%] object-cover "
                                            src={meal.strCategoryThumb}
                                            alt={meal.strCategory}
                                        />
                                    </div>
                                    <p className="text-center text-base lg:text-lg text-signika font-semibold group-hover:text-white duration-500 ease-in-out">
                                        {meal.strCategory}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </>
    );
};

export default SubMenu;
