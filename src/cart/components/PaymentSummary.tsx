import React from "react";
import { Text, View } from "react-native";
import { useCartTotals } from "src/hook/useCartActions";

export const PaymentSummary: React.FC = () => {
  const totals = useCartTotals();
  return (
    <View className="border mt-6 border-gray-300 p-5 rounded-2xl">
      <Text className="h3-bold text-dark-100">Payment Summary</Text>

      <View className="flex-between flex-row mt-4">
        <Text className="paragraph-medium text-gray-200">
          Total Items ({totals.totalCount})
        </Text>
        <Text className="paragraph-bold text-dark-100">
          GH¢{totals.subTotal}
        </Text>
      </View>
      <View className="flex-between flex-row mt-3">
        <Text className="paragraph-medium text-gray-200">Delivery</Text>
        <Text className="paragraph-bold text-dark-100">
          GH¢{totals.deliveryFee}
        </Text>
      </View>
      <View className="flex-between flex-row mt-3">
        <Text className="paragraph-medium text-gray-200">Discount</Text>
        <Text className="paragraph-bold text-success">-GH¢{0}</Text>
      </View>
      <View className="flex-between flex-row mt-3 border-t border-gray-300 pt-3">
        <Text className="paragraph-bold text-dark-100">Total</Text>
        <Text className="paragraph-bold text-dark-100">
          GH¢{totals.total.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
