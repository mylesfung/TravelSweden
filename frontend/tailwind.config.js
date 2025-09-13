/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'stockholm': "url('/public/stockholm.jpg')",
        
        'street': "url('/src/images/malmö-street.jpg')",
      }
    },
  },
  plugins: [],
}

/**
 * Tailwind CSS Pros and Cons vs. Vanilla CSS
 * 
 * - PRO: Arguably cleaner/more elegant than inline CSS 
 * - PRO: No .css files necessary
 * - PRO: Good for small and unique style needs 
 * 
 * - CON: 'className' items are not connected/shared; 
 *        cannot change multiple HTML elements simultaneously
 * - CON: Inline Tailwind CSS still un-elegant/takes up a lot of space compared to external .css file
 * - CON: Limited values when dealing with highly specific sizes and large pixel sizes
 *        (ex. set large widths, viewport-width-percentage, display-width-pixels, font-style-oblique)
 * - CON: other configurations I don't know about probably not available
 * 
 */