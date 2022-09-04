import { View } from "react-native";
import { makeStyles, Text, useTheme } from "@rneui/themed";
import { LineChart } from "react-native-chart-kit";
import BalanceAmount from "../balance-amount.component";

import { getChartData } from "../../utils/chart.utils";

type CardBalanceProps = {
  title: string;
  amount: string;
  chartColor: string;
};

export default function CardBalance({
  title,
  amount,
  chartColor,
}: CardBalanceProps) {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.totalBalanceText}>{title}</Text>
      <BalanceAmount amount={amount} />

      <LineChart
        data={getChartData(chartColor)}
        withHorizontalLabels={false}
        withScrollableDot={false}
        withDots={false}
        withInnerLines={false}
        withVerticalLabels={false}
        withVerticalLines={false}
        withHorizontalLines={false}
        withOuterLines={false}
        withShadow={false}
        height={50}
        width={200}
        style={{ marginLeft: -40 }}
        chartConfig={{
          backgroundGradientFrom: theme.colors.primaryLight,
          backgroundGradientTo: theme.colors.primaryLight,
          color: () => chartColor,
        }}
        bezier
      />
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 155,
    height: 140,
    borderRadius: 17,
    backgroundColor: theme?.colors?.primaryLight,
    marginBottom: 10,
    marginRight: 10,
    overflow: "hidden",

    shadowColor: "#52006A",
    elevation: 5,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  totalBalanceText: {
    fontWeight: "normal",
    marginBottom: 5,
  },
}));
