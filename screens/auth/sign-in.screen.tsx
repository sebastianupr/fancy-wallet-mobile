import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon, useTheme, makeStyles } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";

import useAuth from "../../hooks/use-auth.hook";

export default function SignScreen() {
  const { signIn } = useAuth();
  const { theme } = useTheme();
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
        colors={["rgba(0,0,0,0.4)", "transparent"]}
        style={[styles.background, StyleSheet.absoluteFill]}
      />

      <Button
        title="Sign in with Google"
        onPress={signIn}
        buttonStyle={{ backgroundColor: theme.colors.pink }}
        icon={
          <Icon
            name="logo-google"
            type="ionicon"
            containerStyle={styles.iconContainer}
          />
        }
      />
    </SafeAreaView>
  );
}

const useStyles = makeStyles(() => ({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    flex: 1,
  },

  iconContainer: {
    marginRight: 12.5,
  },
}));
