import { alpha, createTheme, darken } from "@mui/material"

// import i18n from 'src/i18n/i18n';

const themeColors = {
  primary: "#007dc0",
  secondary: "#8E95A9",
  success: "#22AE68",
  warning: "#FF7A00",
  error: "#FF392B",
  info: "#78C6E7",
  black: "#1C2A53",
  white: "#fff",
  grey: "#808080",
  primaryAlt: "#fff",
  trueWhite: "#ffffff",
  darkGrey: "#55595d",
}

const colors = {
  gradients: {
    blue1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
    blue2: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
    blue3: "linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)",
    blue4: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
    blue5: "linear-gradient(135deg, #97ABFF 10%, #123597 100%)",
    orange1: "linear-gradient(135deg, #FCCF31 0%, #F55555 100%)",
    orange2: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
    orange3: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    purple1: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
    purple3: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    pink1: "linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)",
    pink2: "linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)",
    green1: "linear-gradient(135deg, #FFF720 0%, #3CD500 100%)",
    green2: "linear-gradient(to bottom, #00b09b, #96c93d)",
    black1: "linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)",
    black2: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
  },
  shadows: {
    success:
      "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)",
    error:
      "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
    info: "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
    primary:
      "0px 1px 4px rgba(112, 99, 192, 0.25), 0px 3px 12px 2px rgba(112, 99, 192, 0.35)",
    warning:
      "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
    card: "0px 4px 16px 0px rgba(0, 0, 0, 0.10)",
    cardSm: "0px 4px 16px 0px rgba(0, 0, 0, 0.10)",
    cardLg:
      "0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)",
  },
  layout: {
    general: {
      bodyBg: "#070C27",
    },
    sidebar: {
      background: themeColors.primaryAlt,
      textColor: themeColors.secondary,
      dividerBg: "#272C48",
      menuItemColor: "#9EA4C1",
      menuItemColorActive: "#ffffff",
      menuItemBg: themeColors.primaryAlt,
      menuItemBgActive: "rgba(43, 48, 77, .6)",
      menuItemIconColor: "#444A6B",
      menuItemIconColorActive: "#ffffff",
      menuItemHeadingColor: darken(themeColors.secondary, 0.3),
    },
  },
  alpha: {
    white: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white,
    },
    trueWhite: {
      5: alpha(themeColors.trueWhite, 0.02),
      10: alpha(themeColors.trueWhite, 0.1),
      30: alpha(themeColors.trueWhite, 0.3),
      50: alpha(themeColors.trueWhite, 0.5),
      70: alpha(themeColors.trueWhite, 0.7),
      100: themeColors.trueWhite,
    },
    black: {
      5: alpha(themeColors.black, 0.02),
      10: alpha(themeColors.black, 0.1),
      30: alpha(themeColors.black, 0.3),
      50: alpha(themeColors.black, 0.5),
      70: alpha(themeColors.black, 0.7),
      100: themeColors.black,
    },
    grey: {
      5: alpha(themeColors.grey, 0.02),
      10: alpha(themeColors.grey, 0.1),
      30: alpha(themeColors.grey, 0.3),
      50: alpha(themeColors.grey, 0.5),
      70: alpha(themeColors.grey, 0.7),
      100: themeColors.grey,
    },
  },
  secondary: {
    lighter: alpha(themeColors.secondary, 0.85),
    light: alpha(themeColors.secondary, 0.6),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2),
  },
  primary: {
    lighter: alpha(themeColors.primary, 0.85),
    light: alpha(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2),
  },
  success: {
    lighter: alpha(themeColors.success, 0.85),
    light: alpha(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2),
  },
  warning: {
    lighter: alpha(themeColors.warning, 0.85),
    light: alpha(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2),
  },
  error: {
    lighter: alpha(themeColors.error, 0.85),
    light: alpha(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2),
  },
  info: {
    lighter: alpha(themeColors.info, 0.85),
    light: alpha(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2),
  },
  black: {
    lighter: alpha(themeColors.black, 0.85),
    light: alpha(themeColors.black, 0.3),
    main: themeColors.black,
    dark: darken(themeColors.black, 0.2),
  },
  while: {
    lighter: alpha(themeColors.white, 0.85),
    light: alpha(themeColors.white, 0.3),
    main: themeColors.white,
    dark: darken(themeColors.white, 0.2),
  },
}

