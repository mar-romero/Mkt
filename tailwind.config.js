module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        black: { "900_3f": "#0000003f" },
        deep_purple: {
          500: "#6844d8",
          600: "#5531c2",
          A100: "#af9cff",
          A100_00: "#af9cff00",
          A200: "#7c54f7",
          A200_00: "#7c54f700",
        },
        colors1: "#4f1cb8",
        indigo: { 900: "#1d3661" },
        colors: "#6945D9",
      },
      boxShadow: {
        bs1: "inset 0px 0px  0px 0px ",
        bs: "0px 4px  4px 0px #0000003f",
      },
      fontFamily: { montserrat: "Montserrat", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,[object Object])",
        gradient1: "linear-gradient(180deg ,#7c54f7,#1d3661)",
        gradient2: "linear-gradient(180deg ,#1d3661,#7c54f7)",
        gradient3: "linear-gradient(180deg ,#7c54f700,#7c54f7)",
        gradient4: "linear-gradient(180deg ,#af9cff,#af9cff00)",
        gradient5: "linear-gradient(180deg ,#1d3661,#6844d8)",
        gradient6: "linear-gradient(180deg ,#7c54f7,#1d3661,#7c54f7)",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
