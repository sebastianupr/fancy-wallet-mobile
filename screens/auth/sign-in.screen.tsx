import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon, Text, useTheme, makeStyles } from "@rneui/themed";
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

      <View style={styles.welcomeContainer}>
        <Icon
          name="wallet-outline"
          type="ionicon"
          color={theme.colors.white}
          size={100}
          containerStyle={styles.walletIconContainer}
        />

        <Text h2 style={styles.welcomeText}>
          Welcome to Fancy wallet
        </Text>

        <Text style={styles.welcomeSubtitleText}>
          The best wallet of the market
        </Text>
      </View>

      <Button
        title="Sign in with Google"
        onPress={signIn}
        buttonStyle={styles.signInButton}
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

const useStyles = makeStyles((theme) => ({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  background: {
    flex: 1,
  },

  welcomeContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  walletIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: theme.colors.pink,
    borderRadius: 100,
    width: 140,
    height: 140,
  },
  welcomeText: {
    textAlign: "center",
    marginBottom: 10,
  },
  welcomeSubtitleText: {
    textAlign: "center",
    fontSize: 18,
  },

  signInButton: {
    backgroundColor: theme.colors.pink,
    maxWidth: 300,
  },

  iconContainer: {
    marginRight: 12.5,
  },
}));
