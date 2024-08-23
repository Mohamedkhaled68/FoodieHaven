import React from "react";
import { AppLayout, Footer, Navbar } from "./components";
import { Home, Profile, Menu, About, Cart, Register, SignIn } from "./pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { easeInOut, motion } from "framer-motion";

const queryClint = new QueryClient();

const App = () => {
    return (
        <>
            <QueryClientProvider client={queryClint}>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route index element={<Navigate to={"/home"} />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Routes>
                {/* <Footer /> */}
            </QueryClientProvider>
        </>
    );
};

export default App;
