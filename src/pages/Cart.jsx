import React from "react";
import { pizza } from "../assets";

const Cart = () => {
    return (
        <>
            <div className="bg-slate-200 rounded-md px-5 py-8">
                <div className="flex justify-center items-center gap-2">
                    <h1 className="text-2xl font-bold">Cart</h1>
                    <span className="w-[25px] h-[25px] rounded-full bg-black flex justify-center items-center text-white p-1 ">
                        0
                    </span>
                </div>
                <div className="flex flex-col pt-5">
                    <div className="flex items-center gap-5 border-b border-slate-900 pb-2">
                        <div className="flex items-center gap-5 flex-1">
                            <div className="w-[30%] rounded-md overflow-hidden">
                                <img
                                    className="max-w-[100%] object-cover"
                                    src={pizza}
                                    alt="pizza"
                                />
                            </div>
                            <h1 className="text-2xl">Pizza</h1>
                        </div>
                        <div className="flex gap-2 items-center flex-1">
                            <h2 className="text-xl font-semibold">
                                Quantity :{" "}
                            </h2>
                            <div className="flex gap-2 items-center">
                                <button className="w-[10px] h-[10px] rounded-full border border-black text-lg font-semibold flex justify-center items-center p-2">
                                    -
                                </button>
                                <span className="text-xl ">1</span>
                                <button className="w-[10px] h-[10px] rounded-full border border-black text-lg font-semibold flex justify-center items-center p-2">
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 flex-1">
                            <h2 className="text-xl font-semibold">Total : </h2>
                            <span className="text-lg font-semibold">200</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
