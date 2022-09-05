import { Image, makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";

import _get from "lodash/get";

import useSession from "../../hooks/use-session.hook";

export default function ProfileDetailFragment() {
  const { currentUser } = useSession();

  const styles = useStyles();

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: _get(currentUser, "photoURL", "") as string }}
          style={styles.profileImage}
        />

        <View style={styles.profileInfoContainer}>
          <Text h4 style={{ textAlign: "center" }}>
            {_get(currentUser, "displayName", "")}
          </Text>
          <Text style={styles.emailText}>{_get(currentUser, "email", "")}</Text>
        </View>
      </View>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  screen: {
    flex: 1,
  },

  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
  },
  profileCard: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 220,
    width: "75%",

    backgroundColor: theme.colors.primaryLight,
    borderRadius: 16,

    shadowColor: "#52006A",
    elevation: 5,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  profileInfoContainer: {
    marginTop: 12,
  },

  emailText: {
    marginTop: 2.5,
    fontSize: 13,
    color: theme.colors.grey5,
    textAlign: "center",
  },
}));
