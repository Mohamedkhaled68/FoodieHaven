import React from "react";
import Rating from "./Rating";
import { useCartStore } from "../store/cartStore";

const MealCard = ({ meal }) => {
    const { image, name, description, price } = meal;

    const { addItem } = useCartStore();
    return (
        <>
            <div className="max-w-[400px] || rounded-md || overflow-hidden || bg-white || shadow-lg || hover:translate-y-[2%] ease-in-out duration-300 || pb-2">
                <div className="w-full">
                    <img
                        className="object-cover || w-full h-full"
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="w-full || px-2 || flex flex-col gap-3">
                    <div className="flex justify-between items-center | pt-2">
                        <h2 className="text-2xl || font-zain font-semibold">
                            {name}
                        </h2>
                        <div>
                            <Rating />
                        </div>
                    </div>
                    <p className="text-base text-slate-500">{description}</p>
                    <div className="flex justify-between items-center">
                        <p className="text-accent text-xl || font-semibold">
                            {price} $
                        </p>
                        <button
                            className="bg-accent text-white px-2 py-1 rounded-md "
                            onClick={() => addItem(meal)}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MealCard;
