import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
import { CiShoppingCart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { Example } from "./Example";
import useCartStore from "../store/cartStore";

const Navbar = () => {
    const { cart } = useCartStore();

    const user = null;
    const styles = {
        btns: "px-3 py-1 || rounded-3xl || border border-accent || text-accent text-base || font-semibold || hover:bg-accent hover:text-white duration-300",
    };
    return (
        <>
            <nav className="relative">
                <div className="flex justify-between items-center || py-4 || md:px-0">
                    <Link
                        to={"/"}
                        className="text-2xl md:text-3xl text-accent || font-signika font-semibold"
                    >
                        FoodieHaven
                    </Link>
                    <ul className="hidden || md:flex items-center justify-between gap-6 || font-zain font-semibold || text-xl">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-accent transition duration-300 ease-in-out"
                                    : "border-b-0 transition duration-300 ease-in-out"
                            }
                            to={"/"}
                        >
                            <li>Home</li>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-accent transition duration-300 ease-in-out"
                                    : "border-b-0 transition duration-300 ease-in-out"
                            }
                            to={"/menu"}
                        >
                            <li>Menu</li>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-accent transition duration-300 ease-in-out"
                                    : "border-b-0 transition duration-300 ease-in-out"
                            }
                            to={"/profile"}
                        >
                            <li>Profile</li>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-accent transition duration-300 ease-in-out"
                                    : "border-b-0 transition duration-300 ease-in-out"
                            }
                            to={"/about"}
                        >
                            <li>About us</li>
                        </NavLink>
                    </ul>
                    <div className="hidden || md:flex justify-between items-center || gap-3">
                        <TfiSearch size={25} />
                        <Link
                            to={"/cart"}
                            className="cart || relative || cursor-pointer"
                        >
                            <CiShoppingCart size={30} />
                            {cart.length > 0 && (
                                <span className="absolute top-0 right-0 || w-[6px] h-[6px] || rounded-full || bg-red-600" />
                            )}
                        </Link>
                        {user ? (
                            <>
                                <div className="w-[40px] h-[40px] || rounded-full || flex justify-center items-center || hover:bg-[#f769277a] transition duration-300 || cursor-pointer">
                                    <FaUser size={25} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center gap-2">
                                    <Link
                                        to={"/register"}
                                        className={styles.btns}
                                    >
                                        Signup
                                    </Link>
                                    <Link className={styles.btns}>Login</Link>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="md:hidden bg-green-300 || cursor-pointer">
                        <Example />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
