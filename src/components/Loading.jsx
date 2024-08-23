import React from "react";
import { burger } from "../assets";

const Loading = () => {
    return (
        <>
            <div className="min-h-[55svh] flex justify-center items-center">
                <div className="flex flex-col items-center gap-2">
                    <div className="loading-icon-animate w-[8vw]">
                        <img
                            className="max-w-[100%] object-cover"
                            src={burger}
                            alt="burder"
                        />
                    </div>
                    <div className="loader">
                        <h1 className="tracking-widest text-accent text-3xl font-anton">
                            Loading<span className="dots"></span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
