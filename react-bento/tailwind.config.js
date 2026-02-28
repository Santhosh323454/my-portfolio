/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable toggling dark mode manually
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#F97316',      // Vibrant Orange
                    dark: '#1C1C1E',        // Main Text High Contrast
                    gray: '#6B7280',        // Subtext / Muted Text
                    lightbg: '#F8F9FA',     // Body Background
                    cardbg: '#FFFFFF',      // Card Background
                    border: '#E8E8E8',      // Soft Borders
                    progressbg: '#F2F2F2',  // Progress Bar Track

                    /* Dark Theme Overrides */
                    darkbg: '#0F0F12',
                    darkcard: '#1A1A1D',
                    darkborder: '#2E2E32',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'ouali-card': '0px 8px 24px rgba(0, 0, 0, 0.04)',
                'ouali-hover': '0px 0px 20px rgba(249, 115, 22, 0.6)',
                'ouali-darkhover': '0px 0px 20px rgba(249, 115, 22, 0.3)',
                'ouali-btn': '0px 4px 12px rgba(249, 115, 22, 0.45)',
                'ouali-darkcard': '0px 8px 24px rgba(0, 0, 0, 0.25)',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
