import React from "react";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const Cart = () => {
    const { cart, getTotalPrice, removeItem } = useCartStore();
    const totalPrice = getTotalPrice();
    return (
        <>
            <div className="bg-slate-200 rounded-md px-5 py-8">
                <div className="flex justify-evenly items-center">
                    <div className="flex justify-center items-center gap-2 font-anton">
                        <h1 className="text-3xl font-bold tracking-widest">
                            Cart
                        </h1>
                        <span className="w-[25px] h-[25px] rounded-full bg-black flex justify-center items-center text-white p-1 ">
                            {cart.length}
                        </span>
                    </div>
                    <h1 className="text-2xl font-anton">
                        Total : {totalPrice}$
                    </h1>
                </div>
                <div className="flex flex-col pt-5">
                    {cart.length < 1 && (
                        <div className="w-full flex flex-col justify-center items-center font-zain py-8">
                            <p className="text-2xl tracking-wider text-center w-[90%] mx-auto">
                                Your cart is currently empty. Add some delicious
                                meals to get started!
                            </p>
                            <div className="">
                                <Link
                                    to={"/menu"}
                                    className="text-xl font-semibold flex items-center py-8 justify-center gap-1"
                                >
                                    Go to menu
                                    <HiArrowLongRight
                                        className="moving-element"
                                        size={32}
                                    />
                                </Link>
                            </div>
                        </div>
                    )}
                    {cart.map((meal) => (
                        <div
                            key={meal.id}
                            className="grid grid-cols-5 items-center gap-2 border-b border-slate-900 py-4 font-zain"
                        >
                            <div className="flex items-center gap-5 col-span-2">
                                <div className="w-[40%] rounded-md overflow-hidden">
                                    <img
                                        className="max-w-[100%] object-cover"
                                        src={meal.image}
                                        alt="pizza"
                                    />
                                </div>
                                <h1 className="text-2xl">{meal.name}</h1>
                            </div>

                            <div className="flex gap-2 items-center ">
                                <h2 className="text-xl font-semibold">
                                    Quantity :{" "}
                                </h2>
                                <div className="flex gap-2 items-center">
                                    <button className="w-[10px] h-[10px] rounded-full border border-black text-lg font-semibold flex justify-center items-center p-2">
                                        -
                                    </button>
                                    <span className="text-xl ">
                                        {meal.quantity}
                                    </span>
                                    <button className="w-[10px] h-[10px] rounded-full border border-black text-lg font-semibold flex justify-center items-center p-2">
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 ">
                                <h2 className="text-xl font-semibold">
                                    Total :{" "}
                                </h2>
                                <span className="text-lg font-semibold">
                                    {Number(meal.price) * meal.quantity}$
                                </span>
                            </div>

                            <div>
                                <button
                                    onClick={() => removeItem(meal.id)}
                                    className="text-white text-xl px-3 py-2 rounded-md bg-red-600"
                                >
                                    Remove from cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cart;
