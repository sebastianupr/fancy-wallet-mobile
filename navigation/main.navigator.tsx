import { MainStack, MainRoutes } from "./routes";
import TabsNavigator from "./tabs.navigator";

export default function MainNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={MainRoutes.Tabs}
    >
      <MainStack.Screen name={MainRoutes.Tabs} component={TabsNavigator} />
    </MainStack.Navigator>
  );
}
