/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js,php}",  "./node_modules/flowbite/**/*.js"],
  theme: { 
    extend: { 
        fontFamily: { 
            "Comfortaa": ['Comfortaa', 'sans-serif'] 
        } 
    }, 
}, 
  plugins: [
    require('flowbite/plugin')
]
}

