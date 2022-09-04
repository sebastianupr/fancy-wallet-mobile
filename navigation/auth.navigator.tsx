import { AuthStack, AuthRoutes } from "./routes";

import SignScreen from "../screens/auth/sign-in.screen";
import SignInCallback from "../screens/auth/sign-in-callback.screen";

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AuthRoutes.SingIn}
    >
      <AuthStack.Screen name={AuthRoutes.SingIn} component={SignScreen} />
      <AuthStack.Screen
        name={AuthRoutes.SignInCallback}
        component={SignInCallback}
      />
    </AuthStack.Navigator>
  );
}
