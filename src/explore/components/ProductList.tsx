import cn from "clsx";
import React from "react";
import { FlatList, View } from "react-native";
import { MenuItem } from "src/interface";
import { ExploreHeader } from "./ExploreHeader";
import Filters from "./Filters";
import { ProductItem } from "./ProductItem";

interface ProductListProps {
  menus: MenuItem[];
}

export const ProductList: React.FC<ProductListProps> = ({ menus }) => {
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
            <ProductItem item={item} />
          </View>
        );
      }}
      ListHeaderComponent={() => (
        <>
          <ExploreHeader />

          <Filters />
        </>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperClassName="gap-7"
      contentContainerClassName="gap-7 px-1 pb-32 mt-5"
      showsVerticalScrollIndicator={false}
    />
  );
};
