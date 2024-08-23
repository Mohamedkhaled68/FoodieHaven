import * as React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

export const NavItemSide = ({ path, title }) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <NavLink className="text-white font-anton text-4xl tracking-widest" to={path}>
                {title}
            </NavLink>
        </motion.li>
    );
};
