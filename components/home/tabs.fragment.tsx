import { useEffect, useMemo, useRef, useState } from "react";
import { View, FlatList, ScrollView } from "react-native";
import { makeStyles, Tab, TabView, useTheme } from "@rneui/themed";

import ListOfCards from "../list-of-cards.component";

export default function UserCardsFragment() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const tabs = useMemo(
    () => [
      { id: 0, title: "My Cards", Section: ListOfCards },
      { id: 1, title: "Transactions history", Section: () => <View></View> },
    ],
    []
  );

  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Tab
        value={currentTab}
        variant="primary"
        scrollable
        onChange={setCurrentTab}
        indicatorStyle={{ backgroundColor: theme.colors.pink }}
        style={{ flex: 1 }}
      >
        {tabs.map(({ id, title }) => (
          <Tab.Item key={id} titleStyle={styles.tabItemTitle}>
            {title}
          </Tab.Item>
        ))}
      </Tab>
      <TabView
        value={currentTab}
        onChange={setCurrentTab}
        animationType="spring"
      >
        {tabs.map(({ id, Section }) => (
          <TabView.Item key={id} style={styles.tabView}>
            <FlatList data={[{}]} renderItem={() => <Section />} />
          </TabView.Item>
        ))}
      </TabView>
    </View>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  tabView: {
    width: "100%",
  },

  tabItemTitle: {
    fontWeight: "600",
  },
}));
