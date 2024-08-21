import React from "react";
import { Footer, Navbar } from "./components";
import { Home, Profile, Menu, About, Cart, Register, SignIn } from "./pages";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClint = new QueryClient();

const App = () => {
    return (
        <>
            <QueryClientProvider client={queryClint}>
                <div className="container mx-auto px-4 md:px-2">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
                {/* <Footer /> */}
            </QueryClientProvider>
        </>
    );
};

export default App;
