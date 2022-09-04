import { useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { makeStyles, Text, Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";

import BalanceAmount from "../balance-amount.component";

export type CreditCardProps = {
  title: string;
  amount: string;
  gradientColors?: string[];
  style?: ViewStyle;
  animated?: boolean;
};

export default function CreditCard({
  title,
  amount,
  gradientColors = [],
  style,
  animated = false,
}: CreditCardProps) {
  const styles = useStyles();

  const ViewComponent = useMemo(
    () => (animated ? Animated.View : View),
    [animated]
  ) as any;

  return (
    <View style={styles.border}>
      <ViewComponent style={[styles.container, style]}>
        <LinearGradient
          colors={gradientColors}
          style={StyleSheet.absoluteFill}
        />

        <View style={[styles.row, styles.topRow]}>
          <Text h4>{title}</Text>

          <View>
            <BalanceAmount amount={amount} size="big" />
          </View>
        </View>
        <View style={[styles.row, styles.bottomRow]}>
          <View>
            <Text style={styles.cardNumberText}>**** **** **** 1234</Text>
          </View>
          <Icon name="cc-visa" type="font-awesome" color="white" size={60} />
        </View>
      </ViewComponent>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  border: {
    marginTop: 20,
    borderColor: theme.colors.background,
    borderWidth: 2,
    borderRadius: 30,
  },
  container: {
    height: 200,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 28,
    overflow: "hidden",
    position: "relative",
    // zIndex: 1,
  },

  row: {
    flexDirection: "row",
    height: "50%",
  },
  topRow: {
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  bottomRow: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  cardNumberText: {
    fontSize: 18,
    fontWeight: "600",
  },
}));
