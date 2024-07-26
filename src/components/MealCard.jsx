import React from "react";

const MealCard = ({ image, name, description, price }) => {
    return (
        <>
            <div className="w-[400px] md:w-[250px] lg:w-[300px] || rounded-md || overflow-hidden || bg-white || shadow-md || pb-2">
                <div className="w-full h-[60%]">
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
                        <span>rating</span>
                    </div>
                    <p className="text-base text-slate-500">{description}</p>
                    <p className="text-accent text-xl || font-semibold">
                        {price} $
                    </p>
                </div>
            </div>
        </>
    );
};

export default MealCard;
