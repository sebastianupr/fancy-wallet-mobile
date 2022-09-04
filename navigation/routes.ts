import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export enum RootRoutes {
  Auth = "Auth",
  Main = "Main",
}

export enum AuthRoutes {
  SingIn = "SignIn",
  SignInCallback = "SignInCallback",
}

export enum MainRoutes {
  Tabs = "Tabs",
}

export enum TabsRoutes {
  Home = "Home",
}

export type RootStackParamList = {
  [RootRoutes.Auth]: undefined;
  [RootRoutes.Main]: undefined;
};

export type AuthStackParamList = {
  [AuthRoutes.SingIn]: undefined;
  [AuthRoutes.SignInCallback]: undefined;
};

export type MainStackParamList = {
  [MainRoutes.Tabs]: undefined;
};

export type TabsStackParamList = {
  [TabsRoutes.Home]: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();
export const AuthStack = createStackNavigator<AuthStackParamList>();
export const MainStack = createStackNavigator<MainStackParamList>();
export const TabsStack = createBottomTabNavigator<TabsStackParamList>();
