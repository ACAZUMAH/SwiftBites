import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "src/constants";
import {
  useDecreaseQuantity,
  useIncreaseQuantity,
  useRemoveItem,
} from "src/hook/useCartActions";
import { CartItem } from "src/redux/interface/redux";

interface CartListItemProps {
  item: CartItem;
}

export const CartListItem: React.FC<CartListItemProps> = ({ item }) => {
  const increaseQuantity = useIncreaseQuantity();
  const decreaseQuantity = useDecreaseQuantity();
  const removeItem = useRemoveItem();

  return (
    <View className="cart-item">
      <View className="flex flex-row items-center gap-x-3">
        <View className="flex flex-col items-center justify-center size-10 bg-primary/10 rounded-lg p-2">
          <Image source={icons.check} className="size-2/3" resizeMode="cover" />
        </View>
        <View className="cart-item__image">
          <Image
            source={{ uri: item.item.image_url }}
            className="size-4/5 rounded-lg"
            resizeMode="cover"
          />
        </View>
        <View className="flex flex-col items-start justify-center gap-y-1">
          <Text className="base-bold text-dark-100">{item.item.name}</Text>
          <Text className="h2-bold text-primary mt-1">
            GH¢{item.item.price}
          </Text>

          <View className="flex flex-row items-center gap-x-4 mt-2">
            <TouchableOpacity
              className="cart-item__actions"
              onPress={() => decreaseQuantity(item)}
            >
              <Image
                source={icons.minus}
                className="size-2/3"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text className="h1-bold text-dark-100">{item.quantity}</Text>
            <TouchableOpacity
              className="cart-item__actions"
              onPress={() => increaseQuantity(item)}
            >
              <Image
                source={icons.plus}
                className="size-2/3"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        className="flex-center"
        onPress={() => removeItem(item.item.id)}
      >
        <Image source={icons.trash} className="size-7" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};
