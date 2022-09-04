import "@rneui/themed";

declare module "@rneui/themed" {
  export interface Colors {
    primaryLight: string;
    primaryDark: string;
    pink: string;
    pinkLight: string;
    cyanLight: string;
  }

  export interface fontWeightStyles {
    normal: TextStyle;
    semibold: TextStyle;
    bold: TextStyle;
    secondaryBold: TextStyle;
  }
}
