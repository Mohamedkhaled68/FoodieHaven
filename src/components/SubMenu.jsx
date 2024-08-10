import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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
];

const SubMenu = () => {
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
                    {meals.map((meal) => (
                        <SwiperSlide key={meal.name}>
                            <div className="w-[130px] h-[130px] || rounded-full || flex justify-center items-center || bg-slate-400">
                                <p className="text-center">{meal.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default SubMenu;
