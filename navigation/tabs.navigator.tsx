import { Icon, useTheme } from "@rneui/themed";

import { TabsStack, TabsRoutes } from "./routes";

import HomeScreen from "../screens/dashboard/home.screen";
import { TABS_ICONS } from "../theme/tabs.customization";

export default function TabsNavigator() {
  const { theme } = useTheme();

  return (
    <TabsStack.Navigator
      initialRouteName={TabsRoutes.Home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = TABS_ICONS[route.name];

          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          margin: 0,
          backgroundColor: theme.colors.pink,
        },
        tabBarLabelStyle: {
          margin: 0,
        },
      })}
    >
      <TabsStack.Screen name={TabsRoutes.Home} component={HomeScreen} />
    </TabsStack.Navigator>
  );
}
