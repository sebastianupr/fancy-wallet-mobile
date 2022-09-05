import { View } from "react-native";
import { makeStyles } from "@rneui/themed";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

import HomeHeaderFragment from "../../components/home/header.fragment";
import HomeBalanceFragment from "../../components/home/balance.fragment";
import HomeTabsFragment from "../../components/home/tabs.fragment";

export default function HomeScreen() {
  const safeAreaInset = useSafeAreaInsets();
  const styles = useStyles({ safeAreaInset });

  return (
    <View style={styles.screen}>
      <HomeHeaderFragment />
      <HomeBalanceFragment />
      <HomeTabsFragment />
    </View>
  );
}

const useStyles = makeStyles(
  (_theme, { safeAreaInset }: { safeAreaInset: EdgeInsets }) => ({
    screen: {
      flex: 1,
      top: safeAreaInset.top,
      marginBottom: safeAreaInset.bottom / 2,
      paddingBottom: safeAreaInset.bottom,
      paddingHorizontal: 10,
    },
  })
);
