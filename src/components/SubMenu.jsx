import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import useGetMenuItems from "../hooks/useGetMenuItems";
import useGetMenuCategories from "../hooks/useGetMenuCategories";

const meals = [
    {
        name: "Spaghetti Bolognese",
        ingredients: [
            "spaghetti",
            "ground beef",
            "tomato sauce",
            "onions",
            "garlic",
            "olive oil",
            "parmesan cheese",
        ],
        description:
            "A classic Italian pasta dish made with a rich and savory meat sauce.",
    },
    {
        name: "Chicken Caesar Salad",
        ingredients: [
            "chicken breast",
            "romaine lettuce",
            "Caesar dressing",
            "croutons",
            "parmesan cheese",
            "lemon juice",
        ],
        description:
            "A fresh and crisp salad topped with grilled chicken, Caesar dressing, and crunchy croutons.",
    },
    {
        name: "Beef Tacos",
        ingredients: [
            "ground beef",
            "taco shells",
            "lettuce",
            "tomatoes",
            "cheddar cheese",
            "sour cream",
            "taco seasoning",
        ],
        description:
            "Delicious and flavorful beef tacos served with fresh toppings and cheese.",
    },
    {
        name: "Vegetable Stir-Fry",
        ingredients: [
            "broccoli",
            "bell peppers",
            "carrots",
            "snap peas",
            "soy sauce",
            "garlic",
            "ginger",
            "olive oil",
        ],
        description:
            "A healthy and vibrant stir-fry made with fresh vegetables and a savory sauce.",
    },
    {
        name: "Margherita Pizza",
        ingredients: [
            "pizza dough",
            "tomato sauce",
            "mozzarella cheese",
            "basil",
            "olive oil",
            "salt",
        ],
        description:
            "A simple and classic pizza topped with fresh tomatoes, mozzarella, and basil.",
    },
    {
        name: "Grilled Salmon",
        ingredients: [
            "salmon fillets",
            "lemon",
            "garlic",
            "olive oil",
            "dill",
            "salt",
            "pepper",
        ],
        description:
            "Tender and flavorful salmon fillets grilled to perfection and seasoned with lemon and herbs.",
    },
    {
        name: "Pancakes",
        ingredients: [
            "flour",
            "milk",
            "eggs",
            "baking powder",
            "sugar",
            "butter",
            "maple syrup",
        ],
        description:
            "Fluffy and delicious pancakes served with butter and maple syrup.",
    },
    {
        name: "Chicken Alfredo",
        ingredients: [
            "fettuccine",
            "chicken breast",
            "heavy cream",
            "parmesan cheese",
            "garlic",
            "butter",
            "parsley",
        ],
        description:
            "A creamy pasta dish made with tender chicken and rich Alfredo sauce.",
    },
    {
        name: "Shrimp Scampi",
        ingredients: [
            "shrimp",
            "garlic",
            "butter",
            "lemon juice",
            "white wine",
            "parsley",
            "angel hair pasta",
        ],
        description:
            "A classic Italian-American dish with shrimp cooked in a garlic butter sauce and served over pasta.",
    },
    {
        name: "Beef Stew",
        ingredients: [
            "beef chunks",
            "potatoes",
            "carrots",
            "onions",
            "celery",
            "beef broth",
            "tomato paste",
        ],
        description:
            "A hearty and comforting stew made with tender beef and vegetables simmered in a rich broth.",
    },
    {
        name: "Greek Salad",
        ingredients: [
            "cucumbers",
            "tomatoes",
            "red onions",
            "olives",
            "feta cheese",
            "olive oil",
            "oregano",
        ],
        description:
            "A fresh and vibrant salad featuring traditional Greek ingredients and a simple olive oil dressing.",
    },
];

const SubMenu = () => {
    const { data: m, error, isLoading } = useGetMenuCategories();

    console.log(m);

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
                        slidesPerView={8}
                        breakpoints={{
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 8,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper || flex items-center justify-around || cursor-grab"
                    >
                        {m.categories.map((meal) => (
                            <SwiperSlide key={meal.idCategory}>
                                <div className="w-[130px] h-[130px] || relative || rounded-full || flex justify-center items-center || bg-slate-400">
                                    <p className="text-center">
                                        {meal.strCategory}
                                    </p>
                                    <img
                                        className="absolute top-0 left-0 max-w-[100%] object-cover"
                                        src={meal.strCategoryThumb}
                                        alt={meal.strCategory}
                                    />
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
