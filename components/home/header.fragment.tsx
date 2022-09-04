import { View, TouchableOpacity } from "react-native";
import { Image, makeStyles, Text, Icon, useTheme } from "@rneui/themed";

import _isEmpty from "lodash/isEmpty";
import _get from "lodash/get";

import useSession from "../../hooks/use-session.hook";

export default function HomeHeaderFragment() {
  const { currentUser } = useSession();

  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileColumn}>
        {!_isEmpty(currentUser) && (
          <>
            <Image
              source={{ uri: _get(currentUser, "photoURL", "") as string }}
              style={styles.profilePhoto}
            />
            <Text style={styles.greetingText}>
              Hi, {_get(currentUser, "displayName", "")}
            </Text>
          </>
        )}
      </View>
      <View style={styles.notificationColumn}>
        <TouchableOpacity>
          <Icon
            name="notifications-outline"
            type="ionicon"
            color={theme.colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const useStyles = makeStyles(() => ({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  profileColumn: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePhoto: {
    width: 35,
    height: 35,
    borderRadius: 10,
    marginRight: 10,
  },
  greetingText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  notificationColumn: {
    justifyContent: "center",
    alignItems: "center",
  },
}));
