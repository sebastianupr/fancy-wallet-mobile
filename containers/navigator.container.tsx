import React, { ReactElement, PropsWithChildren } from "react";
import * as RNN from "@react-navigation/native";

import * as Linking from "expo-linking";

import { theme } from "../theme";
import { RootStackParamList } from "../navigation/routes";

// ---

const prefix = Linking.createURL("/");

const navigationTheme: RNN.Theme = {
  ...RNN.DefaultTheme,
  colors: {
    ...RNN.DefaultTheme.colors,
    background: theme.darkColors?.background as string,
  },
};
const navigationLinking: RNN.LinkingOptions<RootStackParamList> = {
  prefixes: [prefix],

  config: {
    screens: {
      Auth: {
        path: "auth",
        screens: {
          SignInCallback: {
            path: "callback",
          },
        },
      },
    },
  },

  async getInitialURL() {
    // Check if app was opened from a deep link
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }
  },
};
export type NavigationContainerProps = unknown;

const NavigationContainer = ({
  children,
}: PropsWithChildren<NavigationContainerProps>): ReactElement => {
  return (
    <RNN.NavigationContainer
      linking={navigationLinking}
      theme={navigationTheme}
    >
      {children}
    </RNN.NavigationContainer>
  );
};

export default NavigationContainer;
