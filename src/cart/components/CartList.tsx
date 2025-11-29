import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CartItem } from "src/redux/interface/redux";
import { CartListItem } from "./CartListItem";
import { PaymentSummary } from "./PaymentSummary";

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
        contentContainerClassName="pb-28 px-1 mt-4"
        ListFooterComponent={
          <View className="gap-6">
            <PaymentSummary />

            <TouchableOpacity className="custom-btn">
              <Text className="text-white-100 paragraph-semibold p-1">
                Proceed to Checkout
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </>
  );
};
