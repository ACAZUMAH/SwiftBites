import React from "react";
import { FlatList, Text } from "react-native";
import { CartItem } from "src/redux/interface/redux";
import { CartHeader } from "./CartHeader";
import { CartListItem } from "./CartListItem";

interface CarListProps {
  items: CartItem[];
}

export const CartList: React.FC<CarListProps> = ({ items }) => {
  return (
    <>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem item={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="text-center">No items in the cart</Text>
        }
        keyExtractor={(item) => item.item.id.toString()}
        ListHeaderComponent={<CartHeader />}
        contentContainerClassName="pb-28 px-1"
      />
    </>
  );
};
