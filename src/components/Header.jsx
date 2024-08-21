import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const styles = {
        btns: "px-2 md:px-3 py-1 md:py-3 || w-[100px] md:w-[150px] || rounded-3xl || bg-white || border border-accent || text-slate-500 text-sm md:text-base text-center || font-semibold",
    };
    return (
        <>
            <div className="w-full max-h-[350px] md:min-h-[480px] || rounded-lg || relative || bg-header bg-cover bg-center || flex items-center || py-2 px-2 md:px-[2rem] lg:px-[5rem]">
                <div className="flex flex-col justify-center gap-3 md:gap-10 || text-white">
                    <h1 className="text-2xl md:text-6xl || font-semibold || md:w-[50%] || flex flex-col gap-5">
                        <span>Order your favorite</span> <span>food here</span>
                    </h1>
                    <p className="text-sm md:text-base || font-semibold || md:w-[60%]">
                        Choose from a diverse menu featuring a delectable array
                        of dishes crafted with the finest ingredients to satisfy
                        your cravings and elevate your dining experience, one
                        delicious meal at a time!
                    </p>
                    <Link to={"/menu"} className={styles.btns}>
                        View Menu
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
