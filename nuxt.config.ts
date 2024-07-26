// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            // sans: ["Poppins", "sans-serif"],
          },
          colors: {
            customGray: "rgb(247, 246, 249)",
          },
        },
      },
      plugins: [
        function ({ addUtilities }) {
          addUtilities({
            ".border-rgb": {
              "border-image": `repeating-linear-gradient(to right, rgb(234, 97, 97) 0px, rgb(234, 97, 97) 45px, rgb(245, 133, 102) 45px, rgb(245, 133, 102) 90px, rgb(244, 171, 87) 90px, rgb(244, 171, 87) 135px, rgb(235, 200, 61) 135px, rgb(235, 200, 61) 180px, rgb(100, 203, 98) 180px, rgb(100, 203, 98) 225px, rgb(176, 123, 221) 225px, rgb(176, 123, 221) 270px) 1`,
            },
          });
        },
      ],
    },
  },
  css: ["./assets/css/tailwind.css", "primeicons/primeicons.css"],
  app: {
    head: {
      script: [
        {
          src: "https://platform.twitter.com/widgets.js",
          async: true,
          defer: true,
        },
      ],
    },
  },
});
