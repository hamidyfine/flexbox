/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'sans'       : ['\'Ubuntu\', sans-serif', 'system-ui'],
            'handwriting': ['\'Patrick Hand\', sans-serif', 'system-ui'],
        },
    },
    plugins : [],
    safelist: [
        {
            pattern: /bg-/,
        },
        {
            pattern: /border-/,
        },
    ],
};
