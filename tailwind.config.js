module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                xs: "420px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
