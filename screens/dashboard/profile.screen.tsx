import { ListItem, makeStyles } from "@rneui/themed";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProfileDetailFragment from "../../components/profile/profile-detail.fragment";
import useAuth from "../../hooks/use-auth.hook";

import useSession from "../../hooks/use-session.hook";

export default function ProfileScreen() {
  const { currentUser } = useSession();
  const { signOut } = useAuth();

  const styles = useStyles();

  const LIST = [
    {
      title: "Cerrar sesión",
      onPress: signOut,
    },
  ];

  const renderItem = ({ item }: { item: typeof LIST["0"] }) => (
    <ListItem containerStyle={styles.listItemContainer} onPress={item.onPress}>
      <ListItem.Content style={{ borderRadius: 16 }}>
        <ListItem.Title style={styles.listItemTitle}>
          {item.title}
        </ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron iconProps={{ name: "log-out" }} />
    </ListItem>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <ProfileDetailFragment />

      <FlatList
        keyExtractor={(_item, index) => index.toString()}
        data={LIST}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const useStyles = makeStyles((theme) => ({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
  },

  listItemContainer: {
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 12,
  },
  listItemTitle: {
    color: theme.colors.white,
    fontWeight: "bold",
  },
}));