export const DefaultTheme = createTheme({
  // direction: i18n.dir(),
  colors: {
    gradients: {
      blue1: colors.gradients.blue1,
      blue2: colors.gradients.blue2,
      blue3: colors.gradients.blue3,
      blue4: colors.gradients.blue4,
      blue5: colors.gradients.blue5,
      orange1: colors.gradients.orange1,
      orange2: colors.gradients.orange2,
      orange3: colors.gradients.orange3,
      purple1: colors.gradients.purple1,
      purple3: colors.gradients.purple3,
      pink1: colors.gradients.pink1,
      pink2: colors.gradients.pink2,
      green1: colors.gradients.green1,
      green2: colors.gradients.green2,
      black1: colors.gradients.black1,
      black2: colors.gradients.black2,
    },
    shadows: {
      success: colors.shadows.success,
      error: colors.shadows.error,
      primary: colors.shadows.primary,
      info: colors.shadows.info,
      warning: colors.shadows.warning,
    },
    alpha: {
      white: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white,
      },
      trueWhite: {
        5: alpha(themeColors.trueWhite, 0.02),
        10: alpha(themeColors.trueWhite, 0.1),
        30: alpha(themeColors.trueWhite, 0.3),
        50: alpha(themeColors.trueWhite, 0.5),
        70: alpha(themeColors.trueWhite, 0.7),
        100: themeColors.trueWhite,
      },
      black: {
        5: alpha(themeColors.black, 0.02),
        10: alpha(themeColors.black, 0.1),
        30: alpha(themeColors.black, 0.3),
        50: alpha(themeColors.black, 0.5),
        70: alpha(themeColors.black, 0.7),
        100: themeColors.black,
      },
      grey: {
        5: alpha(themeColors.grey, 0.02),
        10: alpha(themeColors.grey, 0.1),
        30: alpha(themeColors.grey, 0.3),
        50: alpha(themeColors.grey, 0.5),
        70: alpha(themeColors.grey, 0.7),
        100: themeColors.grey,
      },
    },
    secondary: {
      lighter: alpha(themeColors.secondary, 0.1),
      light: alpha(themeColors.secondary, 0.3),
      main: themeColors.secondary,
      dark: darken(themeColors.secondary, 0.2),
    },
    primary: {
      lighter: alpha(themeColors.primary, 0.1),
      light: alpha(themeColors.primary, 0.3),
      main: themeColors.primary,
      dark: darken(themeColors.primary, 0.2),
    },
    success: {
      lighter: alpha(themeColors.success, 0.1),
      light: alpha(themeColors.success, 0.3),
      main: themeColors.success,
      dark: darken(themeColors.success, 0.2),
    },
    warning: {
      lighter: alpha(themeColors.warning, 0.1),
      light: alpha(themeColors.warning, 0.3),
      main: themeColors.warning,
      dark: darken(themeColors.warning, 0.2),
    },
    error: {
      lighter: alpha(themeColors.error, 0.1),
      light: alpha(themeColors.error, 0.3),
      main: themeColors.error,
      dark: darken(themeColors.error, 0.2),
    },
    info: {
      lighter: alpha(themeColors.info, 0.1),
      light: alpha(themeColors.info, 0.3),
      main: themeColors.info,
      dark: darken(themeColors.info, 0.2),
    },
    black: {
      lighter: alpha(themeColors.black, 0.1),
      light: alpha(themeColors.black, 0.3),
      main: themeColors.black,
      dark: darken(themeColors.black, 0.2),
    },
    while: {
      lighter: alpha(themeColors.white, 0.1),
      light: alpha(themeColors.white, 0.3),
      main: themeColors.white,
      dark: darken(themeColors.white, 0.2),
    },
    darkGrey: {
      lighter: alpha(themeColors.darkGrey, 0.1),
      light: alpha(themeColors.darkGrey, 0.3),
      main: themeColors.darkGrey,
      dark: darken(themeColors.darkGrey, 0.2),
    },
  },
  general: {
    reactFrameworkColor: "#00D8FF",
    borderRadiusSm: "6px",
    borderRadius: "10px",
    borderRadiusLg: "12px",
    borderRadiusXl: "16px",
  },
  sidebar: {
    background: colors.layout.sidebar.background,
    textColor: colors.layout.sidebar.textColor,
    dividerBg: colors.layout.sidebar.dividerBg,
    menuItemColor: colors.layout.sidebar.menuItemColor,
    menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
    menuItemBg: colors.layout.sidebar.menuItemBg,
    menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
    menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
    menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
    menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
    boxShadow: "1px 0 0 #272C48",
    width: "290px",
  },
  header: {
    height: "80px",
    background: themeColors.primaryAlt,
    boxShadow: "0px 1px 0px #272C48",
    textColor: colors.secondary.main,
  },
  spacing: 9,
  palette: {
    common: {
      black: colors.alpha.black[100],
      white: colors.alpha.white[100],
    },
    mode: "light",
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark,
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark,
    },
    error: {
      light: colors.error.light,
      main: colors.error.main,
      dark: colors.error.dark,
      contrastText: themeColors.trueWhite,
    },
    success: {
      light: colors.success.light,
      main: colors.success.main,
      dark: colors.success.dark,
      contrastText: themeColors.trueWhite,
    },
    info: {
      light: colors.info.light,
      main: colors.info.main,
      dark: colors.info.dark,
      contrastText: themeColors.trueWhite,
    },
    warning: {
      light: colors.warning.light,
      main: colors.warning.main,
      dark: colors.warning.dark,
      contrastText: themeColors.trueWhite,
    },
    text: {
      primary: "#55595d",
      secondary: colors.alpha.black[70],
      disabled: colors.alpha.black[50],
    },
    background: {
      paper: colors.alpha.white[100],
      default: colors.layout.general.bodyBg,
    },
    action: {
      active: colors.alpha.black[100],
      hover: colors.primary.lighter,
      hoverOpacity: 0.1,
      selected: colors.alpha.black[10],
      selectedOpacity: 0.1,
      disabled: colors.alpha.black[10],
      disabledBackground: colors.alpha.black[5],
      disabledOpacity: 0.38,
      focus: colors.alpha.black[10],
      focusOpacity: 0.05,
      activatedOpacity: 0.12,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontWeight: 700,
      fontSize: 35,
      color: colors.alpha.black[100],
    },
    h2: {
      fontWeight: 700,
      fontSize: 32,
      color: colors.alpha.black[100],
    },
    h3: {
      fontWeight: 700,
      fontSize: 25,
      lineHeight: 1.4,
      color: colors.alpha.black[100],
    },
    h4: {
      fontWeight: 700,
      fontSize: 16,
    },
    h5: {
      fontWeight: 700,
      fontSize: 14,
    },
    h6: {
      fontSize: 15,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: 16,
      color: colors.alpha.grey[100],
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 14,
      color: colors.alpha.black[70],
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 15,
      color: colors.alpha.black[50],
    },
    overline: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
})
