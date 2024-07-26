import React from "react";
import { Footer, Navbar } from "./components";
import { Home, Profile, Menu, About, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <>
            <div className="container mx-auto px-4 md:px-0">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
