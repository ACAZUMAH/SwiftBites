import React from "react";
import { Text, View } from "react-native";
import { useCartTotals } from "src/hook/useCartActions";

export const PaymentSummary: React.FC = () => {
  const totals = useCartTotals();
  return (
    <View className="border mt-6 border-gray-200 p-5 rounded-2xl">
      <Text className="h3-bold text-dark-100">Payment Summary</Text>

      <View className="flex-between flex-row mt-4">
        <Text>Total Items ({totals.totalCount})</Text>
        <Text>GH¢{totals.subTotal}</Text>
      </View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
};
