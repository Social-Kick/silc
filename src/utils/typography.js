import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Fira Sans"],
  bodyFontFamily: ["Montserrat"],
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["200", "400", "500"],
    },
    {
      name: "Fira Sans",
      styles: ["200"]
    }
  ],
})

export default typography
