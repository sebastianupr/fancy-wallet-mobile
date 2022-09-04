import { View } from "react-native";
import { makeStyles, useTheme } from "@rneui/themed";
import CardBalance from "./card-balance.component";

export default function HomeBalanceFragment() {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <CardBalance
        title="Total balance"
        amount="10,120"
        chartColor={theme.colors?.cyanLight}
      />
      <CardBalance
        title="Monthly Speeding"
        amount="7,175"
        chartColor={theme.colors?.pinkLight}
      />
    </View>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
}));
