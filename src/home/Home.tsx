import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { offers } from "src/constants";
import { HomeHeader } from "./Components/HomeHeader";

export const Home: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 px-4">
      <FlatList
        data={offers}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        ListHeaderComponent={<HomeHeader />}
      />
    </SafeAreaView>
  );
};
