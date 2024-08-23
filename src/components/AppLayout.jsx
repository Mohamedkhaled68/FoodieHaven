import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AppLayout = () => {
    return (
        <>
            <div className="container mx-auto px-0 pl-5 md:px-2">
                <Navbar />
            </div>

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: easeInOut }}
                className="container mx-auto px-4 md:px-2"
            >
                <Outlet />
            </motion.div>
        </>
    );
};

export default AppLayout;
