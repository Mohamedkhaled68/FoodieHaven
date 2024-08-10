import React from "react";
import { appStore, googlePlay } from "../assets";
const Footer = () => {
    return (
        <>
            <div className="md:flex flex-col md:items-center md:justify-between || pt-5">
                <p className="text-center text-5xl || font-semibold  font-zain || w-[55%] || leading-[4rem]">
                    For better experience, download FoodieHaven App
                </p>
                <div className="flex justify-between items-center gap-4">
                    <div className="w-[150px]">
                        <img
                            src={appStore}
                            alt="Download on the App Store"
                            className="w-full"
                        />
                    </div>
                    <div className="w-[150px]">
                        <img
                            src={googlePlay}
                            alt="Get it on Google Play"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>

            <footer className="bg-zinc-800 text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-around">
                        <div className="basis-[33%]">
                            <h2 className="text-3xl font-bold font-zain text-red-500">
                                FoodieHaven
                            </h2>
                            <p className="mt-4 text-sm text-gray-400 ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco labo
                            </p>
                            <div className="mt-4 flex space-x-6">
                                <div className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Facebook</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.675 0H1.325C.594 0 0 .593 0 1.324v21.351C0 23.407.593 24 1.325 24h11.495V14.708h-3.13v-3.617h3.13V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.796.142v3.24l-1.92.001c-1.504 0-1.795.715-1.795 1.762v2.308h3.587l-.467 3.617h-3.12V24h6.116c.731 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                                    </svg>
                                </div>
                                <div className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.954 4.569c-.885.385-1.83.644-2.825.759 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.206-4.92 4.917 0 .385.045.76.127 1.122-4.09-.205-7.72-2.165-10.148-5.144-.424.722-.667 1.561-.667 2.457 0 1.696.861 3.193 2.171 4.073-.801-.025-1.555-.247-2.213-.616v.062c0 2.372 1.688 4.348 3.93 4.793-.412.111-.849.171-1.299.171-.318 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.42-1.68 1.319-3.809 2.104-6.102 2.104-.395 0-.785-.023-1.17-.068 2.179 1.396 4.768 2.209 7.548 2.209 9.051 0 13.999-7.496 13.999-13.986 0-.213-.005-.425-.014-.636.961-.695 1.796-1.562 2.457-2.549z" />
                                    </svg>
                                </div>
                                <div className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19.616 3.096H4.384C3.632 3.096 3 3.738 3 4.499v15.002c0 .76.632 1.402 1.384 1.402h15.231c.751 0 1.384-.642 1.384-1.402V4.499c0-.761-.632-1.403-1.384-1.403zM8.77 18.648H5.998V9.359H8.77v9.289zM7.384 8.284c-.889 0-1.613-.724-1.613-1.615 0-.891.724-1.615 1.613-1.615s1.613.724 1.613 1.615c0 .891-.724 1.615-1.613 1.615zm12.678 10.364h-2.774v-4.664c0-1.113-.024-2.547-1.553-2.547-1.553 0-1.792 1.214-1.792 2.467v4.744h-2.775V9.359h2.662v1.261h.036c.37-.702 1.276-1.444 2.631-1.444 2.812 0 3.331 1.854 3.331 4.266v5.207z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-0">
                            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">
                                Company
                            </h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-400 hover:text-white"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-400 hover:text-white"
                                    >
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-400 hover:text-white"
                                    >
                                        Delivery
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-base text-gray-400 hover:text-white"
                                    >
                                        Privacy policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 md:mt-0">
                            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">
                                Get in touch
                            </h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <a
                                        href="tel:+12345678901"
                                        className="text-base text-gray-400 hover:text-white"
                                    >
                                        +1-234-567-8901
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:contact@tomato.com"
                                        className="text-base text-gray-400 hover:text-white"
                                    >
                                        contact@foodie-haven.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-700 pt-8">
                        <p className="text-base text-gray-400 text-center">
                            &copy; 2024 FoodieHaven.com - All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
