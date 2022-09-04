import { createTheme } from "@rneui/themed";
import { TextStyle } from "react-native";

export interface FontWeightStyles {
  normal: TextStyle;
  semibold: TextStyle;
  bold: TextStyle;
  secondaryBold: TextStyle;
}

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;

  pink: string;
  pinkLight: string;

  cyanLight: string;

  white: string;
  background: string;
}

const fontWeightStyles: FontWeightStyles = {
  normal: {
    fontFamily: "Poppins-Regular",
  },
  semibold: {
    fontFamily: "Poppins-SemiBold",
  },
  bold: {
    fontFamily: "Poppins-Bold",
  },
  secondaryBold: {
    fontFamily: "Poppins-Medium",
  },
};

const themeColors: ThemeColors = {
  primary: "#26195f",
  primaryLight: "#2b2968",
  primaryDark: "#1e0e62",
  pink: "#9744f8",
  pinkLight: "#be89d3",
  cyanLight: "#5baccf",
  white: "white",
  background: "#26195f",
};

export const theme = createTheme({
  lightColors: {
    primary: themeColors.primary,
    primaryLight: themeColors.primaryLight,
    primaryDark: themeColors.primaryDark,
    pink: themeColors.pink,
    pinkLight: themeColors.pinkLight,
    cyanLight: themeColors.cyanLight,
    background: themeColors.background,
  },
  darkColors: {
    primary: themeColors.primary,
    primaryLight: themeColors.primaryLight,
    primaryDark: themeColors.primaryDark,
    pink: themeColors.pink,
    pinkLight: themeColors.pinkLight,
    cyanLight: themeColors.cyanLight,
    background: themeColors.background,
  },
  components: {
    Text: {
      style: {
        fontFamily: fontWeightStyles.semibold.fontFamily,
        color: themeColors.white,
      },
    },
    Button: {
      titleStyle: {
        fontFamily: fontWeightStyles.semibold.fontFamily,
      },
      buttonStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,

        borderRadius: 10,
        backgroundColor: themeColors.primary,
      },
    },
  },
});
