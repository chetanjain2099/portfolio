/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#ca00ff",
                    "secondary": "#cc0000",
                    "accent": "#008181",
                    "neutral": "#000b17",
                    "base-100": "#232a2b",
                    "info": "#00a5e6",
                    "success": "#5b7b00",
                    "warning": "#ffa700",
                    "error": "#ff598f",
                },
            },
        ],
        darkTheme: "dark", // name of one of the included themes for dark mode
        logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    }
}
