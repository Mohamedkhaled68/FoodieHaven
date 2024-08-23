import React from "react";
import MealCard from "./MealCard";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
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
        price: "20",
        description:
            "A classic Italian pasta dish made with a rich and savory meat sauce.",
        image: "https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        price: "20",
        description:
            "A fresh and crisp salad topped with grilled chicken, Caesar dressing",
        image: "https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        price: "20",
        description:
            "A healthy and vibrant stir-fry made with fresh vegetables and a savory sauce.",
        image: "https://images.pexels.com/photos/15797950/pexels-photo-15797950/free-photo-of-stir-fry-chicken-with-southern-chili-paste-and-preserved-bamboo-shoot-in-a-bowl-on-a-white-isolated-background-thai-food-top-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Stir-Fry",
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
        price: "20",
        description:
            "A healthy and vibrant stir-fry made with fresh vegetables and a savory sauce.",
        image: "https://images.pexels.com/photos/17321104/pexels-photo-17321104/free-photo-of-a-person-holding-a-fork-with-a-piece-of-food.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

const TopDishes = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5 || py-[2rem]">
                {meals.map((meal) => (
                    <MealCard key={meal.name} {...meal} />
                ))}
                <div className="max-w-[400px] w-fit">
                    <Link
                        to={"/menu"}
                        className="text-xl font-semibold flex items-center py-8 justify-center h-full gap-1"
                    >
                        View all menu
                        <HiArrowLongRight
                            className="moving-element"
                            size={32}
                        />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TopDishes;
