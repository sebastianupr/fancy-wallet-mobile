import { ThemeProvider } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NavigatorContainer from "./containers/navigator.container";
import RootNavigator from "./navigation/root.navigator";

import { usePrepareApp } from "./hooks/use-prepare-app.hook";

import { theme } from "./theme";

export default function App() {
  const { fontsLoaded } = usePrepareApp();

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigatorContainer>
          <RootNavigator />
        </NavigatorContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
