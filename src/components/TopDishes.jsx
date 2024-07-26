import React from "react";
import MealCard from "./MealCard";
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
        image: "https://www.tasteofhome.com/wp-content/uploads/0001/01/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b.jpg",
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
        image: "https://www.tasteofhome.com/wp-content/uploads/0001/01/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b.jpg",
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
        image: "https://www.tasteofhome.com/wp-content/uploads/0001/01/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b.jpg",
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
        image: "https://www.tasteofhome.com/wp-content/uploads/0001/01/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b.jpg",
    },
];

const TopDishes = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5 || py-[2rem]">
                {meals.map((meal) => (
                    <MealCard key={meal.name} {...meal} />
                ))}
            </div>
        </>
    );
};

export default TopDishes;
