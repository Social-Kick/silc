import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Poiret One"],
  bodyFontFamily: ["Cabin"],
  googleFonts: [
    {
      name: "Cabin",
      styles: ["400"],
    },
    {
      name: "Roboto",
      styles: ["200"],
    },
    {
      name: "Poiret One",
      styles: ["400"]
    }
  ],
})

export default typography
