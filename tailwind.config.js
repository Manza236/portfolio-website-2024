/** @type {import('tailwindcss').Config} */
export default 
{
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: 
  {
    extend: 
    {
      colors: 
      {
        primary: '#1A237E',   // Navy Blue
        secondary: '#F5F5F5', // Light Gray
        accent: '#00796B',    // Teal
      },
    },
  },
  plugins: [require("daisyui")],
};
