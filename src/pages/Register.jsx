import React from "react";
import { motion } from "framer-motion";
import { icon } from "../assets";

const styles = {
    inputs: "outline-none border border-slate-300 px-2 py-2 rounded-md text-lg font-zain",
    labels: "text-lg font-signika m-2",
};

const Register = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-yellow-200 flex justify-center items-center px-12 relative">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                        x: "-30rem", // Increased animation distance
                        opacity: 1,
                        transition: { duration: 1, delay: 0.7 }, // Increased duration
                    }}
                    className="w-[300px] h-[300px] p-3 z-0 bg-red-600 absolute rounded-md"
                    style={{
                        top: "25%",
                        left: "50%",
                        transform: "translate(-50%, -50%)", // Centering the div
                    }}
                >
                    <div className="bg-white flex flex-col h-full rounded-md p-5">
                        <div className="w-[40%] mx-auto p-4">
                            <img
                                className="max-w-full object-cover"
                                src={icon}
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-zain text-center">
                                Welcome Bitch
                            </h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{
                        x: "20rem", // Increased animation distance
                        transition: { duration: 1, delay: 0.5 }, // Increased duration
                    }}
                    className="rounded-lg min-w-[300px] max-w-[400px] bg-white border border-slate-500 shadow-lg p-3 z-10"
                >
                    <h1 className="text-2xl font-signika text-center py-4">
                        Register
                    </h1>
                    <form className="flex flex-col">
                        <div className="flex items-center gap-4">
                            <div className="formGroup">
                                <label
                                    className={styles.labels}
                                    htmlFor="firstName"
                                >
                                    First name
                                </label>
                                <input
                                    className={styles.inputs}
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                />
                            </div>
                            <div className="formGroup">
                                <label
                                    className={styles.labels}
                                    htmlFor="lastName"
                                >
                                    Last name
                                </label>
                                <input
                                    className={styles.inputs}
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                />
                            </div>
                        </div>
                        <div className="formGroup">
                            <label className={styles.labels} htmlFor="email">
                                Email
                            </label>
                            <input
                                className={styles.inputs}
                                type="email"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="formGroup">
                            <label className={styles.labels} htmlFor="password">
                                Password
                            </label>
                            <input
                                className={styles.inputs}
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                        <div className="formGroup">
                            <label
                                className={styles.labels}
                                htmlFor="confirmPassword"
                            >
                                Confirm password
                            </label>
                            <input
                                className={styles.inputs}
                                type="password" // Changed to 'password' type
                                name="confirmPassword"
                                id="confirmPassword"
                            />
                        </div>
                        <button className="w-[80%] self-center px-2 py-3 bg-accent text-white text-xl font-anton tracking-wide rounded-md my-4">
                            Register
                        </button>
                    </form>
                </motion.div>
            </div>
        </>
    );
};

export default Register;
