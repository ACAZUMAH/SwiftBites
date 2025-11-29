import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { icons } from "src/constants";
import {
  useAddToCart,
  useCartItems,
  useDecreaseQuantity,
  useIncreaseQuantity,
} from "src/hook/useCartActions";
import { MenuItem } from "src/interface";

interface CartButtonProps {
  product: MenuItem;
}

export const CartButton: React.FC<CartButtonProps> = ({ product }) => {
  const items = useCartItems();
  const increaseQuantity = useIncreaseQuantity();
  const decreaseQuantity = useDecreaseQuantity();
  const addToCart = useAddToCart();

  const item = items.find((item) => item.item.id === product.id);

  const quantity = item ? item.quantity : 0;

  const handleAddToCart = () => {
    if (item) {
      increaseQuantity(item);
      Toast.show({
        type: "success",
        text1: "Cart Updated",
        text2: `${item.item.name} quantity ${quantity + 1}`,
        topOffset: 50,
      });
    } else {
      addToCart(product);
      Toast.show({
        type: "success",
        text1: "Item Added to Cart",
        text2: `${product.name} quantity ${quantity + 1}`,
        topOffset: 50,
      });
    }
  };

  const handleDecrease = () => {
    if (item) {
      decreaseQuantity(item);
      Toast.show({
        type: "success",
        text1: "Cart Updated",
        text2: `${item.item.name} quantity ${quantity + 1}`,
        topOffset: 50,
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "This item is not in Cart",
      });
    }
  };

  return (
    <View className="relative mx-3 my-5 p-5 bg-white-100 flex-row rounded-full shadow-lg shadow-dark-100/20 gap-10">
      <View className="flex-row items-center gap-2">
        <TouchableOpacity
          className="flex flex-row items-center justify-center size-8 bg-primary/10 rounded-lg"
          onPress={handleDecrease}
        >
          <Image
            source={icons.minus}
            className="size-2/3"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="h1-bold text-dark-100 mx-2">{quantity}</Text>
        <TouchableOpacity
          className="flex flex-row items-center justify-center size-8 bg-primary/10 rounded-lg"
          onPress={handleAddToCart}
        >
          <Image
            source={icons.plus}
            className="size-2/3"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-primary flex flex-row items-center justify-center rounded-full px-5 py-4 gap-3"
        onPress={handleAddToCart}
      >
        <Image source={icons.bag} className="size-5" resizeMode="contain" />
        <Text className="base-bold text-white-100">
          Add to Cart(GH¢{product.price})
        </Text>
      </TouchableOpacity>
    </View>
  );
};
