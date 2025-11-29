import React from "react";
import { Image, Platform, Text, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import {
  useAddToCart,
  useCartItemAlreadyExist,
  useIncreaseQuantity,
} from "src/hook/useCartActions";
import { MenuItem } from "src/interface";

interface ProductItemProps {
  item: MenuItem;
  onPress: () => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({ item, onPress }) => {
  const addToCart = useAddToCart();
  const itemExist = useCartItemAlreadyExist(item);
  const increaseQuantity = useIncreaseQuantity();

  const quantity = itemExist ? itemExist.quantity : 0;
  const handleAddToCart = (e: any) => {
    e.stopPropagation?.();
    if (itemExist) {
      increaseQuantity(itemExist);
      Toast.show({
        type: "success",
        text1: "Cart Updated",
        text2: `${item.name} quantity ${quantity + 1}`,
        topOffset: 50,
      });
    } else {
      addToCart(item);
      Toast.show({
        type: "success",
        text1: "Item Added to Cart",
        text2: `${item.name} quantity ${quantity + 1}`,
        topOffset: 50,
      });
    }
  };

  return (
    <TouchableOpacity
      className="menu-card"
      style={
        Platform.OS === "android"
          ? { elevation: 10, shadowColor: "#878787" }
          : {}
      }
      onPress={onPress}
    >
      <Image
        source={{ uri: item.image_url }}
        resizeMode="contain"
        className="size-32 absolute -top-10"
      />

      <Text
        className="text-center base-bold text-dark-100 mb-2"
        numberOfLines={1}
      >
        {item.name}
      </Text>
      <Text className="body-regular text-gray-200 mb-5">
        From GH¢{item.price}
      </Text>

      <TouchableOpacity onPress={handleAddToCart}>
        <Text className="paragraph-bold text-primary">+ Add to cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
