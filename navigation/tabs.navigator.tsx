import { Icon, useTheme } from "@rneui/themed";

import { TabsStack, TabsRoutes } from "./routes";

import HomeScreen from "../screens/dashboard/home.screen";
import ProfileScreen from "../screens/dashboard/profile.screen";

import { TABS_ICONS } from "../theme/tabs.customization";

export default function TabsNavigator() {
  const { theme } = useTheme();

  return (
    <TabsStack.Navigator
      initialRouteName={TabsRoutes.Home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const iconName = TABS_ICONS[route.name];
          return (
            <Icon name={iconName} type="ionicon" size={size} color={color} />
          );
        },

        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.primaryLight,
        tabBarStyle: {
          backgroundColor: theme.colors.pink,
        },
      })}
    >
      <TabsStack.Screen name={TabsRoutes.Home} component={HomeScreen} />
      <TabsStack.Screen name={TabsRoutes.Profile} component={ProfileScreen} />
    </TabsStack.Navigator>
  );
}
