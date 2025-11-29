import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { offers } from "src/constants";
import { HomeHeader } from "./Components/HomeHeader";
import { OfferCard } from "./Components/OfferCard";

export const Home: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 px-4">
      <HomeHeader />
      <FlatList
        data={offers}
        renderItem={({ item, index }) => <OfferCard {...item} index={index} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="pb-28 "
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
