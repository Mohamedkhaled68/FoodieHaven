import React from "react";
import { headerImg } from "../assets";
import { Link } from "react-router-dom";
const Header = () => {
    const styles = {
        btns: "px-2 md:px-3 py-1 md:py-3 || w-[100px] md:w-[150px] || rounded-3xl || bg-white || border border-accent || text-slate-500 text-sm md:text-base text-center || font-semibold",
    };
    return (
        <>
            <div className="w-full max-h-[350px] md:min-h-[450px] || rounded-lg || relative || bg-header bg-cover bg-center || flex items-center || py-2 px-4">
                <div className="flex flex-col justify-center gap-3 md:gap-10 || text-white">
                    <h1 className="text-2xl md:text-6xl || font-semibold || md:w-[50%]">
                        Order your favorite food here
                    </h1>
                    <p className="text-sm md:text-base || font-semibold || md:w-[70%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias sed, ipsa blanditiis consectetur explicabo
                        fuga esse. Doloremque incidunt suscipit officiis,
                        molestiae cum distinctio nemo praesentium inventore
                        nesciunt ducimus! Saepe veniam aperiam ducimus?
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
