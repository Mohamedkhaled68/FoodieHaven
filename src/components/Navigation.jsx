import * as React from "react";
import { motion } from "framer-motion";
import { NavItemSide } from "./NavItemSide";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const paths = [
    {
        path: "/home",
        pathTitle: "Home",
    },
    {
        path: "/menu",
        pathTitle: "Menu",
    },
    {
        path: "/cart",
        pathTitle: "Cart",
    },
    {
        path: "/profile",
        pathTitle: "Profile",
    },
];

export const Navigation = ({ toggle }) => (
    <motion.ul className="exact-ul" variants={variants}>
        {itemIds.map((i) => (
            <NavItemSide
                path={paths[i].path}
                title={paths[i].pathTitle}
                toggle={toggle}
                key={i}
            />
        ))}
    </motion.ul>
);

const itemIds = [0, 1, 2, 3];
