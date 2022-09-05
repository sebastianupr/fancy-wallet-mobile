import { RootStack, RootRoutes } from "./routes";

// ↓ navigators ↓
import AuthNavigator from "./auth.navigator";
import MainNavigator from "./main.navigator";

import useSession from "../hooks/use-session.hook";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../firebase";

const RootNavigator: React.FC = () => {
  const { currentUser } = useSession();

  useEffect(() => {
    // auth.
    // AsyncStorage.clear()
    // AsyncStorage.getItem("@fancywallet:googleAccessToken").then(console.log);
  }, []);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {currentUser ? (
        <RootStack.Screen
          name={RootRoutes.Main}
          component={MainNavigator}
          options={{ animationEnabled: false }}
        />
      ) : (
        <RootStack.Screen
          name={RootRoutes.Auth}
          component={AuthNavigator}
          options={{ animationEnabled: false }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
