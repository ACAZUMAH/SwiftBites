import cn from "clsx";
import React from "react";
import { FlatList, View } from "react-native";
import { appRoutes } from "src/constants";
import { useAppNavigation } from "src/hook/useAppNavigation";
import { MenuItem } from "src/interface";
import { ProductItem } from "./ProductItem";

interface ProductListProps {
  menus: MenuItem[];
}

export const ProductList: React.FC<ProductListProps> = ({ menus }) => {
  const { navigate } = useAppNavigation();
  return (
    <FlatList
      data={menus}
      renderItem={({ item, index }) => {
        const isFirstRightColItem = index % 2 === 0;
        return (
          <View
            className={cn(
              "flex-1 max-w-[48%]",
              !isFirstRightColItem ? "mt-14" : "mt-0"
            )}
            key={item.id}
          >
            <ProductItem
              item={item}
              onPress={() => navigate(appRoutes.product, { item })}
            />
          </View>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperClassName="gap-7"
      contentContainerClassName="gap-7 px-1 pb-32 mt-10"
      showsVerticalScrollIndicator={false}
    />
  );
};
