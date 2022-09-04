import { makeStyles } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeHeaderFragment from "../../components/home/header.fragment";
import HomeBalanceFragment from "../../components/home/balance.fragment";
import HomeTabsFragment from "../../components/home/tabs.fragment";

export default function HomeScreen() {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.screen}>
      <HomeHeaderFragment />
      <HomeBalanceFragment />
      <HomeTabsFragment />
    </SafeAreaView>
  );
}

const useStyles = makeStyles(() => ({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
  },
}));
