/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                accent: "#F76927",
            },
            fontFamily: {
                signika: ["Signika Negative", "sans-serif"],
                zain: ["Zain", "sans-serif"],
                anton: ["Anton SC", "sans-serif"],
            },
            backgroundImage: {
                header: "url('/src/assets/images/header.png')",
            },
        },
    },
    plugins: [],
};
