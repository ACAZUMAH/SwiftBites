import { useRoute } from "@react-navigation/native";
import React, { useMemo } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "src/components/CustomHeader";
import { icons, sides, toppings } from "src/constants";
import { useAppNavigation } from "src/hook/useAppNavigation";
import { CartButton } from "./components/CartButton";
import { Sides } from "./components/Sides";
import { Toppings } from "./components/Toppings";

export const Product: React.FC = () => {
  const { params } = useRoute();
  const { navigateBack } = useAppNavigation();

  //@ts-ignore
  const product = useMemo(() => params?.item, [params]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4">
        <CustomHeader
          style="mb-4"
          title="Product"
          onNavigateBack={() => navigateBack()}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="bg-white"
      >
        <View className="flex-between flex-row gap-1">
          <View className="flex-start pl-4">
            <Text className="h2-bold">{`Wendy's ${product?.category_name}`}</Text>
            <Text className="base-bold text-gray-200 mt-4">
              {product?.name}
            </Text>
            <View className="flex-row items-center gap-1 mt-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image source={icons.star} className="size-5" key={index} />
              ))}
              <Text className="base-bold text-gray-200 text-lg">
                {product?.rating}/5
              </Text>
            </View>

            <Text className="h1-bold mt-4">GH¢{product?.price}</Text>

            <View className="flex-row items-center gap-7 mt-3">
              <View>
                <Text className="base-bold text-gray-200">Calories</Text>
                <Text className="base-bold">{product?.calories} Cal</Text>
              </View>
              <View>
                <Text className="base-bold text-gray-200">Protein</Text>
                <Text className="base-bold">{product?.protein} g</Text>
              </View>
            </View>

            <View className="mt-3">
              <Text className="base-bold text-gray-200">Bun Type</Text>
              <Text className="base-bold">N/A</Text>
            </View>
          </View>

          <Image
            source={{ uri: product?.image_url }}
            className="size-80 mt-6"
            resizeMode="cover"
          />
        </View>

        <View className="flex-between flex-row bg-primary/10 mt-4 mx-4 py-4 px-6 rounded-full">
          <View>
            <Text className="base-bold text-dark-100">
              <Text className="base-bold text-primary">GH¢</Text> Free Delivery
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Image source={icons.clock} className="size-6" />
            <Text className="base-bold text-dark-100">20 - 30 mins</Text>
          </View>

          <View className="flex-row items-center gap-2">
            <Image source={icons.star} className="size-6" />
            <Text className="base-bold text-dark-100">{product?.rating}</Text>
          </View>
        </View>

        <View className="mx-4 my-8">
          <Text className="base-bold text-gray-200">
            {product?.description}
          </Text>
        </View>

        <Toppings toppings={toppings} />

        <Sides sides={sides} />

        <CartButton product={product} />
      </ScrollView>
    </SafeAreaView>
  );
};
