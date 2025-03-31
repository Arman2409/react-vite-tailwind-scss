export default {
    content: [
        './index.html',
        './src/**/*.{html,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'custom-gray': 'rgba(113, 150, 66, 0.5)', // Custom gray with 50% opacity
            },
        },
    },
    plugins: [],
};