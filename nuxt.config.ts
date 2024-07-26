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
            sans: [
              "apple-system",
              "BlinkMacSystemFont",
              "Segoe UI",
              "Roboto",
              "Helvetica Neue",
              "Arial",
              "Noto Sans",
              "Liberation Sans",
              "sans-serif",
              "Apple Color Emoji",
              "Segoe UI Emoji",
              "Segoe UI Symbol",
              "Noto Color Emoji",
            ],
          },
          keyframes: {
            ilqnTz: {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          },
          animation: {
            ilqnTz: "ilqnTz 8s ease-in-out infinite",
          },
          colors: {
            customGray: "rgb(247, 246, 249)",
            customYellow: "rgb(255, 228, 147)",
          },
        },
      },
      plugins: [
        function ({ addUtilities }) {
          addUtilities({
            ".border-rgb": {
              "border-image": `repeating-linear-gradient(to right, rgb(234, 97, 97) 0px, rgb(234, 97, 97) 45px, rgb(245, 133, 102) 45px, rgb(245, 133, 102) 90px, rgb(244, 171, 87) 90px, rgb(244, 171, 87) 135px, rgb(235, 200, 61) 135px, rgb(235, 200, 61) 180px, rgb(100, 203, 98) 180px, rgb(100, 203, 98) 225px, rgb(176, 123, 221) 225px, rgb(176, 123, 221) 270px) 1`,
            },
            ".menu-bg": {
              "background-image": `linear-gradient(45deg, rgb(0, 0, 102) 0%, rgb(87, 0, 107) 11%, rgb(138, 0, 103) 22%, rgb(184, 0, 95) 33%, rgb(219, 0, 84) 44%, rgb(246, 55, 65) 56%, rgb(255, 105, 46) 67%, rgb(255, 151, 15) 78%, rgb(255, 191, 0) 89%, rgb(255, 234, 0) 100%)`,
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
