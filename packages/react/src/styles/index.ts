import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from "@igniteds-ui/tokens"
import { createStitches, defaultThemeMap } from "@stitches/react"

export const { createTheme, styled, globalCss, css, keyframes, getCssText, theme, config } = createStitches({
    theme: {
        colors: colors,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        font: fonts,
        lineHeights: lineHeights,
        radii: radii,
        space: space,
    },
    themeMap: {
        ...defaultThemeMap,
        width: "space",
        height: "space"
    },
})