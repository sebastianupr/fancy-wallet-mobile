import { RootStack, RootRoutes } from "./routes";

// ↓ navigators ↓
import AuthNavigator from "./auth.navigator";
import MainNavigator from "./main.navigator";

import useSession from "../hooks/use-session.hook";

const RootNavigator: React.FC = () => {
  const { currentUser } = useSession();

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
